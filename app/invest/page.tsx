"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { InvestmentCard } from "@/components/investment-card"
import { cn } from "@/lib/utils"

const vipLevels = ["VIP2", "VIP3", "VIP4", "VIP5", "VIP6", "VIP7"]

const investments = [
  {
    coin: "BTC",
    interestRate: "10%",
    term: "1 Day",
    startingAmount: "$300.00",
    purchaseLimit: 8,
    vipRequired: "VIP5",
    progress: 50,
  },
  {
    coin: "ETH",
    interestRate: "8%",
    term: "1 Day",
    startingAmount: "$500.00",
    purchaseLimit: 1,
    vipRequired: "VIP5",
    progress: 20,
  },
  {
    coin: "DOGE",
    interestRate: "8%",
    term: "1 Day",
    startingAmount: "$800.00",
    purchaseLimit: 1,
    vipRequired: "VIP5",
    progress: 38,
  },
  {
    coin: "LTC",
    interestRate: "8%",
    term: "1 Day",
    startingAmount: "$1000.00",
    purchaseLimit: 1,
    vipRequired: "VIP5",
    progress: 38,
  },
  {
    coin: "EOS",
    interestRate: "8%",
    term: "1 Day",
    startingAmount: "$1500.00",
    purchaseLimit: 1,
    vipRequired: "VIP5",
    progress: 15,
  },
]

export default function InvestPage() {
  const [selectedVip, setSelectedVip] = useState("VIP5")

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-6">
        <div className="mx-auto max-w-md">
          <h1 className="text-2xl font-bold text-white">Invest</h1>
          <p className="text-blue-100">Hot Quantify pledge</p>
        </div>
      </header>

      <div className="mx-auto max-w-md p-4">
        {/* VIP Level Tabs */}
        <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
          {vipLevels.map((vip) => (
            <button
              key={vip}
              onClick={() => setSelectedVip(vip)}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                selectedVip === vip
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {vip}
            </button>
          ))}
        </div>

        {/* Investment Cards */}
        <div className="space-y-4">
          {investments.map((investment, index) => (
            <InvestmentCard key={index} {...investment} />
          ))}
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
