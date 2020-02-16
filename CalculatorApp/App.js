import React from 'react';
import { StyleSheet, Text, Button, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';


const screenWidth=Dimensions.get('window').width;
const screenHight=Dimensions.get('window').height;


export default function App() {
  
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <View style={styles.navigator}>
        <TouchableOpacity>
          <View>
            <Text style={styles.textStyling}>MENU</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.textStyling}>DELETE</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.equationScreen}>
        <View style={styles.equationArea}>
          <Text style={styles.equationText}>
            88x4+1900-120/4
          </Text>
        </View>
        <View style={styles.answerArea}>
          <TouchableOpacity>
            <View >
              <Text style={styles.equalStyling}>EQUALS</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.equalsValue}>
            533
          </Text>
        </View>
      </View>
      <View style={styles.moreOptions}>      
        <View style={styles.keyPadArea}>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text style={styles.buttons}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttons}>%</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.buttons}>+-</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.buttons}>/</Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text style={styles.buttons}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttons}>8</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.buttons}>9</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.buttons}>x</Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text style={styles.buttons}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttons}>5</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.buttons}>6</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.buttons}>-</Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text style={styles.buttons}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttons}>2</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.buttons}>3</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.buttons}>+</Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text style={styles.buttons}>?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttons}>0</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.buttons}>,</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.buttons}>=</Text>
            </TouchableOpacity> 
          </View>
        </View>
      </View>
    </SafeAreaView>
    </View>
    
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    // justifyContent: 'center',
    backgroundColor: '#1B1E22',
    flexDirection:'column',
    padding:10,
    alignContent:'flex-start'

  },
  navigator:{
    top:screenHight-(screenHight-40),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1B1E22',
    
  },
  textStyling:{
    color: '#9481FD',
  },
  equationScreen:{
    top:(screenHight-(screenHight-80)),
    alignItems:'stretch',
    padding:8,
    
    
    height:100,
    
  },
  equationText:{
    color:'#C5BFE6',
    fontSize:20

  },
  equationArea:{
    alignItems:'flex-end',
  },
  answerArea:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingTop:5,
    flex: 1,
  },
  equalsValue:{
    color: '#fff',
    fontSize: 50,
    fontWeight:'500'
  },
  equalStyling:{
    color: '#C5BFE6',
    paddingTop:20
  },
  moreOptions:{
    backgroundColor:'#9481FD',
    top:(screenHight-(screenHight-90)),
    borderRadius:50,
  },
  keyPadArea:{
    flexDirection:'column',
    top:(screenHight-(screenHight-90)),
    padding:8,
    borderRadius:50,
    backgroundColor:'#1B1E22'

  },
  row:{
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingTop:10
  },
  buttons:{
    fontSize: 30,
    backgroundColor: "#2C2E33",
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderRadius: 110,
    color: "#fff"
  }
});
