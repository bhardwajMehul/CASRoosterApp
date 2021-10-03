import React, { Component } from 'react';
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';

class Splash extends Component {
	componentDidMount() {
		this.props.navigation.navigate();
	}
	render() {
		return (
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size={'large'} color={'gray'} style={{ paddingHorizontal: 15 }} />
				<Text>Loading</Text>
			</SafeAreaView>
		);
	}
}

export default Splash;
