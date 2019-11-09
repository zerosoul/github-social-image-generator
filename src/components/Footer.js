/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components';
import { Divider, Icon } from 'antd';
const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 3rem;
  font-size: 0.8rem;
  color: #ddd;

  .producthunt {
    margin-bottom: 0.5rem;
    z-index: 999;
  }
  .copyright {
    z-index: 999;
    margin-bottom: 1rem;
    a {
      color: #666;
      padding: 0 0.4rem;
    }
  }
  .social {
    z-index: 999;
    font-size: 0.6rem;
    display: flex;
    margin-bottom: 0.5rem;
    > a {
      display: flex;
      align-items: center;
      padding: 0 0.5rem;
      .icon {
        font-size: 1rem;
        margin-right: 0.2rem;
      }
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Divider />

      <div className="social">
        <a href="//twitter.com/wsygc" target="_blank">
          <Icon className="icon" type="twitter" />
          @wsygc
        </a>
        <a href="//weibo.com/yanggc2014" target="_blank">
          <Icon className="icon" type="weibo" />
          @Zerosoul_Man
        </a>
      </div>
      <div className="copyright">
        Copyright © 2019 by
        <a href="//yangerxiao.com" target="_blank">
          Tristan
        </a>
      </div>
    </Wrapper>
  );
}
