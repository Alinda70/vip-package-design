import { BottomNav } from "@/components/bottom-nav"
import { CryptoTicker } from "@/components/crypto-ticker"
import { ExchangeLogos } from "@/components/exchange-logos"
import { LiveFeed } from "@/components/live-feed"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="border-b border-border bg-card px-4 py-3">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Clevva</h1>
          <div className="flex items-center gap-2">
            <Link href="/announcements">
              <Button variant="ghost" size="icon" className="text-primary relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-destructive" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Recharge
            </Button>
            <Link href="/withdraw">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Withdraw
              </Button>
            </Link>
            <Link href="/transfer">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Transfer
              </Button>
            </Link>
            <Link href="/vip">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                VIP
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              FAQ
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-md space-y-4 p-4">
        {/* Live Feed */}
        <LiveFeed />

        {/* Exchange Logos */}
        <ExchangeLogos />

        {/* Crypto Ticker */}
        <CryptoTicker />
      </div>

      <BottomNav />
    </main>
  )
}
