import { createEffect, createSignal, onCleanup, type JSXElement } from "solid-js"

import { TbCalendar, TbHome, TbMail, TbMoodSmile, TbParking, TbProgressBolt, TbRocket, TbSettings, TbUser } from "solid-icons/tb"

import {
  CommandDialog as CommandDialogShadcn,
  CommandHeading,
  CommandInput,
  CommandItem,
  CommandItemLabel,
  CommandList
} from "@/components/ui/command"
import { A } from "@solidjs/router"

type ListOption = {
  icon: JSXElement
  label: string
  value: string
  shortcut?: JSXElement
}

type List = {
  label: string
  options: ListOption[]
}

export function CommandDialog() {
  const [open, setOpen] = createSignal(false)

  createEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
      if (e.key === 'Tab') {
        console.log(e.key)
        e.preventDefault()
        e.stopPropagation();
      }
    }

    document.addEventListener("keydown", down)

    onCleanup(() => {
      document.removeEventListener("keydown", down)
    })
  })

  return (
    <>
      <p class="text-sm">
        navigate with{" "}
        <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span class="text-xs">ctrl + J</span>
        </kbd>
      </p>
      <CommandDialogShadcn<ListOption, List>
        options={[
          {
            label: "Protected-Pages",
            options: [
              {
                icon: <TbCalendar class="mr-2 size-4" />,
                label: "calendar",
                value: "calendar"
              },
              {
                icon: <TbProgressBolt class="mr-2 size-4" />,
                label: "index",
                value: "index"
              },
            ]
          },
          {
            label: "Public pages",
            options: [
              {
                icon: <TbHome class="mr-2 size-4" />,
                label: "home",
                value: "home"
              }
            ]
          }
        ]
        }
        optionValue="value"
        optionTextValue="label"
        optionLabel="label"
        optionGroupChildren="options"
        placeholder="Type a command or search..."
        itemComponent={(props) => (
          <A href={`/protected/${props.item.rawValue.label}`}>
            <CommandItem item={props.item}>
              {props.item.rawValue.icon}
              <CommandItemLabel>
                {props.item.rawValue.label}
              </CommandItemLabel>
            </CommandItem>
          </A>

        )}
        sectionComponent={(props) => (
          <CommandHeading>{props.section.rawValue.label}</CommandHeading>
        )}
        open={open()}
        onOpenChange={setOpen}
      >
        <CommandInput />
        <CommandList />
      </CommandDialogShadcn>
    </>
  )
}
