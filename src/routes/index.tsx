import { CommandDialogDemo } from "@/components/CommandDialogDemo";
import { MainLayoutWrapper } from "@/components/main-layout-wrapper";
import { clientOnly } from "@solidjs/start";
import { Show } from "solid-js";

// const Test = clientOnly(() => import("../components/CommandDialogDemo"));
export default function Home() {
  return (
    <MainLayoutWrapper>
      <CommandDialogDemo />
      <h1>Hello !</h1>
    </MainLayoutWrapper>
  );
}
