import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// This would typically come from a database
const artworks = {
  Paintings: [
    { 
      id: 1, 
      title: "Orange Bottom", 
      year: "2023", 
      medium: "Oil on Canvas",
      image: "/art/Paintings/1275.JPG",
      description: "A minimal exploration of form on black canvas.",
      dimensions: "18\" x 24\"",
      materials: "Oil Paint, Black Canvas",
      status: "Work Destroyed"
    },
    { 
      id: 2, 
      title: "Tonechrome", 
      year: "2023", 
      medium: "Oil on Canvas",
      image: "/art/Paintings/1276.JPG",
      description: "A minimal exploration of form on black canvas.",
      dimensions: "18\" x 24\"",
      materials: "Oil Paint, Black Canvas",
      status: "Work Destroyed"
    },
    { 
      id: 3, 
      title: "Purpose", 
      year: "2023", 
      medium: "Oil on Canvas",
      image: "/art/Paintings/1272.JPG",
      description: "A minimal exploration of form on black canvas.",
      dimensions: "18\" x 24\"",
      materials: "Oil Paint, Black Canvas",
      status: "Work Destroyed"
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
    }
  ],
}

export default async function ArtPiece({ params }: { params: { category: string; id: string } }) {
  // Await the params to fix the Next.js warning
  const category = await Promise.resolve(params.category) as keyof typeof artworks
  const id = await Promise.resolve(parseInt(params.id))
  
  const artwork = artworks[category]?.find(art => art.id === id)
  
  if (!artwork) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative w-full">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter mb-2">{artwork.title}</h1>
            <p className="text-gray-500">{artwork.year}</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg">{artwork.description}</p>
            
            <div className="grid gap-4">
              <div>
                <h3 className="font-medium">Medium</h3>
                <p className="text-gray-500">{artwork.medium}</p>
              </div>
              
              <div>
                <h3 className="font-medium">Dimensions</h3>
                <p className="text-gray-500">{artwork.dimensions}</p>
              </div>
              
              <div>
                <h3 className="font-medium">Materials</h3>
                <p className="text-gray-500">{artwork.materials}</p>
              </div>
              
              <div>
                <h3 className="font-medium">Status</h3>
                <p className="text-gray-500">{artwork.status}</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Link href="/art">
              <Button variant="outline">Back to Art</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 