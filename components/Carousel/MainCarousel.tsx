import React, { useState } from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Dimensions, View } from "react-native";
import GratitudeMainCard from "@/components/MainCard/GratitudeMainCard/GratitudeMainCard";
import ToDoMainCard from "@/components/MainCard/ToDoMainCard/ToDoMainCard";
import ReadingMainCard from "../MainCard/ReadingMainCard/ReadingMainCard";

const MainCarousel = ({
  itemHeight,
  containerHeight,
}: {
  itemHeight: number;
  containerHeight: number;
}) => {
  const width = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = React.useRef<ICarouselInstance>(null);

  const onIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const data = [
    {
      key: "1",
      Component: ToDoMainCard,
    },
    {
      key: "2",
      Component: ReadingMainCard,
    },
    {
      key: "3",
      Component: GratitudeMainCard,
    },
  ];

  return (
    <View className="flex flex-col justify-start items-center w-full h-full">
      <View className="w-full h-fit">
        <Carousel
          style={{ width: "100%", height: containerHeight }}
          ref={carouselRef}
          pagingEnabled
          // snapEnabled
          loop={false}
          width={width * 0.9}
          height={itemHeight}
          data={data}
          vertical={false}
          mode={"vertical-stack"}
          modeConfig={{
            stackInterval: 5,
            scaleInterval: 0,
            rotateZDeg: -90,
            snapDirection: "left",
            opacityInterval: 0.5,
          }}
          onProgressChange={(
            _offsetProgress: number,
            absoluteProgress: number
          ) => {
            const currentIndex = carouselRef.current?.getCurrentIndex() || 0;

            if (absoluteProgress > 0.5 || currentIndex === 0) {
              setCurrentIndex(currentIndex);
            }
          }}
          renderItem={({ item }) => {
            return <item.Component />;
          }}
        />
      </View>
      <View className="w-full height-fit flex-row items-center justify-center mt-[108%]">
        {data.map((_, index) => (
          <View
            key={index}
            className={`h-2.5 w-2.5 rounded-full mx-1 ${
              currentIndex === index ? "bg-[#FFF2C0]" : "bg-yomWhite"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default MainCarousel;
