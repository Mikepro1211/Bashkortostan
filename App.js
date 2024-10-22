import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,} from 'react-native';
import Header from './Header';

export default function App() {
  return (
    <View style={styles.container}>
       
         <View style={styles.firstContainer}>
            <Header/>
         </View>
         <View style={styles.secondContainer}>
           <Text>Second Container</Text>
         </View>
         <View style={styles.thirdContainer}>

         </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  firstContainer:{
     flex: 0.5 ,
    
     paddingTop: 40
    },
  textDecoration:{
    color: "#ffffff"
  },
  secondContainer:{
    flex: 0.9 ,
     backgroundColor: "#E4080A",
  },
  thirdContainer:{
    flex: 0.9,
    backgroundColor: "#"
  }
});
