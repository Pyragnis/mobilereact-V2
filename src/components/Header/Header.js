import React from 'react'
import { Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';

const styles = {
    container: {
      flex: 1,
    },
  };
   
  const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };
   
  const titleConfig = {
    title: 'Hello, world',
  };

  function Header() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
        />
      </View>
    );
  }

export default Header