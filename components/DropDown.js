import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import { filterOptions } from "../helpers/constants";


export default function DropDown({ handleFilters, clearSearchInput }) {

  const [selectedFilter, setSelectedFilter] = useState("");

 
  function handleSelect() {
    clearSearchInput();
    handleFilters(selectedFilter);
  }

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(value) => setSelectedFilter(value)}
        data={filterOptions}
        save="key"
        onSelect={handleSelect}
        placeholder="Filtros"
        searchPlaceholder="Filtrar"
        notFoundText="Nao encontrado"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 12,
  },
});
