import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Dimensions } from 'react-native';

import PropTypes from 'prop-types';

export default function ButtonArea({
                                     handleNumberClick,
                                     handleClear,
                                     handlePercent,
                                     handleReverseSign,
                                     handleAddingDot,
                                     handleOperationClick,
                                     handleEqualClick,
}) {

  return (
    <View style={styles.buttons}>
      <View style={styles.row}>
        <TouchableHighlight
          style={[styles.button, styles.buttonGray]}
          onPress={handleClear}
        >
          <Text style={styles.text}>AC</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.buttonGray]}
          onPress={handleReverseSign}
        >
          <Text style={styles.text}>+/-</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.buttonGray]}
          onPress={handlePercent}
        >
          <Text style={styles.text}>%</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.buttonOrange]}
          onPress={() => handleOperationClick('/')}
        >
          <Text style={styles.text}>&#xf7;</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.row}>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.text}>mc</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}>
          <Text style={styles.text}>mr</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}>
          <Text style={styles.text}>m-</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.button, styles.buttonOrange]}>
          <Text style={styles.text}>m+</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.row}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('7')}
        >
          <Text style={styles.text}>7</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('8')}
        >
          <Text style={styles.text}>8</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('9')}
        >
          <Text style={styles.text}>9</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.buttonOrange]}
          onPress={() => handleOperationClick('*')}
        >
          <Text style={styles.text}>X</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.row}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('4')}
        >
          <Text style={styles.text}>4</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('5')}
        >
          <Text style={styles.text}>5</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('6')}
        >
          <Text style={styles.text}>6</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.buttonOrange]}
          onPress={() => handleOperationClick('-')}
        >
          <Text style={styles.text}>-</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.row}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('1')}
        >
          <Text style={styles.text}>1</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('2')}
        >
          <Text style={styles.text}>2</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('3')}
        >
          <Text style={styles.text}>3</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.buttonOrange]}
          onPress={() => handleOperationClick('+')}
        >
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.row}>
        <TouchableHighlight
          style={[styles.button, styles.buttonZero]}
          onPress={() => handleNumberClick('0')}
        >
          <Text style={styles.text}>0</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={handleAddingDot}>
          <Text style={styles.text}>.</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.buttonOrange]}
          onPress={handleEqualClick}
        >
          <Text style={styles.text}>=</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: 'black',
    height: '75%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#333333',
    justifyContent: 'center',
  },
  buttonZero: {
    width: 180,
    paddingLeft: 30,
    alignItems: 'flex-start'
  },
  buttonGray: {
    backgroundColor: '#a5a5a5',
  },
  buttonOrange: {
    backgroundColor: '#ff9a0a',
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
  },
});

ButtonArea.propTypes = {
  handleNumberClick: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handlePercent: PropTypes.func.isRequired,
  handleReverseSign: PropTypes.func.isRequired,
  handleAddingDot: PropTypes.func.isRequired,
  handleOperationClick: PropTypes.func.isRequired,
  handleEqualClick: PropTypes.func.isRequired,
}
