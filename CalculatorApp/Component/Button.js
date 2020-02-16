import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text, Dimensions  } from "react-native"



export default ({onPress, text,size,theme}) =>{
    const screen = Dimensions.get("window");
    const buttonWidth = screen.width / 4;
    if (size === "double") {
        buttonStyles.push(styles.buttonDouble);
      }
    
      if (theme === "secondary") {
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
      } else if (theme === "accent") {
        buttonStyles.push(styles.buttonAccent);
      }
    
      return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
          <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
      );
    };

const styles = StyleSheet.create({
    
    button: {
        backgroundColor: "#2C2E33",
        flex: 1,
        margin: 5,
        borderRadius: Math.floor(buttonWidth),
    },
    text:{
        color:'#F2F2F2',
        fontSize: 15
    }
  });
