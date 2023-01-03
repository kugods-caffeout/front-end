import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { RootTabScreenProps } from '../types';

export default function DrinkDetailScreen({
	navigation,
}: RootTabScreenProps<'Home'>) {
	return (
		<View style={styles.topContainer}>
			<Text
				style={{
					color: Colors.Black,
					fontWeight: 'bold',
				}}
			>
				HomeScreen 준비중
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 844,
		backgroundColor: Colors.White,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
