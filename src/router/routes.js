import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '~/pages/Login';
import RepoList from '~/pages/RepoList';
import RepoDetail from '~/pages/RepoDetails';

import {ROUTES} from './index';

const AuthStack = createStackNavigator(
  {[ROUTES.LOGIN]: Login},
  {mode: 'modal', headerMode: 'none'},
);

const MainStack = createStackNavigator(
  {[ROUTES.REPO_LIST]: RepoList, [ROUTES.REPO_DETAIL]: RepoDetail},
  {headerMode: 'none'},
);

export default createAppContainer(
  createSwitchNavigator(
    {
      [ROUTES.AUTH]: AuthStack,
      [ROUTES.MAIN]: MainStack,
    },
    {
      initialRouteName: ROUTES.AUTH,
      mode: 'modal',
      headerMode: 'none',
    },
  ),
);
