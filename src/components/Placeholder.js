import React from 'react';
import Logo from '../assets/img/icon.png';
import styled from 'styled-components';
const Wrapper = styled.hgroup`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
  img {
    margin-bottom: 1rem;
    width: 10rem;
  }
  .headerTip {
    font-size: 1.2rem;
    font-weight: 800;
    /* text-transform: uppercase; */
    margin-bottom: 0.2rem;
  }
  .subTip {
    font-size: 0.8rem;
    color: #aaa;
  }
`;
export default function Placeholder() {
  return (
    <Wrapper>
      <img src={Logo} alt="star logo" />
      <h1 className="headerTip">☝️GitHub Repo Social Image Generator☝️</h1>
      <h2 className="subTip">📈📊generate social image online📊📈</h2>
    </Wrapper>
  );
}
