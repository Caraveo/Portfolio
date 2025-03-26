import { Card } from "@/components/ui/card"

export default function Taboo() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="p-8 bg-white/5 backdrop-blur-sm">
        <h1 className="text-3xl font-bold tracking-tighter mb-6 text-center">
          You're Invited to "Taboo" - An Art Exhibition by Jon Caraveo
        </h1>

        <div className="space-y-6 text-gray-500">
          <p className="leading-relaxed">
            We are honored to invite you to "Taboo," an exclusive art exhibition showcasing the powerful paintings of Jon Caraveo. This exhibit presents a deeply evocative exploration of the male youth form, where each piece conveys raw emotion and movement through striking silhouettes. Caraveo's work transcends the ordinary, engaging with themes of self-expression, vulnerability, and the human condition, set against profound, minimalist backgrounds that evoke a sense of introspection and narrative depth.
          </p>

          <p className="leading-relaxed">
            The exhibition will be held on February 14, 2026, a significant date coinciding with both the artist's birthday and Valentine's Day—a celebration of love, life, and the transformative power of art. This event is open to the public but will be an intimate affair, with only 24 shared table seats available to ensure a personal and immersive experience with the work and its creator. Due to limited seating, we encourage you to RSVP to secure your place.
          </p>

          <p className="leading-relaxed">
            Attendees are kindly asked to wear their Sunday best, honoring the cultural and artistic significance of this gathering. In celebration of the event, we will provide a selection of delicious cultural dishes, including green chili, red tamales, and Mexican Horchata, all offered at no cost to our guests.
          </p>

          <p className="text-center italic mt-8">
            Join us for an evening that promises to be more than just an exhibition, but a journey into the heart of art, culture, and community.
          </p>
        </div>
      </Card>
    </div>
  )
} 