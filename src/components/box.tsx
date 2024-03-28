import { ComponentWithGenericChildrenType } from "@/types";

export const Box: ComponentWithGenericChildrenType = ({ children }) => {
  return (
    <>
      <div class="my-6">
        <div class="flex flex-row place-items-center gap-2 bg-secondary text-secondary-foreground rounded-md p-4 -m-4">
          {children}
        </div>
      </div>
    </>
  );
};
