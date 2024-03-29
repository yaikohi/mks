import { createSession } from "@solid-mediakit/auth/client";
import { Show } from "solid-js";
import { SignInButton } from "./sign-in-button";
import { SignOutButton } from "./sign-out-button";
import { CommandDialog } from "./command-dialog";

export const Navbar = () => {
  const session = createSession();
  return (
    <>
      <nav class="flex flex-row justify-between px-4 py-2">
        <div class="flex flex-row gap-2">
          <a href="/">Home</a>
          <a href="/protected">Protected</a>
        </div>
        <Show
          when={session()}
          fallback={
            <>
              <SignInButton />
            </>
          }
        >
          <CommandDialog />
          <SignOutButton />
        </Show>
      </nav>
    </>
  );
};
