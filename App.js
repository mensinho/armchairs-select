import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import Chair from './Chairs';

export default function App() {

  function chunk(array, size) {
    if (!array.length) {
      return [];
    }

    const head = array.slice(0, size);
    const tail = array.slice(size);

    return [head, ...chunk(tail, size)];
  };


  function renderItem(item) {
    return (
      <View style={item % 2 ? styles.rowR : styles.row}>
        <Chair item={item[0]} />
        <Chair item={item[1]} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        data={chunk(new Array(50).fill().map((_, i) => i + 1), 2)}
        numColumns={2}
        renderItem={({ item }) => renderItem(item)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowR: {
    flexDirection: 'row-reverse',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10
  },
  chair: {
    padding: 5,
    height: 50,
    width: 50,
    backgroundColor: '#CCC',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
