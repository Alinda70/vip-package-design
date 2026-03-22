"use client"

import { BottomNav } from "@/components/bottom-nav"
import { ProfileHeader } from "@/components/profile-header"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import {
  Wallet,
  ArrowRightLeft,
  Download,
  Upload,
  Users,
  MessageSquare,
  UserCircle,
  HelpCircle,
  LayoutGrid,
  TrendingUp,
  FileText,
  Headphones,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const quickActions = [
  { icon: TrendingUp, label: "My Investments", href: "/invest" },
  { icon: FileText, label: "Billing Details", href: "#" },
  { icon: Headphones, label: "Online Service", href: "#" },
]

const tools = [
  { icon: Wallet, label: "My Wallet", href: "#" },
  { icon: ArrowRightLeft, label: "Transfer", href: "/transfer" },
  { icon: Download, label: "Wallet Recharge", href: "#" },
  { icon: Upload, label: "Wallet Withdrawal", href: "/withdraw" },
  { icon: Users, label: "My Team", href: "#" },
  { icon: MessageSquare, label: "My Messages", href: "#" },
  { icon: UserCircle, label: "Member Center", href: "#" },
  { icon: HelpCircle, label: "FAQ", href: "#" },
  { icon: LayoutGrid, label: "Platform", href: "#" },
]

const stats = [
  { label: "Total Earnings", value: "$234,567.89" },
  { label: "Total Rewards", value: "$12,345.67" },
  { label: "Margin", value: "$50,000.00" },
  { label: "Freeze", value: "$0.00" },
]

export default function MinePage() {
  const walletBalance = 1767934.5
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/auth/login')
    router.refresh()
  }

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 pb-8 pt-6">
        <div className="mx-auto max-w-md">
          <ProfileHeader
            username="Jormea"
            vipLevel={7}
            referralCode="H5773590"
            marginReleaseDate="2027-01-20 20:29"
          />
        </div>
      </header>

      <div className="mx-auto max-w-md px-4">
        {/* Quick Actions */}
        <div className="-mt-4 mb-6 flex justify-around rounded-xl bg-card p-4 shadow-lg">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <action.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">{action.label}</span>
            </Link>
          ))}
        </div>

        {/* Balance Card */}
        <div className="mb-6 rounded-xl bg-card p-6">
          <p className="mb-2 text-sm text-muted-foreground">Balance</p>
          <p className="text-4xl font-bold text-foreground">
            ${walletBalance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>

          {/* Stats Grid */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* More Tools */}
        <div className="rounded-xl bg-card p-4">
          <h2 className="mb-4 text-lg font-semibold text-foreground">More Tools</h2>
          <div className="grid grid-cols-3 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.label}
                href={tool.href}
                className="flex flex-col items-center gap-2 rounded-lg p-3 transition-colors hover:bg-secondary"
              >
                <tool.icon className="h-6 w-6 text-muted-foreground" />
                <span className="text-center text-xs text-muted-foreground">
                  {tool.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <Button
          variant="outline"
          className="mt-6 w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      <BottomNav />
    </main>
  )
}
