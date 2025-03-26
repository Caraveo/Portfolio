import { Card } from "@/components/ui/card"

export default function CV() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="p-8 bg-white/5 backdrop-blur-sm">
        <h1 className="text-3xl font-bold tracking-tighter mb-4">
          Jon Caraveo · Artist
        </h1>

        <p className="text-lg text-gray-500 mb-8">
          Art. Art has been a staple in my journey, allowing me to express the complexities of human identity through bold, evocative portrayals of male youth figures.
        </p>

        <div className="h-px bg-white/20 my-8" />

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">PROFILE</h2>
          <p className="text-gray-500 leading-relaxed">
            Results-oriented platform professional with 20+ years of experience in privately held enterprises. Proven track record in complex and smart work-intensive industries, delivering value, innovation in Finance, Business Strategy, and Corporate Planning.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">EXPERIENCE</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">
              Founder, Ziawe.com; Artesia, New Mexico — 2020-Present
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Founded a Research and Development company that specializes in Augmented Reality hardware.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">
              Caraveo Enterprises; Artesia, New Mexico - 2000-2010
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Implemented point of sale system, menu system, and social strategy, assisted the efficiency of business operations, and increased overall business finances, products, and processes.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">EDUCATION</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">
              Harvard X PredictionX: Omens, Oracles, and Prophecies - 2022
            </h3>
            <p className="text-gray-500 leading-relaxed">
              A course of study offered by HarvardX, an online learning initiative of Harvard University.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">
              Full Sail University: Associate of Science in Mobile Development - 2020
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Completed the requirements to be awarded the associate degree at Full Sail University.
            </p>
          </div>
        </section>
      </Card>
    </div>
  )
} 