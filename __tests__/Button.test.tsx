import React from 'react';
import {Button} from '../src/components/Button';
import {render, fireEvent} from '@testing-library/react-native';

describe('Button tests', () => {
  const mockOnPress = jest.fn();
  it('renders the button correctly', () => {
    const {getByTestId} = render(
      <Button buttonText={'TEST'} onPress={mockOnPress} />,
    );
    const Component = getByTestId('touchable');
    expect(Component).toMatchSnapshot();
  });

  it('renders the button text', () => {
    const testText = 'Something to test';
    const {getAllByTestId} = render(
      <Button buttonText={testText} onPress={mockOnPress} />,
    );
    const textElements = getAllByTestId('touchableText');
    expect(textElements.length).toBe(1);
    expect(textElements[0].props.children).toBe(testText);
  });

  it('pressess the button and callback is called', () => {
    const textText = 'Silly Button Text';
    const {getByText} = render(
      <Button buttonText={textText} onPress={mockOnPress} />,
    );
    fireEvent.press(getByText(textText));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
