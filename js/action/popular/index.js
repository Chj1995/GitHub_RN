import Types from '../types';
import DataStore from '../../expand/DataStore';

/**
 * 获取最热数据的异步action
 * @param storeName 
 * @param url 
 * @param pageSize
 * @returns 
 */
export function onRefreshPopular(storeName, url, pageSize) {
    //返回异步的
    return dispatch => {
        dispatch({ type: Types.POPULAR_REFRESH, storeName: storeName });
        //异步操作
        let dataStore = new DataStore();

        dataStore.fetchData(url)//异步action与数据流
            .then(data => {
                handleData(dispatch, storeName, data, pageSize);
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.POPULAR_REFRESH_FAIL,
                    storeName,
                    error
                });
            })
    }
}
/**
 * 加载更多
 * @param  storeName 
 * @param  pageIndex 第几页 
 * @param  pageSize 每页显示条数
 * @param  dataArr 原始数据
 * @param  callBack 回调函数，可以通过回调函数来调用页面通信：比如异常信息的展示，没有更多的等待
 */
export function onLoadMorePopular(storeName, pageIndex, pageSize, dataArr = [], callBack) {
    return dispatch => {
        setTimeout(() => {//模拟网络请求
            if ((pageIndex - 1) * pageSize >= dataArr.length) {//已加载完全部数据
                if (typeof callBack === 'function') {
                    callBack('no more');
                }
                dispatch({
                    type: Types.POPULAR_LOAD_MORE_FAIL,
                    error: 'no more',
                    storeName: storeName,
                    pageIndex: --pageIndex,
                    projectModes: dataArr
                });
            } else {
                let max = pageSize * pageIndex > dataArr.length ? dataArr.length : pageSize * pageIndex;
                dispatch({
                    type: Types.POPULAR_LOAD_MORE_SUCCESS,
                    storeName,
                    pageIndex,
                    projectModes: dataArr.slice(0, max),//要展示的
                });
            }
        }, 500);
    }
}

/**
 * 处理下拉刷新的数据
 * @param dispatch
 * @param storeName
 * @param data
 */
function handleData(dispatch, storeName, data, pageSize) {
    let fixItem = [];
    if (data && data.data && data.data.items) {
        fixItem = data.data.items;
    } else {
        fixItem = data;
    }
    dispatch({
        type: Types.POPULAR_REFRESH_SUCCESS,
        items: fixItem,
        //第一次加载的数据
        projectModes: pageSize > fixItem.length ? fixItem : fixItem.slice(0, pageSize),
        storeName,
        pageIndex: 1
    })
}