import Link from "next/link"

export default function Nav() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-medium">
            Artist Name
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="text-sm hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/works" className="text-sm hover:underline underline-offset-4">
              Works
            </Link>
            <Link href="/art" className="text-sm hover:underline underline-offset-4">
              Art
            </Link>
            <Link href="/model" className="text-sm hover:underline underline-offset-4">
              Model
            </Link>
            <Link href="/contact" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 