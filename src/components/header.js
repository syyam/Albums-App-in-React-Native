//import libs.
import React from 'React';
import {Text,View} from 'react-native';


//make a component
const Header=(props)=>{
    const {textStyle,viewStyles}=style  //destructuring to reference our style,(optional)
    return(
        <View style={viewStyles}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const style={
    textStyle:{
        fontSize: 20
    },
    viewStyles:{
        backgroundColor: '#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 5,
        height:60,
        shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    }
}

//make the component avaiable to other parts of app
export default Header;