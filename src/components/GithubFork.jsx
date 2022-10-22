import React from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';

export default function GithubFork() {
  return (
    <GitHubForkRibbon
      position="left-bottom"
      color="green"
      href="https://github.com/zerosoul/github-social-image-generator"
      target="_blank"
    >
      Fork me on Github
    </GitHubForkRibbon>
  );
}
