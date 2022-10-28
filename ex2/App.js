import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Animated, Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeLeft = () => {
    Animated.timing(fadeAnim, {
      toValue: 300,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  }
  const stop=()=>{
    Animated.timing(fadeAnim, {
    }).stop();
  }

  const fadeRight = () => {
    Animated.timing(fadeAnim, {
      toValue: -300,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.fading,{
        marginRight: fadeAnim,
      }]}>
        <Image source={require('./assets/icon.png')} style={{height:50,width:50}}></Image>
      </Animated.View>
      <View style={{ flexBasis: 100, justifyContent: 'space-between', marginVertical: 16 }}>
        <Button title='Left' onPress={fadeLeft}></Button>
        <Button title='Right' onPress={fadeRight}></Button>
        <Button title='Stop' onPress={stop}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fading: {
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});
