import { StatusBar } from 'expo-status-bar';
import React,{ useState }  from 'react';
import { SocialIcon } from 'react-native-elements';
import { StyleSheet, Text, View ,TextInput, Button, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
   
   <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email or Phone Number"
         
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="OTP"
          
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      
      <View >
              <View style={{ flexDirection: 'column' }}>
              <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    alert('facebook');
                  }}
                />
               </View>

            <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                    alert('instagram');
                  }}
                />
            </View>
            <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="linkedin"
                  onPress={() => {
                    alert('LinkedIn');
                  }}
                />
            </View>
      </View>
      
      </View>
      </View>
      </View>
      </View>
    
    
  );
}

 
const styles = StyleSheet.create({
  container: {
    textColor:"#eee",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 9,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#040c30",
    
  },
  loginText:{
    color: "#fff",
  },
  container: {
    flex: 1,
    paddingTop: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#d2802d",
  },
});
