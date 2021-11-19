/*
 * @Author: your name
 * @Date: 2021-11-15 16:41:15
 * @LastEditTime: 2021-11-17 18:12:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/page/Popularpage.js
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Button, FlatList, RefreshControl, ActivityIndicator
} from 'react-native';
import { tabNav } from '../navigator/NavigationDelegate';
import keys from '../res/data/key.json';
import NavigationBar from 'react-native-navbar-plus';
import action from '../action';
import { connect } from 'react-redux';
import DataStore from '../expand/DataStore';
import NavigationUtil from '../navigator/NavigationUtil';
import PopularItem from '../common/PopularItem';
import Toast from 'react-native-easy-toast';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red';
const PAGE_SIZE = '10';

export default class PopularPage extends Component {

    render() {
        let navigationBar = <NavigationBar
            title={'最热'}
        />
        const TabNavigator = keys.length ?
            tabNav({ Component: PopularTabPage, theme: { themeColor: '#2196f3' }, keys }) : null;
        return (
            <View style={styles.container}>
                {navigationBar}
                {TabNavigator}
            </View>
        );
    }
}

class PopularTab extends Component {
    constructor(props) {
        super(props);
        const { tabLabel } = this.props;
        this.storeName = tabLabel;
    }

    componentDidMount() {
        this.loadData();
    }
    _store() {
        const { popular } = this.props;
        let store = popular[this.storeName];
        //如果store为空，则默认创造一个空数组
        if (!store) {
            store = {
                items: [],
                isLoading: false,
                projectModes: [],//要显示的数据
                hideLoadingMore: true,//默认隐藏加载更多
            }
        }
        return store;
    }
    loadData(loadMore) {
        const { onRefreshPopular, onLoadMorePopular } = this.props;
        const store = this._store();
        const url = this.genFetchUrl(this.storeName);
        if (loadMore) {
            onLoadMorePopular(this.storeName, ++store.pageIndex, PAGE_SIZE, store.items, callBack => {
                this.refs.toast.show('没有更多了');
            });
        } else {
            onRefreshPopular(this.storeName, url, PAGE_SIZE);
        }

    }
    genFetchUrl(key) {
        return URL + key + QUERY_STR;
    }
    renderItem(data) {

        const item = data.item;
        return <PopularItem
            item={item}
            onSelect={() => {

            }}
        />
    }
    genIndicator() {
        return this._store().hideLoadingMore ? null :
            <View style={styles.indicatorContainer}>
                <ActivityIndicator
                    style={styles.indicator}
                />
                <Text>正在加载更多</Text>
            </View>
    }

    render() {
        const store = this._store();
        debugger
        return (<View style={styles.container}>
            <FlatList
                data={store.projectModes}
                //渲染
                renderItem={data => this.renderItem(data)}
                keyExtractor={item => "" + item.id}
                refreshControl={
                    <RefreshControl
                        title={'Loading'}
                        titleColor={THEME_COLOR}
                        colors={[THEME_COLOR]}
                        refreshing={store.isLoading}
                        onRefresh={() => this.loadData()}
                        tintColor={THEME_COLOR}
                    />
                }
                //底部加载图示动画
                ListFooterComponent={() => this.genIndicator()}
                //上拉刷新回调，FlatList会多次调用onEndReached
                onEndReached={() => {
                    console.log('---onEndReached----');
                    // 一般情况onMomentumScrollBegin会在onEndReached之前执行
                    //为了防止onMomentumScrollBegin反回的比较晚，加个延迟100毫秒
                    //确保onEndReached之前onMomentumScrollBegin已经执行完了
                    setTimeout(() => {
                        if (this.canLoadMore) {
                            this.loadData(true);
                            this.canLoadMore = false;
                        }
                    }, 100);
                }}
                //列表与底部间隔比例
                onEndReachedThreshold={0.5}
                // 开始滚动时
                onMomentumScrollBegin={() => {
                    this.canLoadMore = true; //fix 初始化时页调用onEndReached的问题
                    console.log('---onMomentumScrollBegin-----')
                }}
            />
            <Toast ref={'toast'}
                position='center'
            />
        </View>
        );
    }
}

// 将dispatch映射给onThemeChange
const mapStateToProps = state => ({
    popular: state.popular
});
const mapDispatchToProps = dispatch => ({
    onRefreshPopular: (storeName, url, pageSize) => dispatch(action.onRefreshPopular(storeName, url, pageSize)),
    onLoadMorePopular: (storeName, pageIndex, pageSize, items, callBack) => dispatch(action.onLoadMorePopular(storeName, pageIndex, pageSize, items, callBack)),
});
//将函数注入到props里面
const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    indicatorContainer: {
        alignItems: 'center',
    },
    indicator: {
        color: 'red',
        margin: 10,
    }
});