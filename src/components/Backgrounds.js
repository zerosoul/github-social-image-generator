import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import Cover from './Cover';
import Grey from '../assets/img/bg/always-grey.png';
import Brick from '../assets/img/bg/brick-wall.png';
import BrickDark from '../assets/img/bg/brick-wall-dark.png';
import Food from '../assets/img/bg/food.png';
import Illusion from '../assets/img/bg/use-your-illusion.png';
import Wood from '../assets/img/bg/dark-wood.png';
// import Arches from '../assets/img/bg/arches.png';

const Bgs = [
  {
    title: 'always grey',
    bg: Grey,
    size: 'auto'
  },
  {
    title: 'brick wall',
    bg: Brick,
    size: 'contain'
  },
  {
    title: 'brick wall (dark)',
    bg: BrickDark,
    size: 'contain'
  },
  {
    title: 'food',
    bg: Food,
    size: 'contain'
  },
  {
    title: 'dark wood',
    bg: Wood,
    size: 'contain'
  },
  {
    title: 'use your illusion',
    bg: Illusion,
    size: 'auto'
  }
];

const StyledWrapper = styled.nav`
  position: absolute;
  left: 0;
  top: 1rem;

  .menu-toggler {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 2rem;
    height: 2rem;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
    & + label {
      opacity: 1;
      z-index: 1;
      margin: auto;
      background-size: auto;
      background-repeat: repeat;
      background-color: ${({ bgColor }) => bgColor};
      background-image: url(${({ bg }) => bg});
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 2rem;
      height: 2rem;
    }
    &:checked ~ ul .menu-item {
      opacity: 1;
    }
  }
  ${[0, 60, 120, 180, 240, 300]
    .map((num, idx) => {
      return `.menu-toggler:checked ~ ul .menu-item:nth-child(${idx + 1}) {
                transform: rotate(${num}deg) translate(-5rem);
              }`;
    })
    .join('\n')}

  .menu-item {
    cursor: pointer;
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 4rem;
    height: 4rem;
    opacity: 0;
    transition: 0.5s;
    .bg {
      box-shadow: 0 0 6px black;
      background-repeat: repeat;
      background-color: ${({ bgColor }) => bgColor};
      display: block;
      width: inherit;
      height: inherit;
      line-height: 1rem;
      border-radius: 50%;
      transition: 0.2s;
    }
  }
  ${[0, -60, -120, -180, -240, -300]
    .map((num, idx) => {
      return `.menu-item:nth-child(${idx + 1}) .bg {
                transform: rotate(${num}deg);
              }`;
    })
    .join('\n')}
`;

export default function Backgrounds({ bgImage = null, currBgColor = '#fff', updateBgImage }) {
  const [checked, setChecked] = useState(false);
  const handleBackgroundClick = ({ target }) => {
    console.log({ target });

    const bg = target.dataset.src;
    updateBgImage(bg);
    toggleCheckbox();
  };
  const toggleCheckbox = () => {
    setChecked(prev => !prev);
  };
  return (
    <StyledWrapper data-html2canvas-ignore bg={bgImage} bgColor={currBgColor}>
      {checked && <Cover onClick={toggleCheckbox} />}
      <input onChange={toggleCheckbox} checked={checked} className="menu-toggler" type="checkbox" />
      <label htmlFor="menu-toggler">
        <Icon theme="filled" type="picture" />
      </label>
      <ul>
        {Bgs.map(({ title, bg, size }) => {
          return (
            <li onClick={handleBackgroundClick} key={title} className="menu-item">
              <div
                style={{ backgroundImage: `url(${bg})`, backgroundSize: size }}
                data-src={bg}
                className="bg"
              />
            </li>
          );
        })}
      </ul>
    </StyledWrapper>
  );
}
