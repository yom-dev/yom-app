import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import SettingSlot from "@/components/Page/SettingPage/SettingSlot";
import { supabase } from "@/utils/supabase";
import { useDeleteUser } from "@/hooks/useDeleteUser";
import useUpdateYomCoin from "@/hooks/useUpdateYomCoin";

const Setting = () => {
  const handleSignOut = () => {
    supabase.auth.signOut();
  };

  const { deleteUser, isDeleting } = useDeleteUser();
  const { updateYomCoin, loading, error } = useUpdateYomCoin();

  const handleDeleteAccount = () => {
    Alert.alert(
      "Request for delete account",
      "Your account will be deleted within 24 hours. It will be notified via the email address used to register.  ",
      [
        {
          text: "Request",
          onPress: deleteUser,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View className="w-full h-full bg-yomWhite">
      <View className="w-full flex justify-center items-center">
        <SettingSlot
          iconName="information"
          text="Info"
          href="/(settings)/info"
        />
        <SettingSlot
          iconName="briefcase-sharp"
          text="About us"
          href="/(settings)/about-us"
        />
        <SettingSlot
          iconName="people-circle-outline"
          text="Contributors"
          href="/(settings)/contributors"
        />
        <SettingSlot
          iconName="at"
          text="Contact us"
          href="/(settings)/contact"
        />

        <TouchableOpacity
          onPress={handleSignOut}
          className="h-[50px] flex justify-center w-[90%]"
        >
          <Text className="text-yomRed font-semibold">Sign Out</Text>
        </TouchableOpacity>

        {/* Delete Account Button */}
        <TouchableOpacity
          onPress={handleDeleteAccount} // Call handleDeleteAccount on press
          disabled={isDeleting} // Disable the button while deleting
          className="h-[50px] flex justify-center w-[90%]"
        >
          <Text className="text-yomRed font-semibold">
            Request User Deletion
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => {
            updateYomCoin(100);
          }} // Call handleDeleteAccount on press
          disabled={isDeleting} // Disable the button while deleting
          className="h-[50px] flex justify-center w-[90%]"
        >
          <Text className="text-yomRed font-semibold">플러스 </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Setting;
