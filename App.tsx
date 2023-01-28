import * as React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { RecoilRoot } from 'recoil';
import Navigation from './navigation';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
	React.useEffect(() => {
		SplashScreen.hide();
	});
	return (
		<RecoilRoot>
			<React.Suspense
				fallback={
					<View
						style={{
							width: 300,
							height: 300,
							alignSelf: 'center',
							backgroundColor: 'white',
						}}
					>
						<Text
							style={{
								color: 'red',
								fontSize: 30,
							}}
						>
							로딩 중..
						</Text>
					</View>
				}
			></React.Suspense>
			<Navigation />
			<StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
		</RecoilRoot>
	);
}
