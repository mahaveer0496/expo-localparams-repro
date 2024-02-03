import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function AccountFoo() {
  if (!useLocalSearchParams<{ account: string }>().account)
    throw new Error("No account foo page");
  return <Text>Account foo</Text>;
}
