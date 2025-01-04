import AsyncStorage from "@react-native-async-storage/async-storage";

const getStoredPlanName = async () => {
  try {
    const value = await AsyncStorage.getItem("biblePlanName");
    if (value !== null) {
      console.log("Retrieved value:", value);
    }
    return value;
  } catch (error) {
    console.error("Error reading data:", error);
  }
};

export default getStoredPlanName;
