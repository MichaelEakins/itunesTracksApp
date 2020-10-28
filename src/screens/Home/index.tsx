import React, {useState} from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils';
import {Button} from '../../components/Button';
import {searchAppleServicesByArtist} from '../../network';
import {Track, TrackProps} from '../../components/Track';
import {Spinner} from '../../components/Spinner';

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
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={onPress ? onPress : handlePress}
            buttonText={'Show Records'}
          />
        </View>

        {!isLoading && tracks && (
          <FlatList
            testID="tracksFlatList"
            contentContainerStyle={styles.flatList}
            data={tracks}
            renderItem={({item}) => (
              <Track
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    height: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight || 30,
  },
  content: {
    marginTop: 30,
    width: '100%',
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
  spinnerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
  },
});
