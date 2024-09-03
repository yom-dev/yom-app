import { View, Text, ScrollView, ImageBackground } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import { FlatList } from "react-native-gesture-handler";
DropDownPicker.setListMode("FLATLIST");
// import { ImageBackground } from "expo-image";

export default function record() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "🏕️ Daily Gratitude", value: "gratitude" },
    { label: "💪 WorkOut", value: "workout" },
  ]);
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <View className="w-full h-full">
          <View className="h-fit flex flex-col justify-end mt-[20px] mb-[15px]">
            <Text className="text-[32px] text-yomBlack font-[WantedSB]">
              Record
            </Text>
          </View>

          {/* <View className="mt-[15px]"> */}
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              borderColor: Colors.light.yomGray,
              width: 200,
            }}
            containerStyle={{ width: 200 }}
            placeholder="Select your plan"
            modalProps={{
              animationType: "fade",
            }}
          />
          {/* </View> */}
          <View className="bg-yomBlack w-full h-[78%] border-none rounded-2xl overflow-hidden mt-[15px] ">
            {/*배경화면 설정*/}
            <ImageBackground
              source={require("@/assets/images/main-card-background.png")}
              className="w-full h-full flex justify-start items-start px-[20px] py-[20px]"
              resizeMode="cover"
            >
              <View className="flex flex-column justify-between  h-[15%]">
                <Text className="text-yomWhite font-[WantedM] text-[16px]">
                  Joseph,
                </Text>
                <Text className="text-yomWhite font-[WantedSB] text-[32px]">
                  You thanked for....
                </Text>
              </View>
              <ScrollView className="w-full h-full">
                <View className="gap-[20px] mt-[20px]">
                  <Text className="font-[WantedB] text-[22px] text-white">
                    2024-01-01
                  </Text>
                  <View className="gap-[15px] ml-3">
                    <View className="w-full h-fit flex-row">
                      <Text className="font-[WantedM] text-[18px] text-white">
                        1.
                      </Text>
                      <Text className="font-[WantedM] text-[18px] ml-[5px] text-white">
                        allowing an opportunity to give thanks
                      </Text>
                    </View>

                    <View className="w-full h-fit flex-row">
                      <Text className="font-[WantedM] text-[18px] text-white">
                        2.
                      </Text>
                      <Text className="font-[WantedM] text-[18px] ml-[5px] text-white">
                        allowing an opportunity to give thanks
                      </Text>
                    </View>
                    <View className="w-full h-fit flex-row">
                      <Text className="font-[WantedM] text-[18px] text-white">
                        3.
                      </Text>
                      <Text className="font-[WantedM] text-[18px] ml-[5px] text-white">
                        allowing an opportunity to give thanks
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
}
