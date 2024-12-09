import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PostNav() {
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        height: "11.4%",
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRightWidth: 0.5,
          borderColor: "#ced4da",
        }}
      >
        <Ionicons name={"chatbubble-outline"} color={"#343a40"} size={20} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderLeftWidth: 0.5,
          borderColor: "#ced4da",
        }}
      >
        <Ionicons name={"heart-outline"} color={"#343a40"} size={20} />
      </View>
    </View>
  );
}
