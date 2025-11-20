import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import ArtworkComp from '../components/gallery/artwork';

export default function GalleryScreen() {
  const [singleArt, setSingleArt] = useState(null);
  const [changeImage, setChangeImage] = useState(0);
  const validIds = [
    '436598',
    '436188',
    '438624',
    '437547',
    '438644',
    '436598',
    '437589',
    '437460',
    '435907',
    '435968',
  ];

  async function getArtworkByID(artworkId) {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artworkId}`,
      );
      if (!response.ok) console.log(response.status);
      const data = await response.json();
      setSingleArt(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let randomIdIndex = Math.floor(Math.random() * validIds.length);
    getArtworkByID(validIds[randomIdIndex]);
  }, [changeImage]);

  // getArtworkByID(); // Don't do this!!
  console.log(singleArt);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30 }}>API Art Gallery</Text>
      {singleArt && <ArtworkComp artworkObj={singleArt} />}
      <Button
        title="Get Random Artwork"
        onPress={() => setChangeImage(Math.random())}
      />
    </View>
  );
}
