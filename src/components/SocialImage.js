import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import Bgs from './Backgrounds';
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
  width: 30rem;
  height: 15rem;
  white-space: nowrap;
  box-shadow: -3px 7px 14px 0px black;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: repeat;
  transition: background 0.5s;
  h2 {
    font-weight: 800;
    font-size: 1.4rem;
    margin: 0.3rem 0.4rem;
    padding: 0.2rem;
  }
  .desc {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
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
    padding: 0.2rem;
    font-size: 0.5rem;
  }
  .lang {
    font-size: 0.6rem;
    margin-top: 0.4rem;
    .tag {
      padding: 0.2rem 0.4rem;
      font-weight: 800;
      border-radius: 0.2rem;
    }
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
      box-shadow: inset 0 0 0 1px black;
    }
  }
`;

export default function SocialImage({
  updateDownloadStatus,
  name,
  description,
  url,
  primaryLanguage: { name: lang, color },
  owner: { avatarUrl },
  createdAt
}) {
  const [currBgImage, setCurrBgImage] = useState(NoiseBg);
  const [currBgColor, setCurrBgColor] = useState('#b36d61');
  const [editable, setEditable] = useState(false);
  const toggleEdit = () => {
    setEditable(prev => !prev);
    updateDownloadStatus(!editable);
  };

  return (
    <StyledWrapper
      contentEditable={editable}
      id="SOCIAL_IMAGE"
      bgImage={currBgImage}
      bgColor={currBgColor}
    >
      <Bgs updateBgImage={setCurrBgImage} bgImage={currBgImage} currBgColor={currBgColor} />
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
          Code with{' '}
          <span className="tag" style={{ color, border: `1px solid ${color}` }}>
            {lang}
          </span>
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
