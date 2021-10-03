import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (key, data) => {
	try {
		await AsyncStorage.setItem(key, data);
	} catch (error) {
		console.log('error saving data', error);
	}
};

const getItem = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		return value;
	} catch (error) {
		console.log('error getting data', error);
	}
};

const removeItem = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (error) {
		console.log('error getting data', error);
	}
};

module.exports = { setItem, getItem, removeItem };
