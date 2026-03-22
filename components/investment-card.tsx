"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface InvestmentCardProps {
  coin: string
  interestRate: string
  term: string
  startingAmount: string
  purchaseLimit: number
  vipRequired: string
  progress: number
}

export function InvestmentCard({
  coin,
  interestRate,
  term,
  startingAmount,
  purchaseLimit,
  vipRequired,
  progress,
}: InvestmentCardProps) {
  return (
    <div className="rounded-xl bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-foreground">
            {coin} Daily Intelligent AI
          </h3>
          <p className="text-sm text-muted-foreground">Quantitative Trading</p>
        </div>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Invest now
        </Button>
      </div>

      <div className="mb-3 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xl font-bold text-accent">{interestRate}</p>
          <p className="text-xs text-muted-foreground">Interest rate</p>
        </div>
        <div>
          <p className="text-xl font-bold text-foreground">{term}</p>
          <p className="text-xs text-muted-foreground">Investment term</p>
        </div>
        <div>
          <p className="text-xl font-bold text-foreground">{startingAmount}</p>
          <p className="text-xs text-muted-foreground">Starting amount</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">
          Product purchase restrictions: {purchaseLimit} part
        </p>
        <p className="text-xs text-muted-foreground">
          This product is limited to {vipRequired} Buy
        </p>
        <div className="flex items-center gap-2">
          <Progress value={progress} className="h-2" />
          <span className="text-xs font-medium text-foreground">{progress}%</span>
        </div>
      </div>
    </div>
  )
}
