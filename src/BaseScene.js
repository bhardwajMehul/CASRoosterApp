import React, { Component } from 'react';
import { View, Text, SectionList, SafeAreaView } from 'react-native';

import { Loader } from './Common';

export default class BaseScene extends Component {
	navigate(screen) {
		this.props.navigation.navigate(screen);
	}

	show(text = '') {
		this.Loader.show(text);
	}

	hide() {
		this.Loader.hide();
	}

	renderSpinner() {
		<Loader
			ref={(o) => {
				this.Loader = o;
			}}
		/>;
	}

	renderContent() {
		return <View />;
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				{this.renderContent()}
				{this.renderSpinner()}
			</SafeAreaView>
		);
	}
}
