import { Dimensions } from 'react-native';

const basicDimensions = {
	width: 390,
	height: 844,
};

const width: any = (
	Dimensions.get('window').width / basicDimensions.width
).toFixed(2);

const height: any = (
	Dimensions.get('window').height / basicDimensions.height
).toFixed(2);

export default {
	width,
	height,
};
