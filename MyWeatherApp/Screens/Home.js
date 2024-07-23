import React,{useState,useEffect}  from 'react';
import { TextInput,Button, Card, Title} from 'react-native-paper';
import { AsyncStorage } from '@react-native-community/async-storage'

  
import{View,Text,Image} from 'react-native';
import Header12   from './Header12'
import { color } from 'react-native-reanimated';

const Home=(props)=>{

   const [info,setinfo]=useState({

        name:"loading!!",
        temper: "loading",
        humidity: "loading!!",
        desc:"loading",
         icon : " loading..."
   })

      useEffect(()=>{
                     getWeather();
      },[])
          const getWeather= async()=>{


            let myCity=  await AsyncStorage.getItem("newcity")
                          .catch(err=> console.log(err))

            if(!myCity){

              const {city}= props.route.params

              myCity=city;
  
            }

            
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=5af813052c87f7b288c78dbda95b743f&units=metric`)
 
             .then(data=>data.json())
             .then(results=>{
                       
              
                      
                      setinfo({

                           name: results.name,
                           temper:results.main.temp,
                           humidity:results.main.humidity,
                           desc: results.weather[0].description,
                           icon : results.weather[0].icon



                      })

                   
                 
             })
             .catch(err => alert(err))
          }

          
          if(props.route.params.city != "london"){

            getWeather()
          }
          
    return(

        <View style={{flex:2,
                    
          }}>
                   <Header12 name="Weather App"/>
                <View style={{ alignItems:"center",
                                 flexDirection: "row",
                                  marginTop:30            }}>
                 
                   <Title style={{color:'#00aaff',
                                marginTop: 20,
                                marginLeft:20,
                                fontSize :31,
                                
                }}>{info.name}</Title>

                 <Image style={{
                         width:120,
                          height:120,
                          marginLeft: 80,
                          
                          
                 }}
                   source={{uri:"https://openweathermap.org/img/w/"+info.icon+".png"}}
                   />

                </View>

                <Card style={{

                     margin:5,
                     padding:40,
                     borderRadius:20,
                      backgroundColor: "#00aaff", 
                      alignItems:"center",
                      fontSize :40


                }}>
                    <Title style={{color:"#ffffff"}}>Temperature={info.temper}</Title>

                </Card>
                <Card style={{

                     margin:5,
                     padding:40,
                     borderRadius:20,
                     backgroundColor: "#00aaff",
                     alignItems:"center",
                     fontSize :40


                }}>
                    <Title style={{color:"#ffffff"}}>Humidity={info.humidity}</Title>


                 </Card>

                 <Card style={{

                     margin:5,
                      padding:40,
                      borderRadius :20,
                      font: 50,
                      alignItems: "center",
                      backgroundColor: "#00aaff",
                      fontSize :40



                            }}>
                   <Title style={{color:"#ffffff"}}>Description={info.desc}</Title>


                                    </Card>
        </View>
    )
}

export default Home;
 