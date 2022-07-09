import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useState } from 'react';
import { ThemeContext } from './src/context/themeContext';
import { myColors } from './src/styles/colors';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
    <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor : '#000'}]}>
      <StatusBar style="auto" />
      <Switch 
        value={theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </View>
  </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
