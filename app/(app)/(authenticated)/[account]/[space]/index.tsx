import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function SpaceIndex() {
  if (!useLocalSearchParams<{ space: string }>().space)
    throw new Error("No space index page");
  return <Text>Space index page</Text>;
}
