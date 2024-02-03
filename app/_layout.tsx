import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
};

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
    <SplashScreenHandler>
      <Slot />
    </SplashScreenHandler>
  );
}

function SplashScreenHandler(props: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return <>{props.children}</>;
}
