import { View  , Text, StyleSheet , Image} from "react-native"
export default function Header(){
    return(
        <View>
          <View style={styles.subcontainerHeader}>
          <Text style={styles.textDecoration}>Nexus</Text>
          <Image
            style={styles.imageMap}
           source={require("./assets/map.png")}
          />
          </View>
          <Text style={styles.subTextDecoration}>choose another</Text>
        </View>
    )
}


const styles =  StyleSheet.create({
    textDecoration : {
        color: "#000000",
        fontSize: 30,
        marginLeft: 20,
        marginTop:10,
        fontWeight: "700"
    },
    subcontainerHeader:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between", 
        //backgroundColor: "#f0f0f0"
    },
    imageMap:{
        marginRight: 40,
        marginTop: 15,
        
    },
    subTextDecoration:{
        color: "#797979",
        marginLeft: 15,
        fontSize: 20

    }
})