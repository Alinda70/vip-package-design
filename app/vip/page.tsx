"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { ProfileHeader } from "@/components/profile-header"
import { VIPCard } from "@/components/vip-card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

const vipPackages = [
  {
    level: 1,
    price: "$50.00",
    dailyLimit: "10.00",
    monthlyLimit: "300.00",
    validDays: 30,
  },
  {
    level: 2,
    price: "$200.00",
    dailyLimit: "100.00",
    monthlyLimit: "3000.00",
    validDays: 60,
  },
  {
    level: 3,
    price: "$500.00",
    dailyLimit: "30000.00",
    monthlyLimit: "900000.00",
    validDays: 90,
  },
  {
    level: 4,
    price: "$2000.00",
    dailyLimit: "80000.00",
    monthlyLimit: "2400000.00",
    validDays: 180,
  },
  {
    level: 5,
    price: "$10000.00",
    dailyLimit: "150000.00",
    monthlyLimit: "4500000.00",
    validDays: 365,
  },
  {
    level: 6,
    price: "$50000.00",
    dailyLimit: "300000.00",
    monthlyLimit: "9000000.00",
    validDays: 365,
  },
]

export default function VIPPage() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-background pb-20">
      {/* Header */}
      <header className="px-4 py-6">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <h1 className="text-xl font-bold text-white">Activate VIP</h1>
          <button className="flex items-center gap-1 text-sm text-blue-200 hover:text-white">
            <FileText className="h-4 w-4" />
            Activation record
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-md px-4">
        {/* Profile Section */}
        <div className="mb-6 rounded-xl bg-card/50 p-4 backdrop-blur-sm">
          <ProfileHeader
            username="Jormea"
            vipLevel={7}
            referralCode="H5773590"
            marginReleaseDate="2027-01-20 20:29"
          />

          {/* Stats */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">500000</p>
              <p className="text-xs text-muted-foreground">Daily transfer limit</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">8000000</p>
              <p className="text-xs text-muted-foreground">Monthly transfer limit</p>
            </div>
          </div>
        </div>

        {/* VIP Packages */}
        <div className="space-y-4">
          {vipPackages.map((pkg) => (
            <VIPCard
              key={pkg.level}
              level={pkg.level}
              price={pkg.price}
              dailyLimit={pkg.dailyLimit}
              monthlyLimit={pkg.monthlyLimit}
              validDays={pkg.validDays}
              isSelected={selectedLevel === pkg.level}
              onSelect={() => setSelectedLevel(pkg.level)}
            />
          ))}
        </div>

        {/* Purchase Button */}
        {selectedLevel && (
          <div className="sticky bottom-24 mt-6">
            <Button className="w-full bg-accent py-6 text-lg font-bold text-accent-foreground hover:bg-accent/90">
              Activate VIP{selectedLevel}
            </Button>
          </div>
        )}
      </div>

      <BottomNav />
    </main>
  )
}
