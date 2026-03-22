"use client"

import { Crown } from "lucide-react"
import { cn } from "@/lib/utils"

interface VIPCardProps {
  level: number
  price: string
  dailyLimit: string
  monthlyLimit: string
  validDays: number
  isSelected?: boolean
  onSelect?: () => void
}

const gradients = [
  "from-zinc-400 to-zinc-600",
  "from-blue-500 to-purple-600",
  "from-orange-400 to-pink-500",
  "from-blue-400 to-indigo-600",
  "from-amber-400 to-orange-500",
  "from-purple-500 to-blue-600",
  "from-emerald-400 to-cyan-500",
  "from-rose-400 to-red-600",
]

export function VIPCard({
  level,
  price,
  dailyLimit,
  monthlyLimit,
  validDays,
  isSelected,
  onSelect,
}: VIPCardProps) {
  const gradientIndex = Math.min(level - 1, gradients.length - 1)

  return (
    <button
      onClick={onSelect}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl p-4 text-left transition-all",
        "bg-gradient-to-br",
        gradients[gradientIndex],
        isSelected && "ring-2 ring-accent ring-offset-2 ring-offset-background"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white">V{level}</div>
          <span className="text-sm text-orange-200 hover:underline cursor-pointer">
            View details
          </span>
          <div className="space-y-1 text-xs text-white/80">
            <p>Daily transfer limit: {dailyLimit}</p>
            <p>Monthly transfer limit: {monthlyLimit}</p>
            <p>Valid date: {validDays} days</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="rounded-full bg-white/20 p-3">
            <Crown className="h-8 w-8 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">{price}</span>
            <div
              className={cn(
                "h-5 w-5 rounded-full border-2 border-white",
                isSelected && "bg-white"
              )}
            />
          </div>
        </div>
      </div>
    </button>
  )
}
