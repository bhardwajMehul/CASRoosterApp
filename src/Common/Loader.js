import React, { Component, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default class Loader extends Component {
	state = { display: false, text: '' };

	show(text = '') {
		this.setState({ display: true, text });
	}

	hide() {
		this.setState({ display: false });
	}

	render() {
		if (display) {
			return (
				<View style={styles.container}>
					<ActivityIndicator
						size={styles.indicatorProps.size}
						color={styles.indicatorProps.color}
						style={styles.indicatorProps.style}
					/>
					<Text style={styles.textStyle}>{this.state.text}</Text>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,.3)', justifyContent: 'center', alignItems: 'center' },
	textStyle: { fontSize: 12 },
	indicatorProps: { size: 'large', color: 'white', style: {} },
});
