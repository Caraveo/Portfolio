import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function Art() {
  // Categories matching the artwork keys
  const categories = [
    { id: "Paintings", name: "Paintings" },
    { id: "Digital", name: "Digital" },
    { id: "Papeles", name: "Papeles" },
  ]

  // Art pieces with image paths
  const artworks = {
    Paintings: [
      { 
        id: 1, 
        title: "Orange Bottom", 
        year: "2023", 
        medium: "Oil on Canvas",
        image: "/art/Paintings/1275.JPG"
      },
      { 
        id: 2, 
        title: "Tonechrome", 
        year: "2023", 
        medium: "Oil on Canvas",
        image: "/art/Paintings/1276.JPG"
      },
      { 
        id: 3, 
        title: "Purpose", 
        year: "2023", 
        medium: "Oil on Canvas",
        image: "/art/Paintings/1272.JPG"
      },
    ],
    Digital: [
      { 
        id: 1, 
        title: "Digital Boy #1", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0136.PNG",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 2, 
        title: "Digital Boy #2", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0137.PNG",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 3, 
        title: "Digital Boy #3", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0138.PNG",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 4, 
        title: "Digital Boy #4", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0139.PNG",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 5, 
        title: "Digital Boy #5", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0140.PNG",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 6, 
        title: "Digital Boy #6", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0141.PNG",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 7, 
        title: "Digital Boy #7", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0142.PNG",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 8, 
        title: "Digital Boy #8", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0143.PNG",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 9, 
        title: "Digital Boy #9", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0144.PNG",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 10, 
        title: "Digital Boy #10", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0147.jpeg",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 11, 
        title: "Digital Boy #11", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0148.jpeg",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 12, 
        title: "Digital Boy #12", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0150.jpeg",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 13, 
        title: "Digital Boy #13", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0206.jpeg",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 14, 
        title: "Digital Boy #14", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0209.jpeg",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      },
      { 
        id: 15, 
        title: "Digital Boy #15", 
        year: "2024", 
        medium: "Digital",
        image: "/art/Digital/IMG_0424.PNG",
        description: "A digital exploration of a nude boy figure.",
        dimensions: "Digital",
        materials: "Digital",
        status: "Available"
      }
    ],
    Papeles: [
      { 
        id: 1, 
        title: "Nude Boy #1", 
        year: "2024", 
        medium: "Oil on Paper",
        image: "/art/Papeles/IMG_6529_2B2.jpg",
        description: "Study of a Nude boy, on paper.",
        dimensions: "Variable",
        materials: "Paper, Oil Paint",
        status: "Available"
      },
      { 
        id: 2, 
        title: "Nude Boy #2", 
        year: "2024", 
        medium: "Oil on Paper",
        image: "/art/Papeles/IMG_5717.JPG",
        description: "Study of a Nude boy, on paper.",
        dimensions: "Variable",
        materials: "Paper, Oil Paint",
        status: "Available"
      },
      { 
        id: 3, 
        title: "Nude Boy #3", 
        year: "2024", 
        medium: "Oil on Paper",
        image: "/art/Papeles/IMG_5728.JPG",
        description: "Study of a Nude boy, on paper.",
        dimensions: "Variable",
        materials: "Paper, Oil Paint",
        status: "Available"
      },
      { 
        id: 4, 
        title: "Nude Boy #4", 
        year: "2024", 
        medium: "Oil on Paper",
        image: "/art/Papeles/IMG_5729.JPG",
        description: "Study of a Nude boy, on paper.",
        dimensions: "Variable",
        materials: "Paper, Oil Paint",
        status: "Available"
      },
      { 
        id: 5, 
        title: "Nude Boy #5", 
        year: "2024", 
        medium: "Oil on Paper",
        image: "/art/Papeles/IMG_5731.JPG",
        description: "Study of a Nude boy, on paper.",
        dimensions: "Variable",
        materials: "Paper, Oil Paint",
        status: "Available"
      },
      { 
        id: 6, 
        title: "Nude Boy #6", 
        year: "2024", 
        medium: "Oil on Paper",
        image: "/art/Papeles/IMG_6044.jpg",
        description: "Study of a Nude boy, on paper.",
        dimensions: "Variable",
        materials: "Paper, Oil Paint",
        status: "Available"
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tighter mb-8">Art</h1>

      <Tabs defaultValue="Paintings">
        <TabsList className="mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {artworks[category.id as keyof typeof artworks]?.map((artwork) => (
                <Card key={artwork.id} className="border-none shadow-none">
                  <CardContent className="p-0">
                    <Link href={`/art/${category.id}/${artwork.id}`}>
                      <div className="aspect-square relative mb-3">
                        <Image
                          src={artwork.image}
                          alt={artwork.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <h3 className="font-medium">{artwork.title}</h3>
                      <p className="text-sm text-gray-500">
                        {artwork.year}, {artwork.medium}
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

