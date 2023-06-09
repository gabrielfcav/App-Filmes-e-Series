import { useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
} from "react-native";

import Header from "../components/Header";
import ImageContainer from "../components/ImageContainer";
import DropDown from "../components/DropDown";
import SearchInput from "../components/SearchInput";
import { imageHeightListing, imageWidthListing } from "../helpers/constants";


import {
  initProgramsArray,
  sortProgramsByReleaseYear,
  sortProgramsRandomly,
  searchInPrograms,
  sortProgramsByScore,
} from "../helpers/functions";
import Footer from "../components/Footer";


export default function ListingScreen({ route, navigation }) {

  const { programType } = route.params;

  const [lastFilter, setLastFilter] = useState();

  
  const searchInputRef = useRef();


  const [programsArray, setProgramsArray] = useState(
    initProgramsArray(programType)
  );


  function goToMainScreen() {
    navigation.navigate("MainScreen");
  }

  function clearSearchInput() {
    searchInputRef.current.clear();
  }

  function resetPrograms() {
  
    if (lastFilter === undefined) {
      setProgramsArray(initProgramsArray(programType));
    } else {
   
      handleFilters(lastFilter);
    }
  }

  function handleFilters(filterType) {
    setLastFilter(filterType);
    if (filterType === "new") {
      setProgramsArray(sortProgramsByReleaseYear(programType, false));
    } else if (filterType === "old") {
      setProgramsArray(sortProgramsByReleaseYear(programType));
    } else if (filterType === "random") {
      setProgramsArray(sortProgramsRandomly(programType));
    } else if (filterType === "score") {
      setProgramsArray(sortProgramsByScore(programType));
    }
  }

  function filterProgramsBySearch(userInput) {
    setProgramsArray(searchInPrograms(userInput));
  }

  return (
    <View style={styles.container}>
      <View style={styles.flatlist}>
        <FlatList
          data={programsArray}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center" }}>Pesquisas</Text>
          }
          ListHeaderComponent={
            <>
              <Header goToMainScreenFn={goToMainScreen} />
              <SearchInput
                handleSearch={filterProgramsBySearch}
                resetPrograms={resetPrograms}
                textInputRef={searchInputRef}
              />
              <DropDown
                handleFilters={handleFilters}
                clearSearchInput={clearSearchInput}
              />
            </>
          }
          numColumns={2}
          renderItem={({ item }) => (
            <ImageContainer
              width={imageWidthListing}
              height={imageHeightListing}
              imageUrl={item.images["Poster Art"].url}
              text={item.title}
              textStyle={{ fontSize: 16 }}
            />
          )}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.footer}
      >
        <Footer goToMainScreenFn={goToMainScreen} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    flex: 5,
  },
  footer: {
    flex: 1,
  },
});
