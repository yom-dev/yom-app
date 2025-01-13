import { supabase } from "@/utils/supabase";

const deleteBiblePlan = async (planName: string, user_id: string | null) => {
  try {
    const { error } = await supabase
      .from("bibleReadingContent")
      .delete()
      .eq("user_id", user_id)
      .eq("planName", planName);

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

export default deleteBiblePlan;
