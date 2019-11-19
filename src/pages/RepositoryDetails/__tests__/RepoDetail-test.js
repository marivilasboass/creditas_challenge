import 'react-native';
import React from 'react';
import RepoDetail from '~/pages/RepositoryDetails';
import renderer from 'react-test-renderer';

const navigation = {
  getParam: () => ({id: 1}),
};

it('renders RepositoryList correctly (snapshot)', () => {
  const component = renderer
    .create(<RepoDetail navigation={navigation} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
