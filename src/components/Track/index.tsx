import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import {Colors} from '../../utils';

export interface TrackProps {
  trackId: number;
  artistName: string;
  trackName: string;
  trackPrice: string;
  releaseDate: string;
  primaryGenreName: string;
  artworkUrl100: string;
}
export const Track: React.FC<TrackProps> = ({
  trackId,
  artistName,
  trackName,
  trackPrice,
  releaseDate,
  primaryGenreName,
  artworkUrl100,
}) => {
  console.log(artworkUrl100);
  return (
    <View testID="artistContainer" key={trackId} style={styles.container}>
      <Text testID="artistName">Artist: {artistName}</Text>
      <View testID="namePriceContainer" style={styles.namePriceContainer}>
        <View testID="trackNameContainer" style={styles.trackName}>
          <Text testID="trackNameText">Track Name: {trackName}</Text>
        </View>
        <View testID="trackPriceContainer" style={styles.TrackPrice}>
          <Text testID="trackPriceText">Price: ${trackPrice}</Text>
        </View>
      </View>
      <Text testID="releaseDateText">
        Release Date: {moment(releaseDate).format('DD-MM-YYYY')}
      </Text>
      <View testID="genreContainer" style={styles.genre}>
        <Text testID="genreNameText">Genre: {primaryGenreName}</Text>
      </View>
      <Image
        style={{
          width: 51,
          height: 51,
          resizeMode: 'contain',
        }}
        source={{
          uri: artworkUrl100,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 5,
    padding: 5,
    backgroundColor: Colors.white,
  },
  entry: {
    flex: 1,
  },
  namePriceContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  trackName: {
    alignItems: 'flex-start',
    flex: 3,
  },
  TrackPrice: {
    alignItems: 'flex-end',
    flex: 1,
  },
  genre: {
    alignItems: 'flex-end',
  },
});
