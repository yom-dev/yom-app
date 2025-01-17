import { Linking, Alert } from "react-native";

export const openBibleApp = async (bookName: string) => {
  const url = `youversion://bible?reference=${bookName}.1`;
  const fallbackUrl = `https://www.bible.com/bible/111/${bookName}.1`;

  try {
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    } else {
      await Linking.openURL(fallbackUrl);
    }
  } catch (err) {
    console.error("Error opening link", err);
    Alert.alert("Error", "Error occurred opening link.");
  }
};
