import { supabase } from "@/utils/supabase";

const createNewBiblePlan = async (planName: string, id: string) => {
  try {
    const { error } = await supabase
      .from("bibleReadingContent")
      .insert([{ user_id: id, planName: planName }]);

    if (error) {
      console.error("Supabase Error:", error);
      return { success: false, error: "Error saving data" };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected Error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
};

export default createNewBiblePlan;
