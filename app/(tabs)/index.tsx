import { View } from "react-native";
import Post from "../../components/posts/Post";
import Storys from "@/components/storys/Storys";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Storys />
      <Post />
    </View>
  );
}
