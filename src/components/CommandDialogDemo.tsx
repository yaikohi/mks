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
      label: "Calendar!",
      options: [
        {
          icon: "Calendar icon",
          label: "Calendar",
          value: "Calendar",
        },
        {
          icon: "Search icon",
          label: "Search emoji",
          value: "Search emoji",
        },
        {
          icon: "Launch icon",
          label: "Launch",
          value: "Launch",
        },
      ],
    },
    {
      label: "Settings",
      options: [
        {
          icon: "Profile icon",
          label: "Profile",
          value: "Profile",
          shortcut: <CommandShortcut>⌘P</CommandShortcut>,
        },
        {
          icon: "Mail icon",
          label: "Mail",
          value: "Mail",
          shortcut: <CommandShortcut>⌘B</CommandShortcut>,
        },
        {
          icon: "Settings icon",
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
