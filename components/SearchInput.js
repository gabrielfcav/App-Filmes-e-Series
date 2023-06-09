import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";


export default function SearchInput({
  handleSearch,
  resetPrograms,
  textInputRef,
}) {
 
  const [isResetNeeded, setIsResetNeeded] = useState(false);

 
  function handleInput(userInput) {
    if (userInput.length >= 3) {
      handleSearch(userInput);
      if (!isResetNeeded) {
        setIsResetNeeded(true);
      }
    } else if (isResetNeeded) {
      resetPrograms();
      setIsResetNeeded(false);
    }
  }

  return (
    <TextInput
      style={styles.textInput}
      placeholder="Pesquisar"
      onChangeText={handleInput}
      ref={textInputRef}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 8,
    marginHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});
