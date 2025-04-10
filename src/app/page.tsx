import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Compass, Globe, Mail, MapPin, TreePalmIcon as Palm, Phone, Ship, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky   top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Palm className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Madagascar Voyages</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Accueil
            </Link>
            <Link href="#destinations" className="text-sm font-medium transition-colors hover:text-primary">
              Destinations
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              À Propos
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:flex">Réserver Maintenant</Button>
          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[250px]">
              <SheetHeader>
                <SheetTitle className="text-left text-lg font-bold">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 px-4 flex flex-col gap-4">
                <SheetClose asChild>
                  <Link href="/" className="text-sm font-medium hover:text-primary">Accueil</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#destinations" className="text-sm font-medium hover:text-primary">Destinations</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#services" className="text-sm font-medium hover:text-primary">Services</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#about" className="text-sm font-medium hover:text-primary">À Propos</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="mt-4 w-full">Réserver Maintenant</Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 ">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Madagascar landscape"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Découvrez la Magie de Madagascar
              </h1>
              <p className="mt-6 text-lg leading-8">
                Explorez les merveilles naturelles, la faune unique et la riche culture de l'île de Madagascar avec
                notre agence de voyage spécialisée.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg">Nos Circuits</Button>
                <Button variant="outline" size="lg" className="bg-white/10 text-white">
                  En Savoir Plus
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section id="destinations" className="py-16 bg-muted/50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Destinations Populaires</h2>
              <p className="text-muted-foreground max-w-2xl">
                Découvrez nos destinations les plus prisées à Madagascar, chacune offrant une expérience unique et
                inoubliable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{destination.name}</CardTitle>
                    <CardDescription>{destination.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Découvrir
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nos Services</h2>
              <p className="text-muted-foreground max-w-2xl">
                Nous offrons une gamme complète de services pour rendre votre voyage à Madagascar inoubliable.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 bg-muted/50">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">À Propos de Madagascar Voyages</h2>
                <p className="text-muted-foreground mb-6">
                  Fondée en 2010, Madagascar Voyages est une agence de tourisme spécialisée dans l'organisation de
                  voyages sur mesure à Madagascar. Notre équipe passionnée connaît chaque recoin de l'île et s'engage à
                  vous offrir une expérience authentique et inoubliable.
                </p>
                <p className="text-muted-foreground mb-6">
                  Nous travaillons en étroite collaboration avec les communautés locales pour promouvoir un tourisme
                  responsable et durable, contribuant ainsi à la préservation de l'environnement unique de Madagascar et
                  au développement économique des populations locales.
                </p>
                <Button>Notre Histoire</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=800&width=1200" alt="Notre équipe" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ce Que Disent Nos Clients</h2>
              <p className="text-muted-foreground max-w-2xl">
                Découvrez les expériences de nos clients qui ont exploré Madagascar avec nous.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.location}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">{testimonial.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Prêt à Découvrir Madagascar?</h2>
              <p className="max-w-2xl mb-8">
                Contactez-nous dès aujourd'hui pour planifier votre voyage sur mesure et vivre une expérience
                inoubliable sur l'île rouge.
              </p>
              <Button size="lg" variant="secondary">
                Demander un Devis
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Contactez-Nous</h2>
                <p className="text-muted-foreground mb-8">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions et vous aider à planifier
                  votre voyage à Madagascar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Adresse</h3>
                      <p className="text-muted-foreground">123 Avenue de l'Indépendance, Antananarivo, Madagascar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">contact@madagascar-voyages.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Téléphone</h3>
                      <p className="text-muted-foreground">+261 20 12 345 67</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Votre email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Votre message"
                    />
                  </div>
                  <Button className="w-full">Envoyer</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palm className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Madagascar Voyages</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Votre partenaire de confiance pour découvrir les merveilles de Madagascar.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="#destinations" className="text-muted-foreground hover:text-primary">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary">
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Destinations</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Antananarivo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Nosy Be
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Parc National d'Andasibe
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Allée des Baobabs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Île Sainte-Marie
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suivez-Nous</h3>
              <div className="flex space-x-4">
                <Link href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Madagascar Voyages. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const destinations = [
  {
    name: "Nosy Be",
    description: "L'île aux parfums, connue pour ses plages paradisiaques et ses eaux cristallines.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Parc National d'Andasibe",
    description: "Découvrez la faune unique de Madagascar, notamment les célèbres lémuriens.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Allée des Baobabs",
    description: "Un paysage emblématique avec des baobabs majestueux, parfait pour admirer le coucher du soleil.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Île Sainte-Marie",
    description: "Un paradis tropical avec des plages de sable blanc et une histoire fascinante de pirates.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Parc National de l'Isalo",
    description: "Des formations rocheuses spectaculaires, des canyons profonds et des piscines naturelles.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Antananarivo",
    description: "La capitale animée de Madagascar, riche en histoire et en culture.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const services = [
  {
    name: "Circuits Personnalisés",
    description: "Des itinéraires sur mesure adaptés à vos intérêts, votre budget et votre temps disponible.",
    icon: <Compass className="h-6 w-6 text-primary" />,
  },
  {
    name: "Excursions Guidées",
    description: "Des guides locaux expérimentés pour vous faire découvrir les trésors cachés de Madagascar.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    name: "Croisières",
    description: "Explorez les côtes et les îles de Madagascar à bord de bateaux confortables.",
    icon: <Ship className="h-6 w-6 text-primary" />,
  },
  {
    name: "Écotourisme",
    description: "Des expériences respectueuses de l'environnement pour découvrir la biodiversité unique de l'île.",
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
]

const testimonials = [
  {
    name: "Sophie Martin",
    location: "France",
    comment:
      "Un voyage inoubliable! L'équipe de Madagascar Voyages a créé un itinéraire parfait qui nous a permis de découvrir la diversité incroyable de ce pays. Les guides étaient exceptionnels.",
  },
  {
    name: "John Smith",
    location: "États-Unis",
    comment:
      "Notre safari à Madagascar était au-delà de nos attentes. Voir les lémuriens dans leur habitat naturel était une expérience magique. Merci pour cette organisation impeccable!",
  },
  {
    name: "Maria Garcia",
    location: "Espagne",
    comment:
      "Des plages paradisiaques, une faune unique et des paysages à couper le souffle. Madagascar est une destination extraordinaire et l'équipe de Madagascar Voyages a rendu notre séjour parfait.",
  },
]

