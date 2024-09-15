import { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

export default function AvatarImagePicker() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="w-[160px] h-[160px] rounded-full bg-yomGray justify-center items-center ">
      {image ? (
        // If an image is selected, render the Image component
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{ uri: image }}
            className="w-[160px] h-[160px] rounded-full border-[0.2px] border-yomGray"
          />
        </TouchableOpacity>
      ) : (
        // If no image is selected, render the icon
        <TouchableOpacity onPress={pickImage}>
          <Ionicons name="camera-outline" size={40} color={"#FFFFFF"} />
        </TouchableOpacity>
      )}
    </View>
  );
}
