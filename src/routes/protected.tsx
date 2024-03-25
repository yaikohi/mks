import { MainLayoutWrapper } from "@/components/main-layout-wrapper";
import { createSession } from "@solid-mediakit/auth/client";
import { Show, type VoidComponent } from "solid-js";

const ProtectedFallback = () => {
  return (
    <>
      <div class="place-items-start flex flex-col">
        <h1>Protected page</h1>
        <p>Only shown for logged in users~! please login!</p>
      </div>
    </>
  );
};

const Protected: VoidComponent = () => {
  const session = createSession();

  return (
    <MainLayoutWrapper>
      <Show
        when={session()}
        fallback={<ProtectedFallback />}
        keyed
      >
        {(us) => (
          <>
            <h1>Protected</h1>

            <div class="my-6">
              <div class="flex flex-row place-items-center gap-2 bg-secondary text-secondary-foreground rounded-md p-4 -m-4">
                <div class="max-w-[50px] max-h-[50px]">
                  {us.user?.image ? <img src={us.user?.image} /> : null}
                </div>
                <p>Hey there {us.user?.name}! You are signed in!</p>
              </div>
            </div>
          </>
        )}
      </Show>
    </MainLayoutWrapper>
  );
};

export default Protected;
