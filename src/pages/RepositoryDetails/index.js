import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getCommits, getCommitAvatar} from '~/store/ducks/repository';

import {
  Indicator,
  ScrollViewWrapper,
  Wrapper,
  Logo,
  Title,
  Post,
  Avatar,
  MessageWrapper,
  Message,
} from './style';

const RepositoryDetails: () => React$Node = ({navigation}) => {
  const dispatch = useDispatch();
  const repo = navigation.getParam('repo');
  const commitState = useSelector(state => state.repository.commits);
  const commits = commitState[repo.id];
  const isLoadingCommits =
    useSelector(state => state.repository.loadingCommits) || false;

  useEffect(() => {
    if (!commits) {
      if (dispatch) {
        dispatch(getCommits(repo));
      }
    }
  }, [commits, dispatch, repo]);

  if (isLoadingCommits || !commits) {
    return <Indicator />;
  }

  return (
    <Wrapper>
      <Logo source={require('~/assets/images/logo-full.png')} />
      <Title>
        {repo.name} ({commits.length} commits)
      </Title>
      <ScrollViewWrapper>
        {commits.map((commit, index) => (
          // eslint-disable-next-line react-native/no-inline-styles
          <Post key={commit.sha} style={{borderTopWidth: index ? 1 : 0}}>
            <Avatar source={getCommitAvatar(commit)} />
            <MessageWrapper>
              <Message>{commit.commit.message}</Message>
            </MessageWrapper>
          </Post>
        ))}
      </ScrollViewWrapper>
    </Wrapper>
  );
};

export default RepositoryDetails;
