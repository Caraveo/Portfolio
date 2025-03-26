import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src="/images/Jon.jpg"
              alt="Jon Caraveo"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg">
              Jon Caraveo is a contemporary artist based in America.
            </p>
            <p className="text-lg">
              With a background in fine arts and design, Jon Caraveo has developed a distinctive style characterized by bold colors, dynamic compositions, and a deep exploration of human form and emotion. His work spans various mediums, from traditional painting to digital art, always pushing the boundaries of artistic expression.
            </p>
            <p className="text-lg">
              Jon Caraveo holds an Associate of Science from Full Sail University.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

