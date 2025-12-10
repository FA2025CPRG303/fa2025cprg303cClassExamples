import { Image, StyleSheet, Text, View } from 'react-native';
import { useMyTheme } from '../../context/theme-context';

export default function ArtworkComp({ artworkObj }) {
  const {themeStyles} = useMyTheme();
  const { title, artistDisplayName, objectDate, primaryImageSmall } =
    artworkObj;

  return (
    <View style={artStyles.container}>
      <Text style={[{ fontSize: 20 }, themeStyles.text]}>{title}</Text>
      <View style={artStyles.imgContainer}>
      <Image
        source={{ uri: primaryImageSmall }}
        style={artStyles.img}
        resizeMode="contain"
      />
      </View>
      <Text style={themeStyles.text}>Artist: {artistDisplayName}</Text>
      <Text style={themeStyles.text}>Date: {objectDate}</Text>
    </View>
  );
}

const artStyles = StyleSheet.create({
  container: {
    // backgroundColor: 'lightblue',
    // padding: 20,
    marginVertical: 10,
  },
  imgContainer: {
    display: 'flex',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  img: {
    aspectRatio: 1920/1080,
  },
});
