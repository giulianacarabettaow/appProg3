import react, { Component } from 'react';
import { auth } from '../../firebase/config';
import { TextInput, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

class Login extends Component{
    constructor(){
        super()
        this.state= {
            password:'',
            email:'',
            loggedIN:false,
            errorMessage:'',
        }
        console.log(this.state)
    }

    login (email,pass){
        auth.signInWithEmailAndPassword(email,pass)
        .then(()=>{
            // this.setState({loggedIN: true});
            console.log('logeado')
        })
        .catch( error => {
            // this.setState({errorMessage: error})
            console.log(error)
            
        })
    }

    render(){
        return(
            <view style={styles.formContainer}>
            <Text>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>this.setState({email: text})}
                placeholder='email'
                keyboardType='email-address'
                value={this.state.email}
                />
            <TextInput
                style={styles.input}
                onChangeText={(text)=>this.setState({password: text})}
                placeholder='password'
                keyboardType='default'
                secureTextEntry={true}
                value={this.state.password}
            />
            <TouchableOpacity style={styles.button} onPress={()=>this.login(this.state.email, this.state.password)}>
                <Text style={styles.textButton}>Ingresar</Text>    
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={ () => this.props.navigation.navigate('Registro')}>
               <Text>No tengo cuenta. Registrarme.</Text>
            </TouchableOpacity> */}

            </view>
        )
    
    }
}

const styles = StyleSheet.create({
    formContainer:{
        paddingHorizontal:10,
        marginTop: 20,
    },
    input:{
        height:20,
        paddingVertical:15,
        paddingHorizontal: 10,
        borderWidth:1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical:10,
    },
    button:{
        backgroundColor:'blue',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius:4, 
        borderWidth:1,
        borderStyle: 'solid',
        borderColor: '#28a745'
    },
    textButton:{
        color: '#fff'
    }

})

export default Login