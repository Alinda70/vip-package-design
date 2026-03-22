"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TickerItem {
  symbol: string
  price: string
  change: string
  isPositive: boolean
}

const initialTickers: TickerItem[] = [
  { symbol: "BTC/USDT", price: "69165.52", change: "-2.06%", isPositive: false },
  { symbol: "ETH/USDT", price: "2099.34", change: "-2.58%", isPositive: false },
  { symbol: "BNB/USDT", price: "632.85", change: "-1.52%", isPositive: false },
  { symbol: "EOS/USDT", price: "0.78050000", change: "+1.07%", isPositive: true },
  { symbol: "BCH/USDT", price: "459.48", change: "-1.42%", isPositive: false },
  { symbol: "ETC/USDT", price: "8.1958", change: "-2.7%", isPositive: false },
  { symbol: "AVAX/USDT", price: "9.2609", change: "-2.88%", isPositive: false },
  { symbol: "SHIB/USDT", price: "0.00000586", change: "-2.33%", isPositive: false },
  { symbol: "TRX/USDT", price: "0.30834400", change: "-0.32%", isPositive: false },
  { symbol: "LTC/USDT", price: "54.65", change: "-1.93%", isPositive: false },
  { symbol: "DOT/USDT", price: "1.4684", change: "-2.6%", isPositive: false },
  { symbol: "DOGE/USDT", price: "0.09186600", change: "-2.94%", isPositive: false },
  { symbol: "SOL/USDT", price: "87.8882", change: "-2.15%", isPositive: false },
]

export function CryptoTicker() {
  const [tickers, setTickers] = useState<TickerItem[]>(initialTickers)

  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) =>
        prev.map((ticker) => {
          const priceNum = parseFloat(ticker.price)
          const variance = priceNum * (Math.random() * 0.002 - 0.001)
          const newPrice = (priceNum + variance).toFixed(
            ticker.price.includes(".") ? ticker.price.split(".")[1].length : 2
          )
          const changeNum = (Math.random() * 6 - 3).toFixed(2)
          return {
            ...ticker,
            price: newPrice,
            change: `${parseFloat(changeNum) >= 0 ? "+" : ""}${changeNum}%`,
            isPositive: parseFloat(changeNum) >= 0,
          }
        })
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded-xl bg-card p-4">
      <div className="mb-3 grid grid-cols-3 text-xs text-muted-foreground">
        <span>Currency</span>
        <span className="text-right">Price ($)</span>
        <span className="text-right">Change</span>
      </div>
      <div className="space-y-2">
        {tickers.map((ticker) => (
          <div
            key={ticker.symbol}
            className="grid grid-cols-3 items-center text-sm"
          >
            <span className="font-medium text-foreground">{ticker.symbol}</span>
            <span className="text-right font-mono text-foreground">
              {ticker.price}
            </span>
            <span
              className={cn(
                "text-right font-mono",
                ticker.isPositive ? "text-success" : "text-destructive"
              )}
            >
              {ticker.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
