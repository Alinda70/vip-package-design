"use client"

import { useState } from "react"
import { ArrowLeft, ChevronRight, Info } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BottomNav } from "@/components/bottom-nav"

const walletOptions = [
  { id: "trc20", name: "USDT-TRC20", arrival: "30 mins" },
  { id: "erc20", name: "USDT-ERC20", arrival: "15 mins" },
  { id: "bep20", name: "USDT-BEP20", arrival: "10 mins" },
]

export default function WithdrawPage() {
  const [amount, setAmount] = useState("")
  const [selectedWallet, setSelectedWallet] = useState(walletOptions[0])
  const availableBalance = 1767934.50

  const handleWithdrawAll = () => {
    setAmount(availableBalance.toString())
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Link href="/mine" className="text-foreground">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">Withdraw</h1>
        </div>
        <Link href="/withdraw/records" className="text-primary text-sm font-medium">
          Record
        </Link>
      </div>

      {/* Withdrawal Form */}
      <div className="p-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4 space-y-6">
            {/* Wallet Selection */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Withdrawal account</label>
              <button className="w-full flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div className="flex flex-col items-start">
                  <span className="text-foreground font-medium">{selectedWallet.name}</span>
                  <span className="text-xs text-muted-foreground">
                    Expected arrival: {selectedWallet.arrival}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            {/* Amount Input */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Withdrawal amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">$</span>
                <Input
                  type="number"
                  placeholder="Enter withdrawal amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8 h-12 bg-secondary border-0 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Available Balance */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Available balance: <span className="text-foreground font-medium">${availableBalance.toLocaleString()}</span>
              </span>
              <button 
                onClick={handleWithdrawAll}
                className="text-primary text-sm font-medium"
              >
                Withdraw all
              </button>
            </div>

            {/* Info Note */}
            <div className="flex items-start gap-2 p-3 bg-secondary/50 rounded-lg">
              <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Withdrawal is automatically reviewed and processed by the system. 
                It is expected to arrive within 30 minutes. Please be patient!
              </p>
            </div>

            {/* Submit Button */}
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
