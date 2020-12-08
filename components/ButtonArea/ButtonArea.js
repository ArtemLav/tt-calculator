import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

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
    <View style={styles.bottom}>
      <View style={styles.row}>
        <TouchableHighlight style={styles.buttonGray} onPress={handleClear}>
          <Text style={styles.text}>AC</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonGray} onPress={handleReverseSign}>
          <Text style={styles.text}>+/-</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonGray} onPress={handlePercent}>
          <Text style={styles.text}>%</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonOrange}
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

        <TouchableHighlight style={styles.buttonOrange}>
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
          style={styles.buttonOrange}
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
          style={styles.buttonOrange}
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
          style={styles.buttonOrange}
          onPress={() => handleOperationClick('+')}
        >
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.row}>
        <TouchableHighlight
          style={styles.buttonZero}
          onPress={() => handleNumberClick('0')}
        >
          <Text style={styles.text}>0</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={handleAddingDot}>
          <Text style={styles.text}>.</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonOrange}
          onPress={handleEqualClick}
        >
          <Text style={styles.text}>=</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'black',
    height: '75%',
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
    height: 75,
    borderRadius: 38,
    paddingLeft: 30,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  buttonGray: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#a5a5a5',
    justifyContent: 'center',
  },
  buttonOrange: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#ff9a0a',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
  },
});
