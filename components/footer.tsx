import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Link href="/cv" className="text-xs hover:underline underline-offset-4">
              CV
            </Link>
            <Link href="/commission" className="block text-xs hover:underline underline-offset-4">
              Commission
            </Link>
          </div>
          <div className="space-y-3">
            <Link href="/poser" className="text-xs hover:underline underline-offset-4">
              Poser
            </Link>
            <Link href="/taboo" className="block text-xs hover:underline underline-offset-4">
              Taboo
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">© {new Date().getFullYear()} Artist Name. All rights reserved.</div>
      </div>
    </footer>
  )
}

