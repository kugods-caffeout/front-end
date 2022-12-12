import React, { useState } from "react";
import { Platform, StyleSheet, View, Text, Image, Pressable } from "react-native";
import { RootStackScreenProps } from "../types";
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";
import Plus from "../assets/plusBtn.svg";
import Minus from "../assets/minusBtn.svg";
import { drinkState } from "../recoil/atoms/drinkState";
import { SafeAreaView } from "react-native-safe-area-context";
import Arrow from "../assets/arrowBtn.svg";
import Star from "../assets/starBtn.svg";
import BigArrow from "../assets/bigArrow.svg";

export default function DrinkDetailScreen({
	navigation,
}: RootStackScreenProps<'DrinkDetail'>) {
    const Size = ['Short', 'Tall', 'Grande', 'Venti']
    const Option = ['블론드', '디카페인', '1/2디카페인']
    const [caffeineCount, setCaffeineCount] = useState(0); 
    const [cupCount, setCupCount] = useState(0); 
    const [selectSize, setSelectSize] = useState('Tall');
    const [selectOption, setSelectOption] = useState('선택 없음');
    const [caffeineGoal, setCaffeineGoal] = useState(60);
    const [selectTemperature, setTemperature] = useState('ICE');
    return (
        <SafeAreaView style={styles.topContainer}>
            <View style={styles.headerContainer}>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                    <Arrow/>
                    <Star/>
                </View>
                <Text style={{ marginTop: Dimensions.height * 15, marginLeft: Dimensions.width * 2, fontSize: 16, color: Colors.White ,fontWeight:'700'}}>스타벅스</Text>
                <View style={{flexDirection:'row', marginTop:Dimensions.height*4,marginLeft:Dimensions.width*2}}>
                    <Text style={{ color: Colors.White, fontSize: 25, fontWeight: '700',width:Dimensions.width*143}}>돌체 콜드 브루</Text>
                    <View style={{flexDirection:'row',marginLeft: Dimensions.width*79,height:Dimensions.height*25,width:Dimensions.width * 135,justifyContent:'space-between',alignItems:'center'}}>
                        <Minus width="18" height="18" viewBox="0 0 18 18" onPress={()=>{if(cupCount!=0)setCupCount(cupCount-1)}}></Minus>
                        <Text style={{fontSize:21,color:Colors.White,fontWeight:'700'}}>{cupCount}잔</Text>
                        <Plus width="18" height="18" viewBox="0 0 18 18" onPress={()=>{setCupCount(cupCount+1)}}></Plus> 
                    </View>    
                </View>
            </View>
            <View style={{width:Dimensions.width * 358,height:1,marginTop:Dimensions.height * 27,backgroundColor:'#DEDEDE',zIndex:1}}></View>
            <View style={styles.BottomContainer}>
                <Text style={{fontSize: 14, marginBottom: 4}}>총 카페인 함량</Text>
                <Text style={{ fontSize: 30, fontWeight: '700' }}>155mg</Text>
                <Text style={{ marginTop: Dimensions.height * 22 }}>하루 카페인 섭취 목표량의 {caffeineGoal}%</Text>
                <View style={{width: Dimensions.width*319, height: Dimensions.height*10.69,borderRadius:20,backgroundColor:Colors.DarkGray, marginTop:Dimensions.height*9.65}}>
                    <View style={{width:(caffeineGoal)+"%", height: Dimensions.height*10.69,borderRadius:20, backgroundColor:Colors.Brown}}></View>
                </View>
            </View>
            <View style={{height:Dimensions.height*80}}></View>
            <Pressable style={{ width: '100%', height: Dimensions.height * 99, borderBottomColor: '#DEDEDE', borderWidth: 1, borderRightWidth: 0, borderLeftWidth: 0, borderTopWidth: 0 ,paddingHorizontal:Dimensions.width*27,paddingTop:Dimensions.height *37,flexDirection:'row'}}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>사이즈</Text>
                    <Text style={{ marginTop: 5 * Dimensions.height, fontSize: 16, color: Colors.DeepGray }}>{selectSize} (355ml)</Text>
                </View>
                <BigArrow style={{marginLeft: Dimensions.width*237, marginTop: Dimensions.height*6}}></BigArrow>
                {/* 355ml 목업데이터라 사이즈에 맞게 Ml수정 작업 필요 */}
                {/* <View style={{width:'100%',flexDirection:'row',marginTop:Dimensions.height* 15}}>
                    {Size.map((item) => {
                        return (
                            <Pressable style={{ minWidth: Dimensions.width * 39, height: Dimensions.height * 28, borderColor: Colors.DarkGray, borderWidth: 1, borderRadius: 5, paddingHorizontal: 8, paddingVertical: 4, marginRight: Dimensions.width * 19,backgroundColor:item === selectSize ? Colors.Brown : Colors.White}}
                                       onPress={()=>{setSelectSize(item)}}>
                                <Text style={{fontSize:16,color: item===selectSize?Colors.White:Colors.Black }}>{item}</Text>
                            </Pressable>
                        )
                    })}
                </View> */}
			</Pressable>
			<Pressable
				style={{
					width: '100%',
					height: Dimensions.height * 73,
					backgroundColor: Colors.White,
					borderBottomColor: '#DEDEDE',
					borderWidth: 1,
					borderRightWidth: 0,
					borderLeftWidth: 0,
					borderTopWidth: 0,
					paddingTop: Dimensions.height * 16,
					paddingHorizontal: Dimensions.width * 27,
					flexDirection: 'row',
				}}
				onPress={() => setOptionModalVisible(true)}
			>
				<View>
					<Text style={{ fontSize: 16, fontWeight: '600' }}>옵션</Text>
					<Text
						style={{
							marginTop: 5 * Dimensions.height,
							fontSize: 16,
							color: Colors.DeepGray,
						}}
					>
						{selectTemperature}, {selectOption}
					</Text>
				</View>
				<BigArrow
					style={{
						marginLeft: Dimensions.width * 237,
						marginTop: Dimensions.height * 6,
					}}
				></BigArrow>
				{/* <View style={{width:'100%',flexDirection:'row',marginTop:Dimensions.height* 15}}>
                    {Option.map((item) => {
                        return (
                            <Pressable style={{ minWidth: Dimensions.width * 39, height: Dimensions.height * 28, borderColor: Colors.DarkGray, borderWidth: 1, borderRadius: 5, paddingHorizontal: 8, paddingVertical: 4, marginRight: Dimensions.width * 19, backgroundColor:item === selectOption ? Colors.Brown : Colors.White}}
                                       onPress={()=>{setSelectOption(item)}}>
                                <Text style={{fontSize:16,color: item===selectOption?Colors.White:Colors.Black}}>{item}</Text>
                            </Pressable>
                        )
                    })}
                </View> */}
            </Pressable>
            <View style={{ width: '100%', height: Dimensions.height * 59, borderBottomColor: '#DEDEDE', borderWidth: 1, borderRightWidth: 0, borderLeftWidth: 0, borderTopWidth: 0 ,paddingTop:Dimensions.height* 20,paddingHorizontal:Dimensions.width*27,flexDirection:'row'}}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>샷 추가</Text>
                <View style={{flexDirection:'row',marginLeft: Dimensions.width*196, justifyContent:'space-between',width:Dimensions.width * 92}}>
                    <Minus width="16" height="16" viewBox="0 0 16 16" onPress={()=>{if(caffeineCount!=0)setCaffeineCount(caffeineCount-1)}}></Minus>
                    <Text>{caffeineCount}</Text>
                    <Plus  width="16" height="16" viewBox="0 0 16 16" onPress={()=>{setCaffeineCount(caffeineCount+1)}}></Plus> 
                </View>    
            </View>
            <View style={{ width: '100%', height: Dimensions.height * 59, justifyContent: 'center',paddingHorizontal:Dimensions.width*27}}>
                 <Text style={{ fontSize: 16, fontWeight: '600' }}>날짜</Text>
            </View>
            <Pressable style={{ width: Dimensions.width * 358, height: Dimensions.height * 44, marginTop: Dimensions.height * 65, borderRadius: 30, backgroundColor: Colors.DarkBrown ,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:Colors.White,fontSize:16, fontWeight:'700'}}>음료 추가</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
	topContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 844,
		backgroundColor: Colors.LightGray,
		alignItems: 'center',
	},
	headerContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 211,
		backgroundColor: Colors.DarkBrown,
		paddingHorizontal: Dimensions.width * 12,
		paddingVertical: Dimensions.height * 12,
		marginBottom: 2,
	},
	BottomContainer: {
		width: Dimensions.width * 358,
		height: Dimensions.height * 150,
		backgroundColor: Colors.White,
		position: 'absolute',
		top: Dimensions.height * 202.81,
		right: Dimensions.width * 16,
		borderRadius: 10,
		...Platform.select({
			ios: {
				shadowColor: Colors.Black,
				shadowOffset: {
					width: 0.5,
					height: 0.5,
				},
				shadowOpacity: 0.5,
				shadowRadius: 7,
			},
			android: {
				evevation: 20,
			}, //여기 수정부탁
		}),
		paddingHorizontal: Dimensions.width * 20,
		paddingVertical: Dimensions.width * 15,
	},
	searchBarInput: {
		width: Dimensions.width * 278,
		height: Dimensions.height * 44,
		color: Colors.Black,
	},
	clearButton: {
		width: Dimensions.width * 32,
		height: Dimensions.height * 44,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
