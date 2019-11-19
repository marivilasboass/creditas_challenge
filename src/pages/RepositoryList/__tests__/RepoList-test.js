import 'react-native';
import React from 'react';
import {RepositoryList} from '~/pages/RepositoryList';
import renderer from 'react-test-renderer';

it('renders RepositoryList correctly (snapshot)', () => {
  const component = renderer.create(<RepositoryList />).toJSON();
  expect(component).toMatchSnapshot();
});
