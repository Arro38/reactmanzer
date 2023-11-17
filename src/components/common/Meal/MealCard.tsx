// import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import {
//   ContextMenu,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuSeparator,
//   ContextMenuSub,
//   ContextMenuSubContent,
//   ContextMenuSubTrigger,
//   ContextMenuTrigger,
// } from "@/components/ui/context-menu";
import Meal from "@/models/Meal";
import { MapPin, PhoneCall } from "lucide-react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface MealCardProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Meal;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function MealCard({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: MealCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: any) => {
    // e.preventDefault();
    // Vérifier si l'élément cible est un bouton
    if (
      e.target.closest("button") ||
      e.target.tagName.toLowerCase() === "button"
    ) {
      // Ne rien faire si c'est un bouton
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={cn("space-y-3", className)} {...props}>
        <div className="overflow-hidden rounded-md">
          <img
            onClick={handleClick}
            src={album.image}
            alt={album.name}
            width={width + "px"}
            height={height + "px"}
            className={cn(
              " cursor-pointer h-auto w-auto object-cover transition-all hover:scale-105",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        </div>
        {/* <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <img
              src={album.image}
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {/* {playlists.map((playlist) => (
                <ContextMenuItem key={playlist}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                  </svg>
                  {playlist}
                </ContextMenuItem>
              ))} 
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu> */}
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">{album.name}</h3>
          <p className="text-xs text-muted-foreground">{album.description}</p>
        </div>
      </div>
      <div
        className={cn(
          "h-full flex flex-col gap-6 items-center justify-center",
          className
        )}
        {...props}
        onClick={handleClick}
      >
        <Button className=" bg-slate-400">
          <MapPin /> Y aller !
        </Button>
        <Button className="hover:bg-slate-400">
          <PhoneCall /> Appeler{" "}
        </Button>
      </div>
    </ReactCardFlip>
  );
}
