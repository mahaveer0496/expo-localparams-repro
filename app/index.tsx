import { Redirect } from "expo-router";

export default function AuthenticatedIndex() {
  // some conditon to check if user is authenticated
  return (
    <Redirect
      href={{
        pathname: "/[account]/[space]/saves",
        params: {
          account: "me",
          space: "home",
        },
      }}
    />
  );
}
