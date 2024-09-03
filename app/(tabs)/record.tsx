import { View, Text, ScrollView, ImageBackground } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import GratitudeRecord from "../plan/record/recordContent/Gratitude/GratitudeRecord";
DropDownPicker.setListMode("FLATLIST");

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
            <GratitudeRecord />
          </View>
        </View>
      </View>
    </View>
  );
}
