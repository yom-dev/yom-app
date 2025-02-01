import {
  View,
  Text,
  Button,
  Pressable,
  ScrollView,
  FlatList,
  BackHandler,
  Image,
  TouchableOpacity,
} from "react-native";
import MainMyPlan from "@/components/Page/MainPage/MainMyPlan/MainMyPlan";
import { useState } from "react";
import MainCarousel from "@/components/Shared/Carousel/MainCarousel";
import { Link } from "expo-router";
import { useGetUser } from "@/hooks/useGetUser";
import useGetProfile from "@/hooks/useGetProfile";
import { BackgroundImage } from "@rneui/themed/dist/config";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import TutorialCard from "@/components/Shared/Card/TutorialCard";
import CustomHeader from "@/components/Shared/Header/CustomHeader";

export default function HomeScreen() {
  const { data, loading, error } = useGetProfile();
  const profile = data && data.length > 0 ? data[0] : null;
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <CustomHeader />
        <FlatList
          data={[]}
          renderItem={null}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View>
              <View className="h-fit flex flex-col justify-end mt-[20px]">
                <Text className="text-[32px] text-yomBlack font-[WantedSB]">
                  {profile && profile.firstName
                    ? `Welcome, ${profile.firstName}`
                    : "Welcome to yom."}
                </Text>
              </View>

              <View className="w-full h-[410px] mt-[20px]">
                <MainCarousel itemHeight={400} containerHeight={410} />
              </View>

              {/* <View className="w-full h-[215px] mt-[35px]">
                <MainMyPlan />
              </View> */}

              <View className="w-full h-fit mt-[35px] ">
                <Text className="text-[28px] text-yomBlack font-[WantedSB] mb-5">
                  Learn More
                </Text>

                <View className="w-full h-[80px]">
                  <TutorialCard
                    title="What is yom?"
                    subTitle="# tutorial #about-us"
                    startColor="#615EE2"
                    endColor="#BA8DF3"
                    link="https://shore-bacon-35a.notion.site/What-is-yom-1881313ef6f480ca9a0ff7ad9a84c8d4?pvs=4"
                  />
                </View>

                <View className="w-full h-[80px] mt-3">
                  <TutorialCard
                    title="What are the coins for?"
                    subTitle="# coin # reward"
                    startColor="#FFC570"
                    endColor="#F88D0E"
                    link="https://shore-bacon-35a.notion.site/What-are-the-coins-for-1881313ef6f480b48fa4fc9c698f9915?pvs=4"
                  />
                </View>

                <View className="w-full h-[80px] mt-3">
                  <TutorialCard
                    title="Upcoming contents?"
                    subTitle="# upcoming # plan"
                    startColor="#9BD069"
                    endColor="#D0AD69"
                    link="https://shore-bacon-35a.notion.site/Upcoming-contents-1881313ef6f48088a1a2cfa9a0452325?pvs=4"
                  />
                </View>

                <View className="w-full h-[80px] mt-3">
                  <TutorialCard
                    title="About our team."
                    subTitle="# yom # team"
                    startColor="#746ACC"
                    endColor="#6A96CF"
                    link="https://shore-bacon-35a.notion.site/About-our-team-1881313ef6f48061a9b5d67c1e17efff?pvs=4"
                  />
                </View>
              </View>

              <View className="w-full h-[40px]"></View>
            </View>
          }
        />

        {/* </ScrollView> */}
      </View>
    </View>
  );
}
