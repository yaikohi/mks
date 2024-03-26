import { signIn } from "@solid-mediakit/auth/client";
// import { Button } from "./ui/button";

export const SignInButton = () => {
  return <button onClick={() => signIn("google")}>Sign In</button>;
};
