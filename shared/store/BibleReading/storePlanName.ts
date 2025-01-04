import AsyncStorage from "@react-native-async-storage/async-storage";

const storePlanName = async (value: string) => {
  try {
    await AsyncStorage.setItem("biblePlanName", value);
    console.log("Data stored successfully!");
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

export default storePlanName;
