import { View } from "react-native";
import Post from "../../components/posts/Post";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: "10",
      }}
    >
      <Post />
    </View>
  );
}
