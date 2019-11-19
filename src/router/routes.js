import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '~/pages/Login';
import RepositoryList from '~/pages/RepositoryList';
import RepositoryDetails from '~/pages/RepositoryDetails';

import {ROUTES} from './index';

const AuthStack = createStackNavigator(
  {[ROUTES.LOGIN]: Login},
  {mode: 'modal', headerMode: 'none'},
);

const MainStack = createStackNavigator(
  {[ROUTES.REPOSITORY_LIST]: RepositoryList, [ROUTES.REPOSITORY_DETAIL]: RepositoryDetails},
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
