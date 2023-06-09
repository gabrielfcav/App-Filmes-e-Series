import { Pressable, StyleSheet, Text } from "react-native";

export default function Button(props) {
  const { backgroundStyle, textStyle, text, onPressFn } = props;

  return (
    <Pressable
      style={[styles.button, backgroundStyle]}
      onPress={onPressFn ? onPressFn : null}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    color: "black",
  },
});
