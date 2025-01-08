import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.titleContainer}>
        {/* Header Section */}
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Hey,</Text>
          <Text style={styles.name}>Piyush</Text>
        </View>

        {/* Boxes Section */}
        <View style={styles.subViewContainer}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Box 1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Box 2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Box 3</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Box 4</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Box 5</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Box 6</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  titleContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  textContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#555',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subViewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#4CAF50',
    margin: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  boxText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
