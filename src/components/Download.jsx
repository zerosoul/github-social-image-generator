import React, { useState } from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const sleep = async (dur = 2) => {
  const misDur = dur * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, misDur);
  });
};
export default function Download({ query = null, disable = false }) {
  const [generating, setGenerating] = useState(false);
  const generateImage = async (query, name = 'repo-social-image') => {
    if (!query) return;
    setGenerating(true);
    const tmpEle = document.querySelector(query);

    if (tmpEle) {
      // 滚动到顶部，目前不这样，html2canvas有坑
      document.documentElement.scrollIntoView({ alignToTop: true, behavior: 'smooth' });
      await sleep(1);
      tmpEle.classList.add('starting');
      html2canvas(tmpEle, {
        allowTaint: true,
        useCORS: true,
        debug: process.env.NODE_ENV !== 'production',

        scale: window.devicePixelRatio,
      }).then(function (canvas) {
        console.log(canvas);

        canvas.toBlob((blob) => {
          saveAs(blob, `${name}-${new Date().getTime()}.png`);
          setGenerating(false);
        }, 'image/png');
        // saveAs(canvas.toDataURL(), `${name}-${new Date().getTime()}.png`);
        tmpEle.classList.remove('starting');
      });
    }
  };
  const handleClick = async () => {
    await generateImage(query);
  };
  return (
    <Button
      disabled={disable}
      loading={generating}
      type="primary"
      icon={<DownloadOutlined />}
      size={'large'}
      onClick={handleClick}
    >
      Download
    </Button>
  );
}
