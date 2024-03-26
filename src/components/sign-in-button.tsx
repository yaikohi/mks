import { signIn } from "@solid-mediakit/auth/client";
import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  return <Button onClick={() => signIn("google")}>Sign In</Button>;
};
