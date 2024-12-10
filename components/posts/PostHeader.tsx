import { View } from "react-native";
import UserName from "./UserName";
import Options from "./Option";

export default function PostHeader() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "10",
        height: "10%",
        width: "100%",
      }}
    >
      <UserName />
      <Options />
    </View>
  );
}
