import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LogContext from '../contexts/LogContext';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <LogContext.Consumer>{value => <Text>{value}</Text>}</LogContext.Consumer>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default FeedsScreen;
