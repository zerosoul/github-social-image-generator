import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import Download from '../components/Download';
import SocialImage from '../components/SocialImage';
import Placeholder from '../components/Placeholder';

const StyledWrapper = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Dashboard({ loading, repo }) {
  return (
    <Spin spinning={loading} size="large" tip={'Loading...'}>
      <StyledWrapper>
        {repo ? <SocialImage {...repo} /> : <Placeholder></Placeholder>}
        {repo ? <Download query={'#SOCIAL_IMAGE'} /> : null}
      </StyledWrapper>
    </Spin>
  );
}
