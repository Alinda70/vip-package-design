"use client"

import { useEffect, useState } from "react"

const usernames = ["hn***IT", "jk***AB", "mn***XY", "qr***CD", "st***EF", "uv***GH"]
const coins = ["BTC", "ETH", "LTC", "DOGE", "SOL", "BNB"]
const actions = ["Just Bought", "Just Sold", "Invested in"]

export function LiveFeed() {
  const [feed, setFeed] = useState({
    username: usernames[0],
    action: actions[0],
    coin: coins[0],
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setFeed({
        username: usernames[Math.floor(Math.random() * usernames.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
        coin: coins[Math.floor(Math.random() * coins.length)],
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-sm">
      <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-success" />
      <span className="text-muted-foreground">{feed.username}</span>
      <span className="text-foreground">{feed.action}</span>
      <span className="font-semibold text-primary">{feed.coin}</span>
      <span className="text-muted-foreground">Daily Intelligent AI Quanti</span>
    </div>
  )
}
