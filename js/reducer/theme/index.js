/*
 * @Author: your name
 * @Date: 2021-11-17 11:19:47
 * @LastEditTime: 2021-11-17 14:45:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/reducer/theme/index.js
 */
import Types from "../../action/types";
const defaultState = {
    theme: 'blue'
};
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme,
            };
        default:
            return state;
    }
}