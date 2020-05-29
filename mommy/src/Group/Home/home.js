import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Header from "./Header"
import InputPost from "./InputPost/inputPost"
import Post from "./Post"
import Story from "../../Common/story"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: 2020,
            month: 9
        }
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Header />
                <Text
                    style={styles.title}>
                    {this.state.year}.{this.state.month} САРД ТӨРӨХ ЭЭЖҮҮД
                 </Text>
                <View style={styles.topBar}>
                    <TouchableOpacity style={[styles.topBarButton, styles.ff]}>
                        <Text>Нүүр</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.topBarButton}>
                        <Text>Live</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topBarButton}>
                        <Text>Форум</Text>
                    </TouchableOpacity>
                </View>
                <InputPost />
                <ScrollView style={styles.formStory} horizontal={true}>
                    <Story pDate="2020-05-15" mini={true} proImage={require("../img/p2.png")} backImage={require("../img/cover2.jpg")} />
                    <Story pDate="2020-05-20" mini={true} proImage={require("../img/p3.png")} backImage={require("../img/cover3.jpg")} />
                    <Story pDate="2020-05-21" mini={true} proImage={require("../img/p4.png")} backImage={require("../img/cover4.jpg")} />
                    <Story pDate="2020-05-27" mini={true} proImage={require("../img/p5.png")} backImage={require("../img/cover5.jpg")} />
                </ScrollView>
                <Post username="Г.Жаргал" title="Хэрхэн таргалах вэ?" postImg={require("../img/cover3.jpg")} proImg={require("../img/p5.png")} starCount={3} likeCount={247} isLiked={false} />
                <Post username="М.Ганбат" title="Төрсний дараах сэтгэл зүй" postImg={require("../img/cover2.jpg")} proImg={require("../img/p4.png")} starCount={4.5} likeCount={133} isLiked={true} />
                <Post username="М.Ганбат" title="Хэрхэн турах вэ?" postImg={require("../img/cover4.jpg")} proImg={require("../img/p3.png")} starCount={5} likeCount={44} isLiked={true} />
            </ScrollView >
        );
    }
}
export default Home;

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        // justifyContent: 'center',
        // alignItems: "center"
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'gray',
        marginTop: 10,
    },
    formStory: {
        flex: 1,
        width: "100%",
        marginTop: 10,
        paddingHorizontal: 10
    },
    topBar: {
        height: height * 0.06,
        width: width * 0.95,
        flexDirection: "row",
        alignSelf: "center",
        marginVertical: 10
    },
    topBarButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
        borderRadius: 20
    },
    ff: {
        backgroundColor: "white"
    }
});