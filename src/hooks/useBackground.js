import { useState } from 'react';
import NoiseBg from '../assets/img/noise.bg.png';

const LOCAL_BG_COLOR = localStorage.getItem('LOCAL_BG_COLOR') || '#b36d61';
const LOCAL_BG_IMAGE = localStorage.getItem('LOCAL_BG_IMAGE') || NoiseBg;
export default function useBackground() {
  const [bgColor, setBgColor] = useState(LOCAL_BG_COLOR);
  const [bgImage, setBgImage] = useState(LOCAL_BG_IMAGE);
  const updateBgColor = color => {
    localStorage.setItem('LOCAL_BG_COLOR', color);
    setBgColor(color);
  };
  const updateBgImage = image => {
    localStorage.setItem('LOCAL_BG_IMAGE', image);
    setBgImage(image);
  };
  // 在此处 gameover undefined 很有必要，用来指示请求还没回来
  return {
    bgColor,
    bgImage,
    setBgImage: updateBgImage,
    setBgColor: updateBgColor
  };
}
