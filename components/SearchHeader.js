import React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';

const SearchHeader = () => {
  const {width} = useWindowDimensions();
  return (
    <Text style={[styles.block, {width: width - 32, height: 24}]}>Hello</Text>
  );
};

const styles = StyleSheet.create({
  block: {
    color: 'white',
    backgroundColor: 'blue',
  },
});

export default SearchHeader;
