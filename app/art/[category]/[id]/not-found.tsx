import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tighter mb-4">Art Piece Not Found</h1>
        <p className="text-gray-500 mb-8">
          The art piece you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/art">
          <Button>Back to Art</Button>
        </Link>
      </div>
    </div>
  )
} 