import { FadersHorizontal } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@cafenture/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@cafenture/components/ui/dropdown-menu";
import { spotlightCategories } from "@cafenture/content/spotlights";

export const SpotlightCategories = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="xl:hidden">
          <Button
            className="bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-800"
            size="icon"
            variant="ghost"
          >
            <FadersHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Pilih Kategori</DropdownMenuLabel>
            <DropdownMenuItem>Semua Kategori</DropdownMenuItem>
            {spotlightCategories.map((category, key) => (
              <DropdownMenuItem key={key}>{category.name}</DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <ul className="hidden xl:flex items-center gap-4">
        <li>
          <Button
            className="bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-800"
            variant="ghost"
          >
            Semua Kategori
          </Button>
        </li>
        {spotlightCategories.map((category, key) => (
          <li key={key}>
            <Button
              className="hover:bg-slate-100 text-slate-600 hover:text-slate-800"
              variant="ghost"
            >
              {category.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
