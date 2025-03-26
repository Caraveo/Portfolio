import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// This would typically come from a database or CMS
const works = [
  { 
    id: 1, 
    title: "Ganyemede", 
    year: "2023", 
    medium: "Mixed Media on Cotton - Work Destroyed",
    image: "/works/Ganyemede.jpg",
    description: "A contemporary interpretation of the mythological figure Ganymede, exploring themes of transformation and divine intervention. The work incorporates layered textures and mixed media elements to create a sense of ethereal movement.",
    dimensions: "84\" x 48\"",
    materials: "Mixed media on cotton canvas",
    status: "Work Destroyed"
  },
  { 
    id: 2, 
    title: "Eros", 
    year: "2024", 
    medium: "Oil on Linen - Work Destroyed",
    image: "/works/Eros.jpg",
    description: "An exploration of love and desire through the lens of classical mythology. The piece uses oil paint to create rich, layered textures that evoke both the physical and metaphysical aspects of Eros.",
    dimensions: "84\" x 48\"",
    materials: "Oil paint on linen canvas",
    status: "Work Destroyed"
  },
]

export default function WorkPage({ params }: { params: { id: string } }) {
  const work = works.find(w => w.id === parseInt(params.id))
  
  if (!work) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative w-full">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter mb-2">{work.title}</h1>
            <p className="text-gray-500">{work.year}</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg">{work.description}</p>
            
            <div className="grid gap-4">
              <div>
                <h3 className="font-medium">Medium</h3>
                <p className="text-gray-500">{work.medium}</p>
              </div>
              
              <div>
                <h3 className="font-medium">Dimensions</h3>
                <p className="text-gray-500">{work.dimensions}</p>
              </div>
              
              <div>
                <h3 className="font-medium">Materials</h3>
                <p className="text-gray-500">{work.materials}</p>
              </div>
              
              <div>
                <h3 className="font-medium">Status</h3>
                <p className="text-gray-500">{work.status}</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Link href="/works">
              <Button variant="outline">Back to Works</Button>
            </Link>
          </div>
          
          {work.id === 1 && (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about">
                <AccordionTrigger className="text-lg font-semibold">About the Artwork</AccordionTrigger>
                <AccordionContent className="space-y-4 text-gray-600">
                  <p>
                    Ganymede is an oil painting by Jon Caraveo, an American artist who specializes in figurative and abstract. The painting depicts Ganymede, a young prince of Troy who was abducted by Zeus.
                  </p>
                  <p>
                    In the story of Ganymede, Zeus, the king of the gods abducts Ganymede in the form of an eagle. Ganymede became Zeus's lover and cup-bearer, serving him nectar and ambrosia on Mount Olympus. He was also honored as a constellation, Aquarius, the water-bearer, along with his cup and the eagle.
                  </p>
                  <p>
                    Ganymede was a symbol of divine homosexuality in Greek mythology, as his relationship with Zeus reflected the practice of paiderastia, a form of mentorship and love between an older man and a younger boy. This practice was common and socially accepted in some ancient Greek states, such as Athens and Sparta. It was believed that paiderastia fostered wisdom, courage, and virtue in both partners.
                  </p>
                  <p>
                    In astrology, Aquarius is the eleventh sign of the Zeus-zodiac, associated with the element of air and the quality of fixed. Aquarians are said to be independent, visionary, humanitarian, and progressive. They are often drawn to social causes and innovative ideas. They value freedom, originality, and rationality. Aquarius is ruled by Saturn (traditional) and Uranus (modern), two planets that represent structure and change respectively. Aquarius season is from January 20 to February 18.
                  </p>
                  <p>
                    Aquarius, Which is also the born Astrological sign, of the Artist.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          {work.id === 2 && (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about">
                <AccordionTrigger className="text-lg font-semibold">About the Artwork</AccordionTrigger>
                <AccordionContent className="space-y-4 text-gray-600">
                  <p>
                    Eros, a compelling oil painting created by contemporary artist Jon Caraveo, explores the concept of Eros through an emotive portrayal of the winged god of passion and love. Using walnut oil and five selected pigments on Primed Canvas, Caraveo skillfully captures the ethereal nature of this god through the figure of a young boy, highlighted by his strong yet sensual pose. The figure's bright orange skin contrasts sharply against the dark background, a symbolic representation of emotional intensity, while the white wings emphasize the divine and angelic aspects of Eros. The wings, elegantly sweeping across the canvas, evoke a sense of freedom, flight, and the boundless nature of love and desire.
                  </p>
                  <p>
                    This piece reflects Caraveo's personal connection to love, passion, and the intersection of art and emotional truth. Born on Valentine's Day, February 14, 1987, Caraveo's artistic journey is inherently linked to themes of love and desire, making his interpretation of Eros, or Cupid as known in Roman mythology, deeply personal. As an artist, Caraveo draws inspiration from classical mythological figures, blending historical references with his own exploration of the power of human emotion. Through the figure of Eros, Caraveo channels the ancient spirit of love and the complexities of passion, infusing them with his own modern perspective.
                  </p>
                  <p>
                    In many cultures, Eros or Cupid is seen as a playful yet powerful force, guiding lovers and instigating both heartache and happiness. Caraveo's Eros, however, reflects not only this but the duality inherent in love: the tension between innocence and temptation, desire and restraint. The god's youthful form, juxtaposed with the strength of his wings, offers an insight into the complexity of these emotions. Caraveo does not simply reimagine Eros as a classical deity but redefines him, pushing beyond the constraints of history to manifest a god who is both ancient and modern in his expression.
                  </p>
                  <p>
                    Caraveo's artistic process, from selecting the materials to blending pigment with walnut oil, speaks to his commitment to crafting a narrative that is deeply rooted in his identity. This fusion of myth and modernity offers a bridge between past and present, suggesting that the power of love, in all its forms, remains eternal. Eros is a meditation on the divine force that drives us to connect, to create, and to feel—a theme that transcends the boundaries of time and continues to inspire contemporary audiences, much like the legends of Eros and Cupid have for centuries.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </div>
    </div>
  )
} 