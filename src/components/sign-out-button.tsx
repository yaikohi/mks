import { signOut } from "@solid-mediakit/auth/client";
import { Button } from "@/components/ui/button";
export const SignOutButton = () => {
  return (
    <Button
      onClick={() =>
        void signOut({
          redirectTo: "/",
          redirect: true,
        })}
    >
      Sign Out
    </Button>
  );
};
