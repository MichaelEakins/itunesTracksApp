import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../utils';

interface ButtonProps {
  onPress: () => void;
  buttonText: string;
}
export const Button: React.FC<ButtonProps> = ({onPress, buttonText}) => {
  return (
    <TouchableOpacity
      testID="touchable"
      onPress={onPress}
      style={styles.button}>
      <Text testID="touchableText" style={styles.text}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    backgroundColor: Colors.blumine,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: 17,
  },
});
