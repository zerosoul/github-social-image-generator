import { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';
const gradientBG = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;
const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  body{
    -webkit-overflow-scrolling: touch;
    overflow:scroll;
    margin:0 auto;
    min-height:100vh;
    position: relative;
    background: linear-gradient(-45deg, #e0eee8, #c0ebd7, #bbcdc5, #7bcfa6);
     background-size: 400% 400%;
    animation: ${gradientBG} 15s ease infinite;
  }
  #root{
    min-height:100vh;
  }

  @media screen and (min-width: 320px){
      html {
          font-size: 10px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 12px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 18px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 20px;
      }
  }
  @media screen and (min-width: 1200){
      html {
          font-size: 26px;
      }
  }
  @media screen and (min-width: 1400px){
      html {
          font-size: 28px;
      }
  }
`;

export default GlobalStyle;
