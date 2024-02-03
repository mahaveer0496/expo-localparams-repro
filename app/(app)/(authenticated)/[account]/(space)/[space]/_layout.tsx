import { Stack, useLocalSearchParams } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function SpaceLayout() {
  console.log(useLocalSearchParams<{ space: string }>());
  // if (!useLocalSearchParams<{ space: string }>().space)
  //   throw new Error("No space layout page");
  return <Stack />;
}
