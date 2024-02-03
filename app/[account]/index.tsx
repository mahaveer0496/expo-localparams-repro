import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function AccountIndex() {
  if (!useLocalSearchParams<{ account: string }>().account)
    throw new Error("No account index page");

  return <Text>Account index</Text>;
}
