import React from 'react';
import {Home, HomeProps, Item} from '../src/screens/Home';
import {TrackProps} from '../src/components/Track';
import {render} from '@testing-library/react-native';

describe('Button tests', () => {
  it('renders Home correctly', () => {
    const {getByTestId} = render(<Home />);
    const Component = getByTestId('homeContainer');
    expect(Component).toMatchSnapshot();
  });

  it('renders the tracks FlatList', () => {
    const {getByTestId} = render(<Home />);
    const flatListElements = getByTestId('tracksFlatList');
    expect(flatListElements).toBe(1);

    const Component = getByTestId('homeContainer');
    expect(Component).toMatchSnapshot();
  });
});
