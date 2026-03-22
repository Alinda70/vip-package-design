import { Crown } from "lucide-react"
import Image from "next/image"

interface ProfileHeaderProps {
  username: string
  vipLevel: number
  referralCode: string
  marginReleaseDate: string
  avatarUrl?: string
}

export function ProfileHeader({
  username,
  vipLevel,
  referralCode,
  marginReleaseDate,
  avatarUrl,
}: ProfileHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
        {avatarUrl ? (
          <Image src={avatarUrl} alt={username} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
            {username.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">{username}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-0.5 text-xs font-semibold text-white">
            <Crown className="h-3 w-3" />
            VIP{vipLevel}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Referral code: {referralCode}
        </p>
        <p className="text-sm text-muted-foreground">
          Margin release time: {marginReleaseDate}
        </p>
      </div>
    </div>
  )
}
