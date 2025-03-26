import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Commission() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tighter mb-4">Commission</h1>
      <p className="text-gray-500 mb-8 max-w-3xl">
        I am available for select commissions. Please review the information below and get in touch to discuss your
        project.
      </p>

      <Tabs defaultValue="services">
        <TabsList className="mb-8">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="process">Process</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="services">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Paintings</CardTitle>
                <CardDescription>Custom paintings in various sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Commission a custom painting in my signature style. Available in various sizes and materials.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>Oil on canvas</li>
                  <li>Acrylic on canvas</li>
                  <li>Mixed media</li>
                  <li>Custom sizes available</li>
                </ul>
              </CardContent>
              <CardFooter>
                <p className="text-sm font-medium">Starting at $1,000</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sculptures</CardTitle>
                <CardDescription>Custom sculptural works</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Commission a custom sculpture for your space. Available in various materials and scales.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>Plaster</li>
                  <li>Wood</li>
                  <li>Marble</li>
                  <li>Site-specific installations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <p className="text-sm font-medium">Starting at $2,500</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Art</CardTitle>
                <CardDescription>Custom digital artworks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Commission a custom digital artwork. Available as digital files or limited edition prints.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>Digital illustrations</li>
                  <li>Generative art</li>
                  <li>Limited edition prints</li>
                  <li>Various sizes available</li>
                </ul>
              </CardContent>
              <CardFooter>
                <p className="text-sm font-medium">Starting at $500</p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="process">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold mb-4">Commission Process</h2>
            <ol className="space-y-6">
              <li className="grid gap-2">
                <h3 className="font-medium">1. Initial Consultation</h3>
                <p className="text-sm text-gray-500">
                  We'll discuss your vision, requirements, timeline, and budget to determine if we're a good fit for
                  collaboration.
                </p>
              </li>
              <li className="grid gap-2">
                <h3 className="font-medium">2. Proposal and Agreement</h3>
                <p className="text-sm text-gray-500">
                  I'll provide a detailed proposal including concept, materials, dimensions, timeline, and cost. Once
                  approved, we'll sign an agreement and I'll request a deposit.
                </p>
              </li>
              <li className="grid gap-2">
                <h3 className="font-medium">3. Concept Development</h3>
                <p className="text-sm text-gray-500">
                  I'll develop preliminary sketches or digital mockups for your review and feedback.
                </p>
              </li>
              <li className="grid gap-2">
                <h3 className="font-medium">4. Creation</h3>
                <p className="text-sm text-gray-500">
                  Once the concept is approved, I'll begin creating your commission. I'll provide progress updates
                  throughout the process.
                </p>
              </li>
              <li className="grid gap-2">
                <h3 className="font-medium">5. Completion and Delivery</h3>
                <p className="text-sm text-gray-500">
                  Upon completion, I'll share final images for your approval. After the final payment, the artwork will
                  be carefully packaged and shipped to your location.
                </p>
              </li>
            </ol>
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Commission Inquiry</CardTitle>
              <CardDescription>
                Fill out the form below to inquire about a commission. I'll get back to you within 2-3 business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Commission Type</Label>
                  <select
                    id="type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a type</option>
                    <option value="painting">Painting</option>
                    <option value="sculpture">Sculpture</option>
                    <option value="digital">Digital Art</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <select
                    id="budget"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a range</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your project, including any specific requirements, dimensions, timeline, etc."
                    rows={5}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Submit Inquiry</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

