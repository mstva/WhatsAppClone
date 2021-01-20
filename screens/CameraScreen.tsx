import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../constants/Colors";

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
