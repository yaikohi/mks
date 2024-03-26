import {
  createEffect,
  createSignal,
  type JSXElement,
  onCleanup,
} from "solid-js";
import {
  CommandDialog,
  CommandHeading,
  CommandInput,
  CommandItem,
  CommandItemLabel,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

type Option = {
  icon: JSXElement;
  label: string;
  value: string;
  shortcut?: JSXElement;
};

type List = {
  label: string;
  options: Option[];
};

export const CommandDialogDemo = () => {
  console.log("Component");
  const data: List[] = [
    {
      label: "Suggestions",
      options: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="mr-2 h-4 w-4"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16m-9 4h1m0 0v3"
              />
            </svg>
          ),
          label: "Calendar",
          value: "Calendar",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m6-2h.01M15 10h.01" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
              </g>
            </svg>
          ),
          label: "Search emoji",
          value: "Search emoji",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3-5a9 9 0 0 0 6-8a3 3 0 0 0-3-3a9 9 0 0 0-8 6a6 6 0 0 0-5 3" />
                <path d="M7 14a6 6 0 0 0-3 6a6 6 0 0 0 6-3m4-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
              </g>
            </svg>
          ),
          label: "Launch",
          value: "Launch",
        },
      ],
    },
    {
      label: "Settings",
      options: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
              />
            </svg>
          ),
          label: "Profile",
          value: "Profile",
          shortcut: <CommandShortcut>⌘P</CommandShortcut>,
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="m3 7l9 6l9-6" />
              </g>
            </svg>
          ),
          label: "Mail",
          value: "Mail",
          shortcut: <CommandShortcut>⌘B</CommandShortcut>,
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
              </g>
            </svg>
          ),
          label: "Setting",
          value: "Setting",
          shortcut: <CommandShortcut>⌘S</CommandShortcut>,
        },
      ],
    },
  ];

  const [open, setOpen] = createSignal(false);

  createEffect(() => {
    console.log("Client entered!! yay");
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    onCleanup(() => {
      document.removeEventListener("keydown", down);
    });
  });

  return (
    <>
      <p class="text-sm text-muted-foreground">
        Press{" "}
        <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span class="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog<Option, List>
        options={data}
        optionValue="value"
        optionTextValue="label"
        optionLabel="label"
        optionGroupChildren="options"
        placeholder="Type a command or search..."
        itemComponent={(props) => (
          <CommandItem item={props.item}>
            {props.item.rawValue.icon}
            <CommandItemLabel>{props.item.rawValue.label}</CommandItemLabel>
            {props.item.rawValue.shortcut}
          </CommandItem>
        )}
        sectionComponent={(props) => (
          <CommandHeading>{props.section.rawValue.label}</CommandHeading>
        )}
        open={open()}
        onOpenChange={setOpen}
      >
        <CommandInput />
        <CommandList />
      </CommandDialog>
    </>
  );
};
