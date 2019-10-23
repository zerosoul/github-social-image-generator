import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export default function Cover(props) {
  return <Wrapper {...props}></Wrapper>;
}
