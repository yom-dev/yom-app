import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const CustomWhiteButton = ({
  title,
  titleSize,
}: {
  title: string;
  titleSize: number;
}) => {
  // StyleSheet 객체를 이용하여 스타일 정의
  const styles = StyleSheet.create({
    buttonStyle: {
      width: "100%",
      height: "100%",
      backgroundColor: "#ffffff", // Colors 객체에서 'yomWhite' 색상 사용
      borderColor: Colors.light.yomWhite,
      borderWidth: 1,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    textStyle: {
      color: Colors.light.yomGreen, // Colors 객체에서 'yomGreen' 색상 사용
      fontFamily: "WantedSans-SemiBold",
      fontSize: titleSize,
    },
  });

  return (
    <Pressable style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
};

export default CustomWhiteButton;
