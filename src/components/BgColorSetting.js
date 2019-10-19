import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

import { SketchPicker } from 'react-color';

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
    .cover {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
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
    setVisible(prev => !prev);
  };
  const handleColorChange = color => {
    const { rgb } = color;
    let rgbStr = `rgba(${Object.values(rgb).join(',')})`;
    updateColor(rgbStr);
  };
  return (
    <StyledWrapper contentEditable={false}>
      <Icon data-html2canvas-ignore onClick={handleVisible} type="bg-colors" className="bg" />

      {visible ? (
        <div className="popover">
          <div className="cover" onClick={handleVisible}></div>
          <SketchPicker className="picker" color={color} onChangeComplete={handleColorChange} />
        </div>
      ) : null}
    </StyledWrapper>
  );
}
