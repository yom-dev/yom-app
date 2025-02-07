import { View, Text } from "react-native";
import React from "react";

const SleepAssistantStat = () => {
  return (
    <View className="pt-6 w-full h-full ">
      <Text className="font-[WantedM] text-[32px] text-white">Statistics</Text>
    </View>
  );
};

export default SleepAssistantStat;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//

// import { View, Text, TouchableOpacity } from "react-native";
// import React from "react";
// import * as Notifications from "expo-notifications";
// import { Audio } from "expo-av";

// const configureAudio = async () => {
//   await Audio.setAudioModeAsync({
//     playsInSilentModeIOS: true, // iOS에서 무음 모드에서도 재생
//     allowsRecordingIOS: false,
//     staysActiveInBackground: true, // 백그라운드에서도 실행
//     shouldDuckAndroid: true,
//     playThroughEarpieceAndroid: false,
//   });
// };

// // 알람 사운드 재생 함수
// const playAlarmSound = async () => {
//   try {
//     await configureAudio(); // 오디오 설정 적용

//     const { sound } = await Audio.Sound.createAsync(
//       require("@/assets/sounds/notification/alarm.mp3"), // 사운드 파일 (경로 수정 필요)
//       { shouldPlay: true }
//     );
//     await sound.playAsync();
//   } catch (error) {
//     console.error("Error playing sound:", error);
//   }
// };

// // 알람 설정 함수
// const scheduleAlarm = async () => {
//   console.log("clicked");
//   try {
//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: "Wake Up!",
//         body: "Your alarm is ringing!",
//         sound: "default", // iOS에서는 무음 모드에 따라 다를 수 있음
//       },
//       trigger: { seconds: 2 }, // 10초 후 알람 실행
//     });

//     // 10초 후 강제로 사운드 재2
//     setTimeout(() => {
//       playAlarmSound();
//     }, 3000);
//   } catch (error) {
//     console.error("Error scheduling alarm:", error);
//   }
// };

// const SleepAssistantStat = () => {
//   return (
//     <View className="flex-1 items-center justify-center bg-black">
//       <Text className="text-4xl text-white font-bold">Statistics</Text>
//       <TouchableOpacity
//         className="mt-6 w-[300px] h-[90px] bg-blue-500 px-6 py-3 rounded-lg"
//         onPress={scheduleAlarm}
//       >
//         <Text className="text-white text-lg font-semibold">Set Alarm</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SleepAssistantStat;
