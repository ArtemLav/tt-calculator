import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ScreenArea from './src/components/ScreenArea';
import ButtonArea from './src/components/ButtonArea';

export default function App() {
  const [number, setNumber] = useState('0');
  const [operator, setOperator] = useState(null);
  const [rememberedNumber, setRememberedNumber] = useState(null);

  const handleNumberClick = (newNumber) => {
    if (number === '0' && !number.includes('.')) {
      setNumber(newNumber);
    } else {
      setNumber(`${number}${newNumber}`);
    }
  };

  const handleOperationClick = (operation) => {
    setRememberedNumber(number);
    setNumber('0');
    setOperator(operation);
  };

  const handleEqualClick = () => {
    switch (operator) {
      case '+':
        setNumber(`${+rememberedNumber + +number}`);
        break;

      case '-':
        setNumber(`${rememberedNumber - number}`);
        break;

      case '*':
        setNumber(`${rememberedNumber * number}`);
        break;

      case '/':
        setNumber(`${rememberedNumber / number}`);
        break;

      default:
        break;
    }

    setOperator(null);
    setRememberedNumber(null);
  }

  const handlePercent = () => {
    if (number !== '0') {
      setNumber(`${number / 100}`);
    }
  };

  const handleClear = () => {
    setNumber('0');
    setOperator(null);
  };

  const handleAddingDot = () => {
    if (!number.includes('.')) {
      setNumber(`${number}.`);
    }
  };

  const handleReverseSign = () => {
    setNumber(`${number * -1}`);
  };

  const removeOneDigit = () => {
    if (number !== '0') {
      if (number.length === 1) {
          setNumber('0')
      } else {
        setNumber(number.slice(0, -1));
      }
    }
  }

  return (
    <View style={styles.container}>
      <ScreenArea number={number} removeOneDigit={removeOneDigit}/>
      <ButtonArea
        handleEqualClick={handleEqualClick}
        handleOperationClick={handleOperationClick}
        handleNumberClick={handleNumberClick}
        handleReverseSign={handleReverseSign}
        handlePercent={handlePercent}
        handleAddingDot={handleAddingDot}
        handleClear={handleClear}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 15,
  },
});
