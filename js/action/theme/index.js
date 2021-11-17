/*
 * @Author: your name
 * @Date: 2021-11-17 14:02:37
 * @LastEditTime: 2021-11-17 14:45:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/action/theme/index.js
 */
import Types from '../types'

export function onThemeChange(theme) {
    return { type: Types.THEME_CHANGE, theme: theme };
}