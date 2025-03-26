import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter">Work Not Found</h1>
        <p className="text-gray-500">The work you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/works">Return to Works</Link>
        </Button>
      </div>
    </div>
  )
} 