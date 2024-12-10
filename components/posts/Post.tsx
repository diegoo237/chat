import { View } from "react-native";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostImg from "./PostImg";

export default function Post() {
  return (
    <View
      style={{
        height: "500",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 100,
      }}
    >
      <PostHeader />
      <PostImg />
      <PostFooter />
    </View>
  );
}
