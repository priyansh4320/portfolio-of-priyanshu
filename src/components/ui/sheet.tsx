import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SheetProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  side?: "left" | "right"
}

const Sheet = ({ open, onClose, children, side = "right" }: SheetProps) => {
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 bottom-0 z-50 w-72 bg-background shadow-xl transition-transform duration-300 ease-in-out",
          side === "right" ? "right-0" : "left-0",
          open
            ? "translate-x-0"
            : side === "right"
            ? "translate-x-full"
            : "-translate-x-full"
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </>
  )
}

export { Sheet }
