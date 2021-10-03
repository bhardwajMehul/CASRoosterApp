import React, { Component } from 'react';
import { View, Text, SectionList, SafeAreaView, StyleSheet } from 'react-native';

import BaseScene from '../../BaseScene';

class RoosterDetails extends BaseScene {
	renderContent() {
		<View style={{ backgroundColor: 'black', flex: 1 }}></View>;
	}
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});

export default RoosterDetails;
