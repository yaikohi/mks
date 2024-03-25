import { signIn } from "@solid-mediakit/auth/client";
import { Button } from "./ui/button";

export const SignInButton = () => {
  return <Button onClick={() => signIn("discord")}>Sign In</Button>;
};
