/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import UnityView from 'react-native-unity-view';

export default () => {
  const unityRef = useRef();

  return (
    <SafeAreaView>
      <UnityView ref={ref => (unityRef = ref)} />
    </SafeAreaView>
  );
};
