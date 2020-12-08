import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ScreenArea({ number }) {
  return (
    <View style={styles.top}>
      <Text
        style={[styles.text, (number.length > 6) ? styles.textSmaller : '']}
      >
        {number}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  top: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: '25%',
    backgroundColor: 'black',
  },
  text: {
    margin: 17,
    marginBottom: 5,
    fontSize: 90,
    color: 'white',
    textAlign: 'right',
  },
  textSmaller: {
    fontSize: 65,
  },
});
