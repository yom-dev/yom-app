import { supabase } from "@/utils/supabase";
import { useGetUserId } from "@/hooks/useGetUserId";

const deleteBiblePlan = async (planName: string) => {
  const id = useGetUserId();
  try {
    const { error } = await supabase
      .from("bibleReadingContent")
      .delete()
      .eq("user_id", id)
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
