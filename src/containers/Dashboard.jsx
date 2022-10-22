import React, { useState } from 'react';
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
  const [editing, setEditing] = useState(false);
  return (
    <StyledWrapper>
      {repo ? (
        <SocialImage updateDownloadStatus={setEditing} {...repo} />
      ) : (
        <Spin className="loadding" spinning={loading} size="large" tip={'Loading...'}>
          <Placeholder></Placeholder>
        </Spin>
      )}
      {repo ? <Download disable={editing} query={'#SOCIAL_IMAGE'} /> : null}
    </StyledWrapper>
  );
}
