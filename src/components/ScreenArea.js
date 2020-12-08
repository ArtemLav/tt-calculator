import React from 'react';
import { StyleSheet, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import PropTypes from 'prop-types';

export default function ScreenArea({ number, removeOneDigit }) {
  return (
    <GestureRecognizer
      onSwipeLeft={() => removeOneDigit()}
      onSwipeRight={() => removeOneDigit()}
      style={styles.display}
    >
      <Text
        style={[
          styles.text,
          (number.length > 6) && styles.textSmaller,
          (number.length > 9) && styles.textSmallest,
        ]}
      >
        {number}
      </Text>
    </GestureRecognizer>
  )
};

const styles = StyleSheet.create({
  display: {
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
  textSmallest: {
    fontSize: 30,
  },
});

ScreenArea.propTypes = {
  number: PropTypes.string.isRequired,
  removeOneDigit: PropTypes.func.isRequired,
}
