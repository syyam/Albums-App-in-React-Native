import React, {Component} from 'react'
import {Text,View} from 'react-native'
import axios from 'axios'

class AlbumList extends Component{
    state={albums:[]}
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response=>this.setState({albums: response.data}));
        // everything comming from that URI is being stored in response variable, it's name could be anything
    }
    renderAlbum()
    {
        return (this.state.albums.map(albuma=><Text>{albuma.title}</Text>));
    }
    render(){

        console.log(this.state)
        return( 
            <View>
                {this.renderAlbum()}
            </View>
        );
    }
}



export default AlbumList