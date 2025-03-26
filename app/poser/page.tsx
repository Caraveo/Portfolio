import { Card } from "@/components/ui/card"

export default function Poser() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="p-8 bg-white/5 backdrop-blur-sm">
        <h1 className="text-3xl font-bold tracking-tighter mb-4 text-center">
          POSER
        </h1>

        <p className="text-4xl font-bold text-center mb-8 text-primary">
          $500.00
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">About the Book</h2>
            <p className="text-gray-500 leading-relaxed">
              Art Square Issue 
              A reference title curated for private, non-commercial use, POSER presents a striking collection of over 100 cropped pictographs and images. This visual anthology explores the young male figure as an enduring muse across the art world—spanning sketches, photographs, and drawings that inspire artists in their pursuit of form, emotion, and beauty.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Features & Details</h2>
            <div className="space-y-3 text-gray-500">
              <p>Primary Category: Arts & Photography Books</p>
              <p>Additional Categories: Education</p>
              <p>Project Option: Large Format Landscape, 13×11 in, 33×28 cm</p>
              <p># of Pages: 138</p>
              <p>Publish Date: Dec 17, 2024</p>
              <p>Language: English</p>
            </div>
          </section>

          <div className="h-px bg-white/20 my-8" />

          <section className="flex justify-center">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <video 
                controls
                className="w-full"
                poster="/images/poser-thumb.jpg"
              >
                <source 
                  src="https://artist-website-joncaraveo.s3.us-west-2.amazonaws.com/poser.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        </div>
      </Card>
    </div>
  )
} 