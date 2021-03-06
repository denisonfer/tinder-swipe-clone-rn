import Reactotron from 'reactotron-react-native'

// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';

import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '10.0.0.7' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect(); // let's connect!

  console.tron = tron;
  tron.clear();
}
