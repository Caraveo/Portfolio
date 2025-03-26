import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function Works() {
  // Sample works data with image paths
  const works = [
    { 
      id: 1, 
      title: "Ganyemede", 
      year: "2023", 
      medium: "Mixed Media on Cotton",
      image: "/works/Ganyemede.jpg"
    },
    { 
      id: 2, 
      title: "Eros", 
      year: "2024", 
      medium: "Oil on Linen",
      image: "/works/Eros.jpg"
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tighter mb-8">Works</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <Card key={work.id} className="border-none shadow-none">
            <CardContent className="p-0">
              <Link href={`/works/${work.id}`}>
                <div className="aspect-square relative mb-3">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-medium">{work.title}</h3>
                <p className="text-sm text-gray-500">
                  {work.year}, {work.medium}
                </p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

