import { cn } from "@/lib/utils"

export const Spacer = ({flipped, darkens}: { flipped:boolean, darkens:boolean }) => {
    return(
        <div className={cn("absolute left-0 right-0", flipped ? "-top-0" : "-bottom-12")}>
            <div
            className={cn("h-16 w-full", flipped ? "" : "rotate-180")}
            style={darkens ? {
                background: `linear-gradient(
                   var(--main-color),
                    var(--light-main)
                )`,
            }
            : 
            {
                background: `linear-gradient(
                    var(--light-main),
                    var(--main-color)
                )`,
            }}
            />
      </div>
    )
}