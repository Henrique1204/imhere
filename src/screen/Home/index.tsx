import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import Styles from './styles';

const Home: React.FC = () => {
	const handleParticipantAdd = () => {};

	return (
		<View style={Styles.container}>
			<Text style={Styles.eventName}>Nome do evento</Text>

			<Text style={Styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

			<TextInput
				style={Styles.input}
				placeholder='Nome do participante'
				placeholderTextColor='#6B6B6B'
			/>

			<TouchableOpacity style={Styles.button} onPress={handleParticipantAdd}>
				<Text style={Styles.buttonText}>+</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Home;
