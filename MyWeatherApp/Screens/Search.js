import React,{useState}  from 'react';
import { TextInput,Button } from 'react-native-paper';
import { AsyncStorage } from '@react-native-community/async-storage'
  
import{View,Text} from 'react-native';
import Header12   from './Header12'

const Search = ({navigation}) => {
  
      const [city,setCity]= useState('');
      const  [cities,setcities]=useState('');

      
                   const fetchCities=(text)=>{

                             setCity(text);
                         
                   }
        
          console.log(city);
        
        
        const btnClick= async()=>{

                   await AsyncStorage.setItem("newcity",city)
                          .catch(err=>console.log(err))
                    navigation.navigate("home",{city:city})

        }
   
       
    

  return (
    <>
           <View style={{flex:0.5}}>
            <Header12 name= "Search Screen"/>
                 <TextInput lable="City Name" theme={{colors:{primary:"#00aaff"}}}
                   value={city}
                   onChangeText={(text)=>fetchCities(text)}
                 />
                 <Button theme={{colors:{primary:"#00aaff"}}} style={{margin:20,}} icon="content-save" mode="contained" onPress={() => btnClick()}>
                        <Text style={{color:"white"}}> Fetch the Weather</Text>
                  </Button>
            </View>

    </>
  );
  
};

export default Search;