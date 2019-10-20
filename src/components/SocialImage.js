import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import Removable from './Removable';
import BgColorSetting from './BgColorSetting';
import NoiseBg from '../assets/img/noise.bg.png';
import { getDateFormatted } from '../utils';
import Avatar from './Avatar';
const StyledWrapper = styled.section`
  margin: 1rem auto;
  padding: 1rem 1.4rem;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 640px;
  height: 320px;
  white-space: nowrap;
  box-shadow: -3px 7px 14px 0px black;
  background-image: url(${NoiseBg});
  background-repeat: repeat;

  h2 {
    font-weight: 800;
    font-size: 1.4rem;
    margin: 0.3rem 0.6rem;
    padding: 0.2rem;
  }
  .desc {
    font-size: 0.8rem;
    margin: 0.4rem;
    padding: 0.2rem;
    white-space: normal;
    line-height: 1.4;
    text-align: center;
  }
  .addr {
    font-size: 0.5rem;
    color: blue;
    margin: 0.2rem;
    padding: 0.2rem;
  }
  .createDate {
    padding: 0.5rem;
    font-size: 0.5rem;
  }
  .lang {
    font-size: 0.6rem;
    color: #666;
  }
  .toggleEdit {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
  }
  &[contenteditable='true'] {
    h2,
    .name,
    .desc,
    .addr {
      border: 1px solid #111;
    }
  }
`;

export default function SocialImage({
  name,
  description,
  url,
  primaryLanguage: { name: lang, color },
  owner: { avatarUrl },
  createdAt
}) {
  const [currBgColor, setCurrBgColor] = useState('#e3f9fd');
  const [editable, setEditable] = useState(false);
  const toggleEdit = () => {
    setEditable(prev => !prev);
  };
  return (
    <StyledWrapper contentEditable={editable} id="SOCIAL_IMAGE" bgColor={currBgColor}>
      <Avatar url={avatarUrl} editable={editable} />
      <h2>{name}</h2>
      <p className="desc">{description}</p>
      <Removable removable={editable}>
        <p className="addr">{url}</p>
      </Removable>
      <Removable removable={editable}>
        <p contentEditable={false} className="createDate">
          Since {getDateFormatted(createdAt)}
        </p>
      </Removable>
      <Removable removable={editable}>
        <p contentEditable={false} className="lang">
          Code with <span style={{ color }}>{lang}</span>
        </p>
      </Removable>
      <BgColorSetting color={currBgColor} updateColor={setCurrBgColor} />
      <Icon
        onClick={toggleEdit}
        data-html2canvas-ignore
        className="toggleEdit"
        type={editable ? 'save' : 'edit'}
      />
    </StyledWrapper>
  );
}
