export function ExchangeLogos() {
  const exchanges = ["BINANCE", "OKX", "HUOBI", "COINBASE"]

  return (
    <div className="flex items-center justify-around rounded-xl bg-card p-4">
      {exchanges.map((exchange) => (
        <div
          key={exchange}
          className="flex h-10 items-center justify-center rounded-lg bg-secondary px-3 text-xs font-bold tracking-wider text-secondary-foreground"
        >
          {exchange}
        </div>
      ))}
    </div>
  )
}
