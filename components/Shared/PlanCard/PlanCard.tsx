import { View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { planGradation } from "@/constants/planGradation";
import { icons } from "@/constants/Icons";
type IconPlanName = keyof typeof icons;
type GradationPlanName = keyof typeof planGradation;

const PlanCard = ({
  size,
  planName,
  title,
  subTitle,
}: {
  size: string;
  planName: string;
  title: string;
  subTitle: string;
}) => {
  const sizeVariants: { [key: string]: string } = {
    small: "w-[105px] h-[135px] rounded-[25px] border-none",
    medium: "w-[135px] h-[170px] rounded-[25px] border-none",
    large: "w-[215px] h-[275px] rounded-[25px] border-none",
  };
  const paddingVariants: { [key: string]: string } = {
    small: "border-none pt-[22px] pb-[5px] pl-[16px] w-full h-full",
    medium: "border-none pt-[20px]  pl-[18px] pb-[5px] w-full h-full",
    large: "border-none pt-[40px] pb-[10px] pl-[32px] w-full h-full",
  };

  const titleVariants: { [key: string]: string } = {
    small:
      "text-[14px] gap-[6px] font-[WantedB] text-yomWhite flex justify-between items-start",
    medium:
      "text-[18px] gap-[3px] font-[WantedB]  text-yomWhite flex justify-between items-start",
    large:
      "text-[30px] gap-[10px] font-[WantedB] text-yomWhite flex justify-between items-start",
  };

  const subTitleVariants: { [key: string]: string } = {
    small: "text-[8px] font-[WantedM] text-yomWhite",
    medium: "text-[12px] font-[WantedM] text-yomWhite",
    large: "text-[21px] font-[WantedM] text-yomWhite",
  };
  const GradationPlanName = planName as GradationPlanName;
  const IconPlanName = planName as IconPlanName;

  const { startColor, endColor } = planGradation[
    IconPlanName as keyof typeof planGradation
  ] || {
    startColor: "#000",
    endColor: "#FFF",
  };

  return (
    <View className={`${sizeVariants[size]}`}>
      <LinearGradient
        colors={[startColor, endColor]}
        start={[1, 0]}
        end={[0, 1]}
        style={{ height: "100%", width: "100%", borderRadius: 25 }}
      >
        <View className={`${paddingVariants[size]} `}>
          <View className=" w-full h-full justify-between">
            <View className={`${titleVariants[size]} h-fit`}>
              <Text className={`${titleVariants[size]}`}>{title}</Text>
              <Text className={`${subTitleVariants[size]}`}>{subTitle}</Text>
            </View>

            <View className="w-full h-[65%] flex-row ">
              <ImageBackground
                source={icons[IconPlanName]}
                className="w-full h-full ml-[15px]"
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PlanCard;
