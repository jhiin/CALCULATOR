import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';
import React , {useState} from 'react';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Buttons';
import MyKeyboard from './src/components/MyKeybords';


export default function App() {
  const [theme , setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container ,{backgroundColor: '#000'}]}>
        <Switch  
        value={theme === "light"}
        onValueChange={() => setTheme(theme === 'light' ? "dark" : "light")}
        />
        <MyKeyboard />
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
