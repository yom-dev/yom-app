import React from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Dimensions, View } from "react-native";
import MainCard from "@/components/MainCard/MainCard";

const MainCarousel = ({
  itemHeight,
  containerHeight,
}: {
  itemHeight: number;
  containerHeight: number;
}) => {
  const width = Dimensions.get("window").width;
  const ref = React.useRef<ICarouselInstance>(null);
  const data = [
    {
      key: "1",
      Component: MainCard,
    },
    {
      key: "2",
      Component: MainCard,
    },
    {
      key: "3",
      Component: MainCard,
    },
    {
      key: "4",
      Component: MainCard,
    },
  ];

  return (
    <Carousel
      style={{ width: "100%", height: containerHeight }}
      ref={ref}
      pagingEnabled
      loop={false}
      height={itemHeight}
      data={data}
      vertical
      mode={"vertical-stack"}
      modeConfig={{
        stackInterval: 5,
        scaleInterval: 0,
        rotateZDeg: -90,
        snapDirection: "left",
      }}
      renderItem={({ item }) => {
        return <item.Component />;
      }}
    />
  );
};

export default MainCarousel;

// import React from "react";
// import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
// import { Dimensions, View, Text } from "react-native";
// import MainCard from "@/components/MainCard/MainCard";
// import { useSharedValue } from "react-native-reanimated";

// const MainCarousel = () => {
//   const width = Dimensions.get("window").width;
//   const ref = React.useRef<ICarouselInstance>(null);
//   const data = [
//     {
//       key: "1",
//       Component: MainCard,
//     },
//     {
//       key: "2",
//       Component: MainCard,
//     },
//     {
//       key: "3",
//       Component: MainCard,
//     },
//     {
//       key: "4",
//       Component: MainCard,
//     },
//   ];
//   const viewCount = 5;

//   // const progress = useSharedValue<number>(0);

//   return (
//     <View className="flex-1">
//       <Carousel
//         style={{ width: "100%", height: 400 }}
//         ref={ref}
//         pagingEnabled
//         snapEnabled
//         height={300}
//         data={data}
//         vertical
//         loop
//         mode={"vertical-stack"}
//         // onProgressChange={progress}
//         // customConfig={() => ({ type: "positive", viewCount })}
//         modeConfig={{
//           // snapDirection: "right",
//           stackInterval: 18,
//         }}
//         renderItem={({ item }) => {
//           return <item.Component></item.Component>;
//         }}
//       />
//     </View>
//   );
// };

// export default MainCarousel;
