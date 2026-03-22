"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BottomNav } from "@/components/bottom-nav"

const transactions = [
  { id: 1, type: "USDT_TRC20", date: "2026-03-21 14:32:15", amount: 499999.00, status: "Completed" },
  { id: 2, type: "USDT_ERC20", date: "2026-03-20 09:15:42", amount: 125000.00, status: "Completed" },
  { id: 3, type: "USDT_TRC20", date: "2026-03-19 18:45:33", amount: 89500.00, status: "Completed" },
  { id: 4, type: "USDT_BEP20", date: "2026-03-18 11:22:08", amount: 45000.00, status: "Completed" },
  { id: 5, type: "USDT_TRC20", date: "2026-03-17 16:55:19", amount: 28750.00, status: "Completed" },
  { id: 6, type: "USDT_ERC20", date: "2026-03-16 08:30:45", amount: 15200.00, status: "Completed" },
  { id: 7, type: "USDT_TRC20", date: "2026-03-15 21:12:33", amount: 9800.00, status: "Completed" },
  { id: 8, type: "USDT_BEP20", date: "2026-03-14 13:48:22", amount: 6800.00, status: "Completed" },
]

export default function WithdrawRecordsPage() {
  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-background border-b border-border">
        <Link href="/withdraw" className="text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-semibold text-foreground">Withdrawal Records</h1>
      </div>

      {/* Transaction List */}
      <div className="p-4 space-y-3">
        {transactions.map((tx) => (
          <Card key={tx.id} className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{tx.type}</p>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <div className="relative w-20 h-5">
                      <Progress value={100} className="h-5 bg-primary/20" />
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-primary-foreground">
                        {tx.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-success">
                    ${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
