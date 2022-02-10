import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native'

const style = StyleSheet.create({
    button: {
        fontSize: 30,
        width: Dimensions.get("window").width / 4 - 2.5,
        height: Dimensions.get("window").width / 4 - 20,
        padding: 20,
        backgroundColor: '#3E3E3E',
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 10,
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#313131'
    },
    operationEqual: {
        color: '#fff',
        backgroundColor: '#FA8334'
    },
    doubleButton: {
        width: (Dimensions.get("window").width / 4 - 2.5) * 2, 
    },
    tripleButton: {
        width: (Dimensions.get("window").width / 4 - 2.5) * 3,
    }
})

export default props => {
    const stylesButton = [style.button]
    if (props.double) stylesButton.push(style.doubleButton)
    if (props.triple) stylesButton.push(style.tripleButton)
    if (props.operation) stylesButton.push(style.operationButton)
    if (props.operationEqual) stylesButton.push(style.operationEqual)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )        
}