import React, {useEffect, useRef, useState} from 'react';
import {useContext} from 'react';
import {StyleSheet, View, Text, Animated, Button} from 'react-native';
import LogContext from '../contexts/LogContext';

const FadeInAndOut = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [hidden, animation]);
  return (
    <View>
      <Animated.View style={[styles.rectangle, {opacity: animation}]} />
      <Button
        title="Toggle"
        onPress={() => {
          setHidden(!hidden);
        }}
      />
    </View>
  );
};

const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <FadeInAndOut />
    </View>
  );
};
const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default CalendarScreen;
