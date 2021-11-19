import React, { Component } from "react";
import {
    Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class PopularItem extends Component {
    render() {
        const { item } = this.props;
        // 如果item为空
        if (!item || !item.owner) return null;
        let favoriteButton = <TouchableOpacity
            style={{ padding: 6 }}
            onPress={() => {
            }}
            // 按下去的颜色
            underlayColor={'transparent'}
        >
            <FontAwesome
                name={'star-o'}
                size={26}
                style={{ color: 'red' }}
            />
        </TouchableOpacity>
        return (
            <TouchableOpacity
                onPress={this.props.onSelect}
            >
                <View style={styles.cell_container}>
                    {/* 标题 */}
                    <Text style={styles.title}>
                        {item.full_name}
                    </Text>
                    {/* 描述 */}
                    <Text style={styles.description}>
                        {item.description}
                    </Text>
                    {/* 作者、点赞🌟、收藏 */}
                    <View style={styles.row}>
                        {/* 作者 */}
                        <View style={styles.row}>
                            <Text>Author:</Text>
                            <Image style={styles.authorIcon}
                                source={{ url: item.owner.avatar_url }}
                            />
                        </View>
                        {/* 点赞 */}
                        <View style={styles.start}>
                            <Text>Start:</Text>
                            <Text>{item.stargazers_count}</Text>
                        </View>
                        {favoriteButton}
                    </View>

                </View>

            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    cell_container: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,//垂直的距离
        borderColor: '#dddddd',//边框的颜色
        borderWidth: 0.5,//边框的宽度
        borderRadius: 2,//边框的圆角
        shadowColor: 'gray',//阴影的颜色
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 2//用来设置安卓的阴影
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {//标题
        fontSize: 16,
        marginBottom: 2,
        color: '#212121'
    },
    description: {//描述
        fontSize: 14,
        marginBottom: 2,
        color: '#757575'
    },
    authorIcon: {
        height: 22,
        width: 22
    },
    start: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    favoriteButton: {
        padding: 6,//内边距
    }
})