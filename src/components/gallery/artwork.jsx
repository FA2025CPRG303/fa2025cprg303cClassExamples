import { Image, StyleSheet, Text, View } from 'react-native';

export default function ArtworkComp({ artworkObj }) {
  const { title, artistDisplayName, objectDate, primaryImageSmall } =
    artworkObj;

  return (
    <View style={artStyles.container}>
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <View style={artStyles.imgContainer}>
      <Image
        source={{ uri: primaryImageSmall }}
        style={artStyles.img}
        resizeMode="contain"
      />
      </View>
      <Text>Artist: {artistDisplayName}</Text>
      <Text>Date: {objectDate}</Text>
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
