import React, { useState } from 'react';
import { Button } from 'antd';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const sleep = async (dur = 2) => {
  const misDur = dur * 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, misDur);
  });
};
export default function Download({ ele }) {
  const [generating, setGenerating] = useState(false);
  const generateImage = async (ele, name = 'repo-social-image') => {
    setGenerating(true);
    await sleep(1);
    const tmpEle = document.querySelector('#SOCIAL_IMAGE');
    tmpEle.classList.add('starting');
    html2canvas(tmpEle, {
      allowTaint: true,
      useCORS: true,
      debug: process.env.NODE_ENV !== 'production',
      // onclone: document => {
      //   let tmp = document.querySelector(query);
      //   tmp.classList.add('starting');

      //   console.log('dommmm', tmp.innerHTML);
      // },
      scale: window.devicePixelRatio
    }).then(function(canvas) {
      console.log(canvas);

      canvas.toBlob(blob => {
        saveAs(blob, `${name}-${new Date().getTime()}.png`);
        setGenerating(false);
      }, 'image/png');
      // saveAs(canvas.toDataURL(), `${name}-${new Date().getTime()}.png`);
      ele.classList.remove('starting');
    });
  };
  const handleClick = async () => {
    await generateImage(ele);
  };
  return (
    <Button
      loading={generating}
      type="primary"
      icon="download"
      size={'large'}
      onClick={handleClick}
    >
      Download
    </Button>
  );
}
