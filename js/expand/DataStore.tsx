/*
 * @Author: your name
 * @Date: 2021-11-17 17:51:20
 * @LastEditTime: 2021-11-18 13:51:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/expand/DataStore.tsx
 */
import { get } from './HiNet';
import Constants from './Constants';
import { URL } from 'react-native-url-polyfill';

export const FLAG_STORAGE = {
    flag_popular: 'popular',
    flag_trending: 'trending',
};

export default class DataStore {
    
    fetchData(url: string, flag: string, pageIndex = 1, pageSize = 25) {
        
        const isTrending = flag === FLAG_STORAGE.flag_trending;
        let api, params: any = { pageIndex, pageSize };
        if (isTrending) {
            api = Constants.trending.api;
            params.sourceUrl = url;
        } else {
            api = Constants.popular.api;
            //从url中取出q参数：eg:url https://api.devio.org/uapi/popular?q=java&pageIndex=1&pageSize=25 
            const q = new URL(url).searchParams.get('q');
            params.q = q;
        };
        return get(api)(params);
    }
}