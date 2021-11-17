/*
 * @Author: your name
 * @Date: 2021-11-15 15:54:49
 * @LastEditTime: 2021-11-15 16:00:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/util/BoardingUtil.tsx
 */
import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY_BOADRDING_PASS = "boarding-pass"
/**
 * 保存登录态
 * @param data 
 */
export function saveBoarding(data: string) {
    AsyncStorage.setItem(KEY_BOADRDING_PASS, data);
}
/**
 * 获取登录态
 * @returns 
 */
export async function getBoarding() {
    return await AsyncStorage.getItem(KEY_BOADRDING_PASS);
}