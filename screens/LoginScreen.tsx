import * as React from 'react';
import {
	View,
	FlatList,
	Pressable,
	TextInput,
	StyleSheet,
	Text,
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

export default function LoginScreen({
	navigation,
}: RootStackScreenProps<'Login'>) {
	const logInWithKakao = async () => {
		const token: KakaoOAuthToken = await login();
		const profile = await getKakaoProfile();
		console.log(token, profile);
		return JSON.stringify(token);
	};
	const logOutWithKakao = async () => {
		const logOutMessage = await logout();
		console.log(logOutMessage);
		return logOutMessage;
	};

	const getKakaoProfile = async () => {
		const profile: KakaoProfile = await getProfile();
		console.log(profile);
		return JSON.stringify(profile);
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
			<Text
				style={{
					color: Colors.Black,
					fontWeight: 'bold',
					fontSize: 30,
				}}
			>
				로그인 화면
			</Text>
			<Pressable
				style={({ pressed }) => [
					{
						opacity: pressed ? 0.5 : 1,
					},
					styles.loginButton,
				]}
				onPress={logInWithKakao}
			>
				<Text>로그인</Text>
			</Pressable>
			<Pressable
				style={({ pressed }) => [
					{
						opacity: pressed ? 0.5 : 1,
					},
					styles.loginButton,
				]}
				onPress={getKakaoProfile}
			>
				<Text>카톡 프로필 정보 가져오기</Text>
			</Pressable>
			<Pressable
				style={({ pressed }) => [
					{
						opacity: pressed ? 0.5 : 1,
					},
					styles.loginButton,
				]}
				onPress={getKakaoToken}
			>
				<Text>토큰 가져오기</Text>
			</Pressable>
			<Pressable
				style={({ pressed }) => [
					{
						opacity: pressed ? 0.5 : 1,
					},
					styles.loginButton,
				]}
				onPress={logOutWithKakao}
			>
				<Text>로그아웃</Text>
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
	loginButton: {
		width: Dimensions.width * 358,
		height: Dimensions.height * 44,
		borderRadius: 30,
		backgroundColor: '#FEE500',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
