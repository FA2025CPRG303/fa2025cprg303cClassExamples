import { useNavigation } from '@react-navigation/native';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useMyTheme } from '../context/theme-context';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { themeStyles, toggleDarkMode } = useMyTheme();

  return (
    <ScrollView>
      <View style={ [styles.container, themeStyles.container] }>
        <Button
          title="Dark Mode"
          onPress={toggleDarkMode}
        />
        <Button
          title="Art Gallery"
          onPress={() => navigation.navigate('Gallery')}
        />
        <Button
          title="Dog Adoption"
          onPress={() => navigation.navigate('Adopt')}
        />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        <Button
          title="Go to Counter"
          onPress={() => navigation.navigate('Counter')}
        />
        <Text style={ [ {fontSize: 30, textAlign: 'center'}, themeStyles.text ] }>Hello World!</Text>
        <Text style={[styles.paragraphText, themeStyles.text]}>
          This is my first React Native application!
        </Text>
        <Image
          style={styles.myImage}
          source={require('../assets/images/cat.jpg')}
        />
        <Image
          style={styles.myImage}
          source={{
            uri: 'https://images.dog.ceo/breeds/sheepdog-indian/Himalayan_Sheepdog.jpg',
          }}
        />
        <Image
          style={styles.myImage}
          source={require('../assets/images/cat.jpg')}
        />
        <Image
          style={styles.myImage}
          source={require('../assets/images/cat.jpg')}
        />
        <Image
          style={styles.myImage}
          source={require('../assets/images/cat.jpg')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  paragraphText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  },
  myImage: {
    width: 300,
    height: 200,
  },
});
