import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import CreateBiblePlan from "./CreateBiblePlan";
import MyBiblePlans from "./MyBiblePlans";

interface CreatePlanModalProps {
  visible: boolean;
  onClose: () => void;
}

const CreatePlanModal: React.FC<CreatePlanModalProps> = ({
  visible,
  onClose,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-[80%] h-[60%] p-6 bg-white rounded-lg">
          {/* SegmentedControl */}
          <SegmentedControl
            values={["My Bible Plans", "Create Bible Plan"]}
            selectedIndex={selectedIndex}
            onChange={(event) =>
              setSelectedIndex(event.nativeEvent.selectedSegmentIndex)
            }
          />
          <View className="w-full h-[90%]">
            {selectedIndex === 0 ? <MyBiblePlans /> : <CreateBiblePlan />}
          </View>

          {/* Close Button */}
          <TouchableOpacity onPress={onClose} className="rounded-md">
            <Text className="text-bibleBrown font-bold text-center">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CreatePlanModal;
