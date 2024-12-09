import { View } from "react-native";
import { Image } from "expo-image";
import foto from "../../assets/images/foto.jpg";

export default function PostImg() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image source={foto} style={{ width: "100%", height: "100%" }} />
    </View>
  );
}
