import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import styled, { keyframes } from 'styled-components';
import { BgColorsOutlined } from '@ant-design/icons';
import Cover from './Cover';

const FadeInDown = keyframes`
  from{
    transform:translateY(-20px);
    opacity:0;
  }
  to{
    transform:translateY(0);
    opacity:1;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  .popover {
    position: absolute;
    z-index: 2;
    animation: ${FadeInDown} 1s;

    .picker {
      position: absolute;
      top: 1.2rem;
      right: 0;
    }
  }
`;
export default function BgColorSetting({ color = 'fff', updateColor }) {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible((prev) => !prev);
  };
  const handleColorChange = (color) => {
    const { rgb } = color;
    let rgbStr = `rgba(${Object.values(rgb).join(',')})`;
    updateColor(rgbStr);
  };
  return (
    <StyledWrapper contentEditable={false}>
      <BgColorsOutlined data-html2canvas-ignore onClick={handleVisible} className="bg" />

      {visible ? (
        <div className="popover">
          <Cover onClick={handleVisible} />
          <SketchPicker className="picker" color={color} onChangeComplete={handleColorChange} />
        </div>
      ) : null}
    </StyledWrapper>
  );
}
