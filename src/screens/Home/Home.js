import react, { Component } from 'react';
import { auth } from '../../firebase/config';
import { TextInput, TouchableOpacity, View, Text, StyleSheet} from 'react-native';


class Home extends Component{
    constructor(){
        super();
        this.state={
            posts:[],
            loader: true
        }
    }


    componentDidMount(){
        auth.collection('posts').orderBy('createdAt','desc') //hay que crear en firebase la db de posts y ponerle esa info
    //aca hay que hacer que los posts se sumen a un array y que ese array se suba al state
    
    
    
    
    }









}