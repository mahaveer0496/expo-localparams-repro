import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function AccountLayout() {
  if (!useLocalSearchParams<{ account: string }>().account)
    throw new Error("No account layout");
  return (
    <EnsureStore>
      <Stack />
    </EnsureStore>
  );
}

function EnsureStore(props: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <ActivityIndicator color={"purple"} />;
  }

  return <>{props.children}</>;
}
