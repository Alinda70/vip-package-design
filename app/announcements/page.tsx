"use client"

import { ArrowLeft, Bell, Megaphone, Gift, Shield, Rocket } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BottomNav } from "@/components/bottom-nav"

const announcements = [
  {
    id: 1,
    title: "Ecosystem Upgrade Officially Launched | Strategic Integration of Dual Platforms",
    date: "March 17, 2026",
    type: "Major",
    icon: Rocket,
    content: {
      intro: "To build a more competitive digital asset service ecosystem, Clevva sbs and OneKeyOn trading platform have officially completed their strategic integration.",
      upgrades: [
        {
          title: "Unified Trading Ecosystem",
          description: "OneKeyOn will serve as the core trading platform, offering Spot Trading, Futures & Options Trading, Copy Trading, Quantitative Strategies, and Wealth Management Products."
        },
        {
          title: "Clevva sbs Platform",
          description: "Clevva Sbs will be upgraded as a digital asset management gateway, retaining Wallet Management and Selected Wealth Management Access."
        }
      ],
      benefits: [
        "Lower latency and higher performance trading experience",
        "A wider range of investment products",
        "More advanced risk control systems",
        "A more integrated, one-stop asset management experience"
      ],
      reward: "5,000,000 USDT User Incentive Program including exclusive rewards for new users, asset migration incentives, trading volume rebates, and fast-track VIP upgrade benefits."
    }
  },
  {
    id: 2,
    title: "Exclusive User Migration Rewards Program Now Live",
    date: "March 15, 2026",
    type: "Rewards",
    icon: Gift,
    content: {
      intro: "To express our gratitude for your continued trust and support, we are officially launching the User Migration Incentive Program.",
      rewards: [
        {
          title: "Registration Welcome Bonus",
          description: "5 USDT Trial Fund: Engage in real-market trading with zero initial deposit. Profits generated are fully withdrawable."
        },
        {
          title: "First Deposit Multiplier",
          items: [
            "Deposit 10 USDT → Receive 5 USDT Bonus",
            "Deposit 20 USDT → Receive 15 USDT Bonus",
            "Deposit 50 USDT → Receive 50 USDT Bonus (100% Match!)"
          ]
        },
        {
          title: "Legacy Asset Migration Incentives",
          description: "Users with a legacy balance of ≥ 3,000 USDT will receive an instant 100 USDT migration bonus plus VIP Level Boost and Priority Customer Support."
        },
        {
          title: "Trading Incentive Scheme",
          items: [
            "Fee Rebates: Significant discounts on trading fees",
            "Milestone Rewards: Bonuses upon reaching volume targets",
            "Loyalty Incentives: Long-term rewards for active participation"
          ]
        },
        {
          title: "Referral Program: Dual Rewards",
          items: [
            "Earn 5 USDT for every successful referral (min 50 USDT deposit)",
            "Enjoy up to 10% of your referrals' trading commissions"
          ]
        },
        {
          title: "Limited-Time Flash Events",
          items: [
            "Early Bird Reward: Extra bonuses for first 100 users",
            "Prize Pool Access: Exclusive migration-only prize pool",
            "Fast-Track VIP: Accelerated path to higher VIP tiers"
          ]
        }
      ],
      securityNote: "All rewards are subject to specific activity terms. Please ensure all actions are conducted through official channels. The platform will never request your private keys or passwords."
    }
  }
]

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-3 p-4">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-semibold text-foreground">Official Announcements</h1>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="bg-card border-border overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <announcement.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-base text-foreground leading-tight">
                      {announcement.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">{announcement.date}</p>
                  </div>
                </div>
                <Badge 
                  variant={announcement.type === "Major" ? "default" : "secondary"}
                  className={announcement.type === "Major" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}
                >
                  {announcement.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{announcement.content.intro}</p>
              
              {announcement.content.upgrades && (
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-primary" />
                    Key Upgrades
                  </h4>
                  {announcement.content.upgrades.map((upgrade, idx) => (
                    <div key={idx} className="bg-secondary/50 rounded-lg p-3">
                      <h5 className="text-sm font-medium text-foreground mb-1">{upgrade.title}</h5>
                      <p className="text-xs text-muted-foreground">{upgrade.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {announcement.content.benefits && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">What You Will Gain</h4>
                  <ul className="space-y-1">
                    {announcement.content.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-success mt-0.5">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {announcement.content.reward && (
                <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Gift className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Limited-Time Rewards</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{announcement.content.reward}</p>
                </div>
              )}

              {announcement.content.rewards && (
                <div className="space-y-3">
                  {announcement.content.rewards.map((reward, idx) => (
                    <div key={idx} className="bg-secondary/50 rounded-lg p-3">
                      <h5 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Gift className="h-4 w-4 text-accent" />
                        {reward.title}
                      </h5>
                      {reward.description && (
                        <p className="text-xs text-muted-foreground">{reward.description}</p>
                      )}
                      {reward.items && (
                        <ul className="space-y-1 mt-1">
                          {reward.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {announcement.content.securityNote && (
                <div className="bg-destructive/10 rounded-lg p-3 border border-destructive/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="h-4 w-4 text-destructive" />
                    <span className="text-sm font-medium text-foreground">Security Notice</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{announcement.content.securityNote}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
