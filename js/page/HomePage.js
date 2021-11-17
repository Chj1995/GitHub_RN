import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import SafeAreaViewPlus from 'react-native-safe-area-plus';
import { connect } from 'react-redux';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { theme } = this.props;
        NavigationUtil.navigation = this.props.navigation;
        // SafeAreaViewPlus 适配全面屏的插件
        return <SafeAreaViewPlus topColor={theme}>
            <DynamicTabNavigator />
        </SafeAreaViewPlus>

    }
}
const mapStateToProps = (state) => ({
    theme: state.theme.theme,
});
export default connect(mapStateToProps)(HomePage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        marginTop: 100,
        marginLeft: 100,
    }
})