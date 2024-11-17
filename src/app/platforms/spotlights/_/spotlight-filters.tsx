"use client";

import { Faders } from "@phosphor-icons/react";
import { Fragment, useState } from "react";

import { Button } from "@cafenture/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@cafenture/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@cafenture/components/ui/select";
import { filters } from "@cafenture/content/spotlights";

export const SpotlightFilters = () => {
  const [defaultValue, setDefaultValue] = useState(
    filters[0].items[0].value
  );

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="xl:hidden">
          <Button
            className="bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-800"
            size="icon"
            variant="ghost"
          >
            <Faders />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {filters.map((filter, key) => (
            <Fragment key={filter.group}>
              {key !== 0 && <DropdownMenuSeparator />}
              <DropdownMenuGroup>
                <DropdownMenuLabel>Filter {filter.group}</DropdownMenuLabel>
                {filter.items.map((item, key) => (
                  <DropdownMenuItem key={key}>{item.label}</DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Select value={defaultValue} onValueChange={setDefaultValue}>
        <SelectTrigger className="hidden md:flex w-[320px]">
          <span>
            {
              filters
                .flatMap((filter) => filter.items)
                .find((filter) => filter.value === defaultValue)?.text
            }
          </span>
        </SelectTrigger>
        <SelectContent>
          {filters.map((filter) => (
            <SelectGroup key={filter.group}>
              <SelectLabel>{filter.group}</SelectLabel>
              {filter.items.map((item, key) => (
                <SelectItem key={key} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
