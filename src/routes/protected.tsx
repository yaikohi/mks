import { Box } from "@/components/box";
import { MainLayoutWrapper } from "@/components/main-layout-wrapper";
import { createSession } from "@solid-mediakit/auth/client";
import { ParentComponent, Show } from "solid-js";

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

const ProtectedPage: ParentComponent = (props) => {
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

            <Box>
              <div class="max-w-[50px] max-h-[50px]">
                {us.user?.image ? <img src={us.user?.image} /> : null}
              </div>
              <p>Hey there {us.user?.name}! You are signed in!</p>
            </Box>

            {/* Child pages */}
            <Box>
              {props.children}
            </Box>

          </>
        )}
      </Show>
    </MainLayoutWrapper>
  );
};

export default ProtectedPage;
