import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


export default function ImageContainer({
  width,
  height,
  imageUrl,
  onPressFn,
  text = "",
  textStyle,
}) {
 
  const [error, setError] = useState(false);

  function handleError() {
    setError(true);
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) =>
            pressed && onPressFn ? styles.buttonPressed : null
          }
          onPress={onPressFn}
        >
          <View
            style={
              error
                ? [styles.innerContainerError, { width, height }]
                : styles.innerContainer
            }
          >
            {error ? (
              <Text style={styles.errorText}>
                Görsel Yüklenirken Hata Oluştu
              </Text>
            ) : (
              <Image
                source={{ uri: imageUrl }}
                style={{ width, height }}
                onError={handleError}
              />
            )}
          </View>
        </Pressable>
      </View>
      {text.length > 0 && (
        <Text
          style={[styles.text, textStyle, { width: width }]}
          numberOfLines={1}
        >
          {text}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
  },
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  innerContainerError: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  errorText: {
    textAlign: "center",
    fontSize: 24,
  },
});
