import { Dimensions, StyleSheet, View } from 'react-native';
import Movie from '../components/Movie';
import data from '../data/data.json';
import AddMovieFloatingButton from '../components/AddMovieFloatingButton';
import SegmentControl from '../components/SegmentControl';
import AddMovieModal from '../components/AddMovieModal';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Dashboard() {
  const firstMovie = data.movies[0];
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <SegmentControl
        segments={['All Movies', 'Movies By Category']}
        selectedSegment={0}
        onSegmentSelect={(index) => console.log(index)}
        style={{ width: Dimensions.get('window').width - 20}}
      />
      <Movie
        title={firstMovie.title}
        poster={firstMovie.poster}
        description={firstMovie.description}
      />
      <AddMovieFloatingButton style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
      }} onPress={() => {console.log('Add Movie Pressed')
        setModalVisible(true);

      }} />

      <AddMovieModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={() => {
          // Handle form submission
          console.log('Movie submitted');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
