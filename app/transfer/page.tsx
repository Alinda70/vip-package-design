"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightLeft, FileText } from "lucide-react"

const transferLimits = [
  { level: "VIP1", limit: "10.00 USDT" },
  { level: "VIP2", limit: "100.00 USDT" },
  { level: "VIP3", limit: "30000.00 USDT" },
  { level: "VIP4", limit: "80000.00 USDT" },
  { level: "VIP5", limit: "150000.00 USDT" },
  { level: "VIP6", limit: "300000.00 USDT" },
  { level: "VIP7", limit: "500000.00 USDT" },
  { level: "VIP8", limit: "1000000.00 USDT" },
]

export default function TransferPage() {
  const [username, setUsername] = useState("")
  const [amount, setAmount] = useState("")
  const walletBalance = 1767934.5

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-6">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="h-6 w-6 text-white" />
            <h1 className="text-xl font-bold text-white">Transfer to friends</h1>
          </div>
          <button className="flex items-center gap-1 text-sm text-blue-100 hover:text-white">
            <FileText className="h-4 w-4" />
            Record
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-md p-4">
        {/* Wallet Balance */}
        <div className="mb-6 rounded-xl bg-card p-4 text-center">
          <p className="text-sm text-muted-foreground">Wallet balance</p>
          <p className="text-3xl font-bold text-foreground">
            {walletBalance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        {/* Transfer Form */}
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Username
            </label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="bg-input"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Tips: The receiving account must be a VIP1 or higher level.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Amount
            </label>
            <div className="relative">
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="bg-input pr-12"
                type="number"
              />
              <button
                onClick={() => setAmount(walletBalance.toString())}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-primary hover:underline"
              >
                All
              </button>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Tips: The receiving account must be a VIP1 or higher level.
            </p>
          </div>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            One-click transfer, no key required
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            VIP users can transfer to other accounts without a key
          </p>
        </div>

        {/* Transfer Limits */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Transfer and receive limit (day)
          </h2>
          <div className="space-y-2">
            {transferLimits.map((item) => (
              <div
                key={item.level}
                className="flex items-center justify-between rounded-lg bg-card px-4 py-3"
              >
                <span className="font-medium text-foreground">{item.level}</span>
                <span className="text-muted-foreground">({item.limit})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
