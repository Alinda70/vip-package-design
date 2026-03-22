import { BottomNav } from "@/components/bottom-nav"
import { CryptoTicker } from "@/components/crypto-ticker"
import { ExchangeLogos } from "@/components/exchange-logos"
import { LiveFeed } from "@/components/live-feed"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="border-b border-border bg-card px-4 py-3">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Clevva</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Recharge
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Withdraw
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Transfer
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              VIP
            </Button>
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
