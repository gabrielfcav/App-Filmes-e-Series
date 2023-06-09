import { View, StyleSheet, ScrollView } from "react-native";

import ImageContainer from "../components/ImageContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  movieImageUrl,
  seriesImageUrl,
  imageHeightMain,
  imageWidthMain,
} from "../helpers/constants";


export default function MainScreen({ navigation }) {

  function handlePress(programType) {
    navigation.navigate("ListingScreen", {
      programType: programType,
    });
  }


  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <ImageContainer
          width={imageWidthMain}
          height={imageHeightMain}
          imageUrl={movieImageUrl}
          onPressFn={() => handlePress("movie")}
          text="Filmes"
        />
        <ImageContainer
          width={imageWidthMain}
          height={imageHeightMain}
          imageUrl={seriesImageUrl}
          onPressFn={() => handlePress("series")}
          text="Series"
        />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  text: {
    fontSize: 24,
  },
});
