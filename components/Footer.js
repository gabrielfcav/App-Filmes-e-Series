import { Text, View, StyleSheet, Pressable } from "react-native";
import { SocialIcon } from "react-native-elements";
import { createAlert } from "../helpers/functions";
import { alertMessage } from "../helpers/constants";


export default function Footer({ containerStyle, goToMainScreenFn }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.textContainer}>
        <Pressable onPress={goToMainScreenFn ? goToMainScreenFn : null}>
          <Text style={styles.text}>Teste</Text>
        </Pressable>
        <Text style={styles.text}>|</Text>
        <Pressable
          onPress={() => createAlert("Twiiter", alertMessage)}
        >
          <Text style={styles.text}>Twitter</Text>
        </Pressable>
        <Text style={styles.text}>|</Text>
        <Pressable
          onPress={() => createAlert("Facebook", alertMessage)}
        >
          <Text style={styles.text}>Facebook</Text>
        </Pressable>
      </View>
      <View style={styles.socialMedia}>
        <SocialIcon
          type="facebook"
          onPress={() => createAlert("Facebook", alertMessage)}
        />
        <SocialIcon
          type="twitter"
          onPress={() => createAlert("Twitter", alertMessage)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 120,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  text: {
    color: "white",
  },
  socialMedia: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
});
