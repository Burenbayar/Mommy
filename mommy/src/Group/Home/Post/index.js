import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: true,
            likeCount: 99,
            // profileSrc: "require("../img/p3.png)",
            // postImageSrc: "require("../img/cover1.jpg")",
            userRoll: "Админ",
            userName: "Б.Амаржаргал",
            postTitle: "Guide to a healthy pregnancy",
            postDate: "2020.05.30",
            starCount: 4.5
        };
    }

    componentDidMount() {
        this.setState({
            userName: this.props.username,
            postTitle: this.props.title,
            starCount: this.props.starCount,
            likeCount: this.props.likeCount,
            isLiked: this.props.isLiked
        })
    }

    likeHandler = () => {
        this.setState({ isLiked: !this.state.isLiked });
        this.state.isLiked
            ? this.setState({ likeCount: this.state.likeCount - 1 })
            : this.setState({ likeCount: this.state.likeCount + 1 });
    };

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        var _style;
        if (this.state.isLiked) {
            _style = {
                color: 'red',
            };
        } else {
            _style = {
                color: 'black',
            };
        }

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableNativeFeedback>
                        <Image
                            style={styles.profile}
                            source={this.props.proImg}></Image>
                    </TouchableNativeFeedback>
                    <View style={styles.header_text}>
                        <TouchableNativeFeedback>
                            <Text>{this.state.userName}</Text>
                        </TouchableNativeFeedback>
                        <Text>{this.state.userRoll}</Text>
                    </View>
                    <View>
                        <TouchableNativeFeedback style={{ borderRadius: 20 }}>
                            <Entypo name="dots-three-horizontal" size={25} />
                        </TouchableNativeFeedback>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.postImg}
                // onPress={() => navigation.navigate('PostDelScreen')}
                >
                    <Image
                        source={this.props.postImg}
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'cover',
                        }}></Image>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <View style={styles.footer_left}>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>{this.state.postTitle}</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1, width: "30%", justifyContent: "center", marginLeft: 8 }}>
                            <StarRating
                                disabled={false}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                fullStarColor={'orange'}
                                starSize={22} />
                        </View>
                    </View>

                    <View style={styles.footer_right}>
                        <View style={styles.footer_right_top}>
                            <TouchableOpacity
                                style={styles.icons}
                                onPress={this.likeHandler}>
                                <AntDesign name="heart" size={20} style={_style} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icons} >
                                <MaterialCommunityIcons name="comment-text" size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icons}>
                                <Text style={{ fontWeight: "bold", }}>{this.state.likeCount}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.postDate}>
                            <Text style={styles.postDate_text}>{this.state.postDate}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const width = Dimensions.get("screen").width
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        alignSelf: "center",
        width: width * 0.95,
        marginHorizontal: '5%',
        marginVertical: 10,
        // justifyContent: 'flex-start',
    },
    profile: { height: 40, width: 40, borderRadius: 20 },
    header: {
        // backgroundColor: '#00ffff',
        flexDirection: 'row',
        height: 60,
        padding: 10,
    },
    header_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        // backgroundColor: 'gray',
    },
    postImg: {
        width: '100%',
        height: 220,
    },
    footer: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    footer_left: { flex: 3, height: '100%' },
    footer_right: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lightblue',
    },
    footer_right_top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: 'brown',
    },
    icons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    postDate: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'orange',
        alignItems: 'flex-end',
    },
    postDate_text: { fontSize: 10, color: 'gray' },
});
