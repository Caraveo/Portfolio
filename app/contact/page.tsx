import { Card } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Address</h3>
              <p className="text-gray-600">
                800 S. Roselawn Ave. A104<br />
                ARTESIA, NM, 88210<br />
                USA
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Phone</h3>
              <p className="text-gray-600">+1 575 231 4271</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Email</h3>
              <a href="mailto:Caraveo@me.com" className="text-gray-600 hover:underline">
                Caraveo@me.com
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 