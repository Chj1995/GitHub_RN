/*
 * @Author: your name
 * @Date: 2021-11-15 15:20:11
 * @LastEditTime: 2021-11-18 13:58:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/expand/dao/LoginDao.tsx
 */
/*
 *登录模块相关
 */
import { get, post } from './HiNet'
import Constants from './Constants';
import { saveBoarding } from '../util/BoardingUtil';
export default class LoginDao {
    private static instance: LoginDao;
    private constructor() { }
    public static getInstance(): LoginDao {
        if (!LoginDao.instance) {
            LoginDao.instance = new LoginDao();
        }
        return LoginDao.instance;
    }
    login(userName: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const {
                // 解析API
                login: { api }
            } = Constants;
            const formData = new FormData();
            formData.append('userName', userName);
            formData.append('password', password);
            post(api)(formData)().then((res: any) => {
                const { code, data, msg } = res;
                
                if (code === 0) {
                    saveBoarding(data);
                    resolve(data || msg);
                } else {
                    reject(res);
                }
            }).catch((e) => {
                console.log(e);
                reject({ code: -1, msg: '哎呀，出错了' })
            });
        });
    }

    /**
  * 注册
  * @param userName
  * @param password
  * @param imoocId 慕课网ID，从https://www.imooc.com/user/setbindsns 上获取
  * @param orderId 课程订单号
  */
    registration(
        userName: string,
        password: string,
        imoocId: string,
        orderId: string,
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            const {
                registration: { api },
            } = Constants;
            const formData = new FormData();
            formData.append('userName', userName);
            formData.append('password', password);
            formData.append('imoocId', imoocId);
            formData.append('orderId', orderId);
            post(api)(formData)().then((res: any) => {
                const { code, data, msg } = res;
                if (code === 0) {
                    saveBoarding(data);
                    resolve(data || msg);
                } else {
                    reject(res);
                }
            })
                .catch((e) => {
                    console.log(e);
                    reject({ code: -1, msg: '哎呀出错了' });
                });
        });
    }
}
