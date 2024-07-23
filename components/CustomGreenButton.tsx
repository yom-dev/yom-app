import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const CustomGreenButton = ({
  title,
  titleSize,
}: {
  title: string;
  titleSize: number;
}) => {
  // 스타일 정의
  const styles = StyleSheet.create({
    buttonStyle: {
      width: "100%",
      height: "100%",
      backgroundColor: Colors.light.yomGreen, // 'yomGreen'은 Colors 객체에 정의되어 있어야 합니다.
      borderColor: Colors.light.yomGreen,
      borderWidth: 1,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    textStyle: {
      color: "white",
      fontFamily: "WantedSans-SemiBold",
      fontSize: titleSize,
    },
    pressedStyle: {
      opacity: 0.1,
    },
  });

  return (
    <View style={styles.buttonStyle}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed && styles.pressedStyle,
        ]}
      >
        <Text style={styles.textStyle}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomGreenButton;
