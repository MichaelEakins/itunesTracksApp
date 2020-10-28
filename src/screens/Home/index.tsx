import React, {useState} from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {Colors} from '../../utils';
import {Button} from '../../components/Button';
import {searchAppleServicesByArtist} from '../../network';
import {Track, TrackProps} from '../../components/Track';
import {Spinner} from '../../components/Spinner';

export const Item = ({
  artistName,
  trackName,
  trackPrice,
  releaseDate,
  primaryGenreName,
  trackId,
}: TrackProps) => (
  <View testID="itemContainer">
    <Track
      trackId={trackId}
      artistName={artistName}
      trackName={trackName}
      trackPrice={trackPrice}
      releaseDate={releaseDate}
      primaryGenreName={primaryGenreName}
    />
  </View>
);

export interface HomeProps {
  onPress?: () => void;
  defaultTracks?: TrackProps[];
  loading?: boolean;
}

export const Home: React.FC<HomeProps> = ({
  onPress,
  defaultTracks,
  loading = false,
}) => {
  const [tracks, setTracks] = useState(defaultTracks);
  const [isLoading, setIsLoading] = useState(loading);

  const handlePress = async () => {
    setIsLoading(true);
    const results = await searchAppleServicesByArtist('jack', 'johnson');
    setTracks(results);
    setIsLoading(false);
  };

  return (
    <View testID="homeContainer" style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPress ? onPress : handlePress}
          buttonText={'Show Records'}
        />
      </View>

      {tracks !== undefined && (
        <FlatList
          testID="tracksFlatList"
          contentContainerStyle={styles.flatList}
          data={tracks}
          renderItem={({item}) => (
            <Item
              trackId={item.trackId}
              artistName={item.artistName}
              trackName={item.trackName}
              trackPrice={item.trackPrice}
              releaseDate={item.releaseDate}
              primaryGenreName={item.primaryGenreName}
            />
          )}
          keyExtractor={(item) => `${item.trackId}`}
        />
      )}
      {isLoading && (
        <View testID="spinnerContainer" style={styles.spinnerContainer}>
          <Spinner />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.blizzardBlue,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight || 30,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
  flatList: {
    marginTop: 50,
    bottom: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  spinnerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
  },
});
