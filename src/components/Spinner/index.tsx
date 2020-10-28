import * as React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from '../../utils';

export type SpinnerSize = 'large' | 'small';

interface SpinnerProps {
  size?: SpinnerSize;
  color?: string;
}

export const initialProps: SpinnerProps = {
  size: 'large',
  color: 'black',
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = initialProps.size,
  color = initialProps.color,
}) => {
  return (
    <View
      testID="spinnerContainer"
      style={[styles.container, styles.horizontal]}>
      <ActivityIndicator
        testID="activityIndicator"
        size={size}
        color={color || Colors.porcelain}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
