import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView, Text} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
