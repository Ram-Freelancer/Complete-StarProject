import React from 'react';
import { StyleSheet, View } from 'react-native';
import Rating from './Rating';

export default function App() {
  return (
		<View style={styles.container}>
      <Rating rating={4} numStars={7} starColor = 'orange'/>
		</View>
  );
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
