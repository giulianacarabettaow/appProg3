import react, { Component } from 'react';
import { auth } from '../../firebase/config';
import { TextInput, TouchableOpacity, View, Text, Stylesheet} from 'react-native';

class Register extends Component { 
    constructor(){
        super()
        this.state= {
            email:'',
            password:''
        }
    }

register (email,pass){
    auth.CreateUserWithEmailAndPassword(email,pass)
    .then(()=>{
        console.log('Registrado Ok')
    })
    .catch( error => {
        console.log(error);
    })
}

render(){
    return(
        <View style={Stylesheet.formContainer}>
            <Text>Register</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>this.setState=({emial:text})}
                placeholder='Email'
                keyboardType='email-adress' />
            <TextInput
               style={styles.input}
               onChangeText={(text)=>this.setState=({password:text})}
               placeholder='Contreaseña'
               keyboardType='email-adress'
               secureTextEntry={true} />     
            <TouchableOpacity style={styles.button} onPress={()=>this.register(this.state.email,this.state.password)}>
                <Text style={styles.textButton}>Registrarse</Text>
            </TouchableOpacity>                 
        </View>
    )
}

}

export default Register