import { ComponentWithGenericChildrenType } from "@/types";

export const MainLayoutWrapper: ComponentWithGenericChildrenType = (
  props,
) => {
  return (
    <>
      <main class="md:max-w-[1000px] max-w-[400px] md:min-w-[600px] flex flex-col mx-auto w-full">
        {props.children}
      </main>
    </>
  );
};
