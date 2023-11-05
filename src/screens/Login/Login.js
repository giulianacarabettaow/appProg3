import react, { Component } from 'react';
import { auth } from '../../firebase/config';
import { TextInput, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

class Login extends Component{
    constructor(){
        super()
        this.state= {
            loggedIN:false,
            errorMessage:'',
        }
        console.log(this.state)
    }

    login (email,pass){
        auth.signInWithEmailAndPassword(email,pass)
        .then(()=>{
            this.setState({loggedIN: true});
        })
        .catch( error => {
            this.setState({errorMessage: error}
            )
            // console.log(this.state.errorMessage)
        })
    }

    render(){
        return(
                
            <view>
                
            </view>
            
        )
    
    }

}

export default Login