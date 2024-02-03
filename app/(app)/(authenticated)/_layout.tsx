import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function AuthenticatedGroupLayout() {
  return (
    <EnsureAccount>
      <Stack />
    </EnsureAccount>
  );
}

function EnsureAccount(props: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <ActivityIndicator color={"red"} />;
  }

  return props.children;
}
