import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Model() {
  // Sample model categories
  const categories = [
    { id: "editorial", name: "Editorial" },
    { id: "commercial", name: "Commercial" },
    { id: "runway", name: "Runway" },
    { id: "portrait", name: "Portrait" },
  ]

  // Sample modeling work
  const modelingWork = {
    editorial: [
      { id: 1, title: "Vogue Italia", year: "2023", photographer: "Photographer Name" },
      { id: 2, title: "Elle Magazine", year: "2022", photographer: "Photographer Name" },
      { id: 3, title: "Harper's Bazaar", year: "2022", photographer: "Photographer Name" },
      { id: 4, title: "W Magazine", year: "2021", photographer: "Photographer Name" },
    ],
    commercial: [
      { id: 1, title: "Brand Campaign", year: "2023", photographer: "Photographer Name" },
      { id: 2, title: "Luxury Brand", year: "2022", photographer: "Photographer Name" },
      { id: 3, title: "Fashion Label", year: "2021", photographer: "Photographer Name" },
    ],
    runway: [
      { id: 1, title: "Paris Fashion Week", year: "2023", designer: "Designer Name" },
      { id: 2, title: "Milan Fashion Week", year: "2022", designer: "Designer Name" },
      { id: 3, title: "New York Fashion Week", year: "2022", designer: "Designer Name" },
    ],
    portrait: [
      { id: 1, title: "Portrait Series", year: "2023", photographer: "Photographer Name" },
      { id: 2, title: "Black & White Study", year: "2022", photographer: "Photographer Name" },
      { id: 3, title: "Artistic Portraits", year: "2021", photographer: "Photographer Name" },
    ],
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter mb-8">Model for Art</h1>
        
        <div className="space-y-8">
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl font-medium mb-6">
              Interested in modeling for Jon Caraveo, an artist specializing in nude abstract figurative pieces? This unique experience can foster confidence and self-awareness, as you become a part of the creative process.
            </p>

            <div className="space-y-4">
              <p>
                By posing as a live model, you will tap into the liberating spirit of artistic expression. In a supportive and respectful environment, you will have the chance to let go of inhibitions and explore your own unique presence. The experience can help you develop a deeper understanding of yourself, your body, and its relationship to the world around you. As Jon Caraveo captures the subtleties of human form on canvas, you will become an integral part of a creative process that celebrates individuality and freedom.
              </p>

              <p>
                Models will receive fair compensation for each session, and Jon Caraveo will work with them to ensure their comfort and boundaries are respected throughout the experience. Please note that, for models under 18 years old, a parent or guardian's signature on our model agreement form is required. This ensures that both parties are aware of and comfortable with the arrangement.
              </p>

              <p>
                If interested in posing as a live model, please contact Jon Caraveo to schedule an appointment and discuss further details.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Jon to Model
              </Button>
            </Link>
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Important Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Fair compensation provided for each session</li>
              <li>Supportive and respectful environment</li>
              <li>Parent/guardian consent required for models under 18</li>
              <li>Model agreement form required</li>
              <li>Comfort and boundaries respected</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

