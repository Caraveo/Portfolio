import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src="/art/Digital/IMG_0140.PNG"
            alt="Featured Artwork"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

