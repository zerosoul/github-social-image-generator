import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Cover from './Cover';

const SlideInLeft = keyframes`
  from{
    transform:translateX(100px)
  }
  to{
    transform:translateX(0)

  }
`;

const StyledWrapper = styled.aside`
  display: flex;
  position: fixed;
  right: 5px;
  top: 20%;
  z-index: 999;
  .expand {
    box-shadow: 0 0 5px black;
    background-color: #d6ecf0;
    z-index: 2;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    font-size: 0.8rem;
    width: 3rem;
    height: 3rem;
    font-weight: 800;
    animation: ${SlideInLeft} 0.5s;
  }
  .cases {
    z-index: 2;
    padding: 0.4rem 0.2rem;
    .case {
      transform: translateX(100px);
      cursor: pointer;
      text-align: center;
      font-weight: 800;
      font-size: 0.8rem;
      padding: 0.3rem 0.5rem;
      border-radius: 0.4rem;
      margin: 0.3rem 0.4rem;
      background-color: #eedeb0;
      animation: ${SlideInLeft} 0.5s forwards;
    }
  }
`;

const repos = [
  {
    title: 'React',
    url: 'https://github.com/facebook/react'
  },
  {
    title: 'Vue',
    url: 'https://github.com/vuejs/vue'
  },
  {
    title: 'Angular',
    url: 'https://github.com/angular/angular'
  },
  {
    title: 'Electron',
    url: 'https://github.com/electron/electron'
  },
  {
    title: 'Linux',
    url: 'https://github.com/torvalds/linux'
  },
  {
    title: 'VS Code',
    url: 'https://github.com/microsoft/vscode'
  },
  {
    title: 'Node.js',
    url: 'https://github.com/nodejs/node'
  }
];
export default function Cases({ updateInput }) {
  const [fold, setFold] = useState(true);
  const toggleFold = () => {
    setFold(prev => !prev);
  };
  const handleClick = ({ target }) => {
    const currUrl = target.dataset.url;
    console.log({ currUrl });

    updateInput(currUrl);
    toggleFold();
  };
  return (
    <>
      <StyledWrapper>
        {!fold && <Cover onClick={toggleFold}></Cover>}
        {fold && (
          <div onClick={toggleFold} className="expand">
            Cases
          </div>
        )}
        {!fold && (
          <ul className="cases">
            {repos.map(({ title, url }, idx) => {
              return (
                <li
                  style={{ animationDelay: `${0.1 * idx}s` }}
                  className="case"
                  onClick={handleClick}
                  key={title}
                  data-url={url}
                >
                  {title}
                </li>
              );
            })}
          </ul>
        )}
      </StyledWrapper>
    </>
  );
}
