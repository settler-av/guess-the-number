import React from "react";
import {View, StyleSheet, Text} from "react-native";


const NumberContainer = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.text}>
                {props.children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // shadowColor: "black",
        // shadowOffset: {width: 0, height: 2},
        // shadowRadius: 6,
        // shadowOpacity: 0.26,
        // elevation: 8,
        borderWidth: 2,
        borderColor: "#f7287b",
        backgroundColor: "#faf9f9",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",

    },
    text:{
        fontSize: 22,
        color: "#f7287b",
    }
});

export default NumberContainer;