import * as React from 'react';
import {
	View,
	Pressable,
	StyleSheet,
	Text,
	Alert,
	ImageBackground,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { RootStackScreenProps } from '../types';
import {
	KakaoOAuthToken,
	KakaoProfile,
	login,
	logout,
	getProfile,
	getAccessToken,
	KakaoAccessTokenInfo,
} from '@react-native-seoul/kakao-login';
import KakaoLoginButton from '../assets/kakao-login.svg';
import LoginBackground from '../assets/login-background.svg';

export default function LoginScreen({
	navigation,
}: RootStackScreenProps<'Login'>) {
	const logInWithKakao = async () => {
		const token: KakaoOAuthToken = await login();
		const profile: KakaoProfile = await getKakaoProfile();
		const accessToken = token.accessToken;
		const id = profile.id;
		navigation.navigate('Home');
		// navigation.navigate('Home', { accessToken: accessToken, id: id  })
		return JSON.stringify(token);
	};
	const logOutWithKakao = async () => {
		const logOutMessage = await logout();
		Alert.alert(logOutMessage);
		return logOutMessage;
	};

	const getKakaoProfile = async () => {
		const profile: KakaoProfile = await getProfile();
		return profile;
	};

	const getKakaoToken = async () => {
		const token: KakaoAccessTokenInfo = await getAccessToken();
		console.log(token);
		return JSON.stringify(token);
	};

	return (
		<View
			style={[
				styles.topContainer,
				{
					paddingTop: useSafeAreaInsets().top,
					paddingBottom: useSafeAreaInsets().bottom,
				},
			]}
		>
			<LoginBackground
				style={{
					height: Dimensions.height,
					width: Dimensions.width,
					position: 'absolute',
				}}
			></LoginBackground>
			<View
				style={{ flexDirection: 'row', paddingTop: Dimensions.height * 570 }}
			>
				<Text style={{ fontSize: 12, color: Colors.White, fontWeight: 'bold' }}>
					카페아웃
				</Text>
				<Text
					style={{
						fontSize: 12,
						color: Colors.White,
						paddingLeft: 3,
						paddingBottom: Dimensions.height * 20,
					}}
				>
					시작하기
				</Text>
			</View>
			<Pressable
				style={({ pressed }) => [
					{
						opacity: pressed ? 0.5 : 1,
					},
				]}
				onPress={logInWithKakao}
			>
				<KakaoLoginButton />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 844,
		backgroundColor: Colors.White,
		alignItems: 'center',
	},
});
