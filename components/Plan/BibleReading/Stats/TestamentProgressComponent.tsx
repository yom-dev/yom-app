import { View, Text } from "react-native";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

interface TestamentProgressComponentProps {
  title: string; // `title`의 타입을 문자열로 지정
  fill: number; // `fill`의 타입을 숫자로 지정
  percentage: number;
  chapterCount: number;
  totalChapters: number;
  bookCount: number;
  totalBooks: number;
}

const TestamentProgressComponent: React.FC<TestamentProgressComponentProps> = ({
  title,
  fill,
  percentage,
  chapterCount,
  totalChapters,
  bookCount,
  totalBooks,
}) => {
  const percentageText = `${percentage}%`;
  const chapterCountText = `${chapterCount} / ${totalChapters}`;
  const bookCountText = `${bookCount} / ${totalBooks}`;

  return (
    <View>
      <Text className="text-[22px] font-[WantedR] mb-[2px]">{title}</Text>

      <View className="h-[1px] bg-gray-200 mb-3"></View>
      <View className="w-full h-[110px] mt-1 py-2 flex-row items-center justify-between">
        <View className="w-[30%] h-full flex justify-center items-center">
          <AnimatedCircularProgress
            size={90}
            fill={fill}
            arcSweepAngle={360}
            width={8}
            backgroundWidth={5}
            rotation={0}
            duration={1600}
            tintColor="#BC6619"
            backgroundColor="#FFECCF"
            lineCap="round"
            children={() => (
              <View className="h-[50%] w-full flex justify-center items-center px-4">
                <Text className="font-[WantedM] text-[16px] text-bibleBrown">
                  {percentageText}
                </Text>
              </View>
            )}
            childrenContainerStyle={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
        <View className="w-[68%] h-full flex justify-evenly py-1 px-4">
          <Text className="font-[WantedR] text-[16px]">
            Books Read: {bookCountText}
          </Text>
          <Text className="font-[WantedR] text-[16px]">
            Chapters Read: {chapterCountText}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TestamentProgressComponent;
