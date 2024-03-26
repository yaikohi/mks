import { signOut } from "@solid-mediakit/auth/client";
// import { Button } from "./ui/button";

export const SignOutButton = () => {
  return (
    <button
      onClick={() =>
        void signOut({
          redirectTo: "/",
          redirect: true,
        })}
    >
      Sign Out
    </button>
  );
};
