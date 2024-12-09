import { View } from "react-native";
import UserName from "./UserName";

export default function PostHeader() {
  return (
    <View
      style={{
        backgroundColor: "blue",
        justifyContent: "center",
        height: "13%",
        width: "100%",
      }}
    >
      <UserName />
    </View>
  );
}
