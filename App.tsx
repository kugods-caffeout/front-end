import * as React from 'react';
import { StatusBar } from 'react-native';
import { RecoilRoot } from 'recoil';
import Navigation from './navigation';

export default function App() {
	return (
		<RecoilRoot>
			<StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
			<Navigation />
		</RecoilRoot>
	);
}
