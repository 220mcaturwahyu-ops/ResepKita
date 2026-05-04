import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="#ff6b6b"
        testID="loading-indicator"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height * 0.6,
  },
});

export default LoadingIndicator;
