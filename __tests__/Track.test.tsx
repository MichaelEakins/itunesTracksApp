import React from 'react';
import {Track, TrackProps} from '../src/components/Track';
import {render} from '@testing-library/react-native';

describe('Track tests', () => {
  const initialProps: TrackProps = {
    trackId: 0,
    artistName: '',
    trackName: '',
    trackPrice: '',
    releaseDate: '',
    primaryGenreName: '',
  };
  it('renders the spinner container correctly', () => {
    const {getByTestId} = render(<Track {...initialProps} />);
    const Component = getByTestId('artistContainer');
    expect(Component).toMatchSnapshot();
  });

  it('renders the artist name text', () => {
    const testText = 'My test Artist name';
    const defaultProps = {
      ...initialProps,
      artistName: testText,
    };
    const {getAllByTestId} = render(<Track {...defaultProps} />);
    const textElements = getAllByTestId('artistName');
    expect(textElements.length).toBe(1);
    expect(textElements[0].props.children).toBe(testText);
  });

  it('renders the name and price container successfully', () => {
    const {getByTestId} = render(<Track {...initialProps} />);
    const Component = getByTestId('namePriceContainer');
    expect(Component).toMatchSnapshot();
  });

  it('renders the track name container successfully', () => {
    const {getByTestId} = render(<Track {...initialProps} />);
    const Component = getByTestId('trackNameContainer');
    expect(Component).toMatchSnapshot();
  });

  it('renders the track name text', () => {
    const testText = 'test track name';
    const defaultProps = {
      ...initialProps,
      trackNameText: testText,
    };
    const {getAllByTestId} = render(<Track {...defaultProps} />);
    const textElements = getAllByTestId('trackNameText');
    expect(textElements.length).toBe(1);
    expect(textElements[0].props.children).toBe(testText);
  });

  it('renders the track price container successfully', () => {
    const {getByTestId} = render(<Track {...initialProps} />);
    const Component = getByTestId('trackPriceContainer');
    expect(Component).toMatchSnapshot();
  });

  it('renders the track price text', () => {
    const testText = 'test track price';
    const defaultProps = {
      ...initialProps,
      trackNameText: testText,
    };
    const {getAllByTestId} = render(<Track {...defaultProps} />);
    const textElements = getAllByTestId('genreContainer');
    expect(textElements.length).toBe(1);
    expect(textElements[0].props.children).toBe(testText);
  });

  it('renders the genre container successfully', () => {
    const {getByTestId} = render(<Track {...initialProps} />);
    const Component = getByTestId('trackPriceContainer');
    expect(Component).toMatchSnapshot();
  });

  it('renders the genre text', () => {
    const testText = 'test genre';
    const defaultProps = {
      ...initialProps,
      trackNameText: testText,
    };
    const {getAllByTestId} = render(<Track {...defaultProps} />);
    const textElements = getAllByTestId('genreNameText');
    expect(textElements.length).toBe(1);
    expect(textElements[0].props.children).toBe(testText);
  });
});
