import React, { useState } from 'react';
import styled from 'styled-components';
import { CloseCircleFilled } from '@ant-design/icons';
const StyledWrapper = styled.div`
  position: relative;
  .remove {
    position: absolute;

    top: -4px;
    right: -4px;
    font-size: 0.6rem;
  }
`;
export default function Removable({ children, removable = true }) {
  const [vanish, setVanish] = useState(false);
  const [closeVisible, setCloseVisible] = useState(false);
  const handleRemoveClick = () => {
    setVanish(true);
  };
  const handleEnter = () => {
    setCloseVisible(true);
  };
  const handleLeave = () => {
    setCloseVisible(false);
  };
  return vanish ? null : removable ? (
    <StyledWrapper onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {closeVisible && <CloseCircleFilled onClick={handleRemoveClick} className="remove" />}
      {children}
    </StyledWrapper>
  ) : (
    children
  );
}
