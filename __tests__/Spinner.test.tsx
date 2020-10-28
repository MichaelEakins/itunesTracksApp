import React from 'react';
import {Spinner, initialProps, SpinnerSize} from '../src/components/Spinner';
import {render} from '@testing-library/react-native';
import {Colors} from '../src/utils';

describe('Spinner tests', () => {
  it('renders the spinner container correctly', () => {
    const {getByTestId} = render(<Spinner />);
    const Component = getByTestId('spinnerContainer');
    expect(Component).toMatchSnapshot();
  });

  it('renders the activityIndicator correctly', () => {
    const {getAllByTestId} = render(<Spinner />);
    const activityIndicator = getAllByTestId('activityIndicator');
    expect(activityIndicator.length).toBe(1);
    expect(activityIndicator[0].props.size).toBe(initialProps.size);
    expect(activityIndicator[0].props.color).toBe(initialProps.color);
  });

  it('renders the activityIndicator with new color correctly', () => {
    const newColor = Colors.porcelain;
    const defaultProps = {
      ...initialProps,
      color: newColor,
    };
    const {getAllByTestId} = render(<Spinner {...defaultProps} />);
    const activityIndicator = getAllByTestId('activityIndicator');
    expect(activityIndicator.length).toBe(1);
    expect(activityIndicator[0].props.size).toBe(defaultProps.size);
    expect(activityIndicator[0].props.color).toBe(newColor);
  });
  it('renders the activityIndicator with new size correctly', () => {
    const newSize: SpinnerSize = 'small';
    const defaultProps = {
      ...initialProps,
      size: newSize,
    };
    const {getAllByTestId} = render(<Spinner {...defaultProps} />);
    const activityIndicator = getAllByTestId('activityIndicator');
    expect(activityIndicator.length).toBe(1);
    expect(activityIndicator[0].props.color).toBe(defaultProps.color);
    expect(activityIndicator[0].props.size).toBe(newSize);
  });
});
