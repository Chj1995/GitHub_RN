import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Button,
    Text,
    View,
} from 'react-native';
const KEY = "devio.org"
export default (pros: any) => {
    const [text, onChangeText] = useState("");
    const [showText, setShowText] = useState("");
    //存储
    const onSave = async () => {
        try {
            await AsyncStorage.setItem(KEY, text);
        } catch (error) {
            console.log(error);
        }
    }
    //取值
    const onGet = async () => {
        try {
            const value = await AsyncStorage.getItem(KEY);
            setShowText(value || '');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <SafeAreaView style={StyleSheet.root}>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
            <Button title={'Save'} onPress={onSave}></Button>
            <Button title={'Get'} onPress={onGet} ></Button>
            <Text>Result：{showText}</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});