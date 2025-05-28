"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  Ship,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Crown,
  Sparkles,
  Shield,
  Clock,
  Award,
  Play,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function AdmiralDetailing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-vintage-cream relative">
      {/* Nautical Wallpaper Background */}
      <div className="fixed inset-0 opacity-50 pointer-events-none">
        <Image
          src="/images/nautical-pattern-border.png"
          alt="Nautical wallpaper pattern"
          fill
          className="object-cover contrast-125 brightness-110"
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-vintage-gold/20 relative">
        {/* Navigation Background Pattern */}
        <div className="absolute inset-0">
          <Image
            src="/images/nav-pattern.png"
            alt="Nautical navigation pattern"
            fill
            className="object-cover opacity-40 contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-vintage-cream/60"></div>
        </div>

        <div className="container mx-auto px-4 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 drop-shadow-sm">
              <Image
                src="/images/admiral-logo.png"
                alt="Admiral Mobile Detailing Logo"
                width={32}
                height={32}
                className="drop-shadow-sm sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-2xl font-serif font-bold text-vintage-navy drop-shadow-sm">
                Admiral Mobile Detailing
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-vintage-navy hover:text-vintage-gold transition-colors font-serif drop-shadow-sm"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-vintage-navy hover:text-vintage-gold transition-colors font-serif drop-shadow-sm"
              >
                Services
              </Link>
              <Link
                href="#gallery"
                className="text-vintage-navy hover:text-vintage-gold transition-colors font-serif drop-shadow-sm"
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                className="text-vintage-navy hover:text-vintage-gold transition-colors font-serif drop-shadow-sm"
              >
                Blog
              </Link>
              <Link
                href="#booking"
                className="text-vintage-navy hover:text-vintage-gold transition-colors font-serif drop-shadow-sm"
              >
                Booking
              </Link>
              <Link href="#booking">
                <Button className="bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-serif font-semibold border-0 shadow-lg drop-shadow-sm">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-vintage-navy hover:text-vintage-gold transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-vintage-cream/95 backdrop-blur-md border-t border-vintage-gold/20 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="#about"
                  className="block text-vintage-navy hover:text-vintage-gold transition-colors font-serif text-lg py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#services"
                  className="block text-vintage-navy hover:text-vintage-gold transition-colors font-serif text-lg py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#gallery"
                  className="block text-vintage-navy hover:text-vintage-gold transition-colors font-serif text-lg py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/blog"
                  className="block text-vintage-navy hover:text-vintage-gold transition-colors font-serif text-lg py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="#booking"
                  className="block text-vintage-navy hover:text-vintage-gold transition-colors font-serif text-lg py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Booking
                </Link>
                <Link href="#booking" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-serif font-semibold border-0 shadow-lg drop-shadow-sm mt-4 py-3">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Content Container */}
        <div className="relative z-20 text-center text-vintage-navy max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="p-6 sm:p-8 md:p-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-8 text-vintage-navy">
              Admiral Mobile Detailing
            </h1>
            <Badge
              className="mb-4 sm:mb-6 bg-vintage-cream/98 text-vintage-navy border-vintage-gold/60 font-serif shadow-2xl drop-shadow-lg text-sm sm:text-base"
              style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.8)",
                boxShadow: "0 8px 32px rgba(212, 175, 55, 0.3)",
              }}
            >
              Harbor Springs, Michigan
            </Badge>

            {/* Video Player */}
            <div className="mb-6 sm:mb-8">
              <div className="relative aspect-[9/16] max-w-xs sm:max-w-sm mx-auto rounded-lg overflow-hidden md:aspect-[16/9] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] bg-[#fdf6ed] p-4 shadow-2xl">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  playsInline
                  poster="/images/hero-bronco-dock.png"
                >
                  <source src="/videos/admiral-detail.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:gap-6 justify-center">
              <Link href="#booking" className="relative group w-full max-w-2xl">
                <div className="absolute -inset-2 rounded-xl border-4 border-vintage-gold/60 animate-pulse"></div>
                <Button
                  size="lg"
                  className="bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-serif font-bold px-16 sm:px-20 py-6 sm:py-8 text-xl sm:text-2xl shadow-2xl border-4 border-vintage-navy/40 transition-all duration-300 drop-shadow-xl relative overflow-hidden w-full min-h-[64px] transform hover:scale-105 animate-bounce-subtle"
                  style={{
                    boxShadow: "0 16px 48px rgba(212, 175, 55, 0.5), inset 0 2px 4px rgba(255,255,255,0.4)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    animation: "bounce 2s infinite",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-vintage-gold/30 to-vintage-gold/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Book Your Service Today!</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-vintage-cream/60 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4 bg-beige-200/90 text-vintage-navy font-serif drop-shadow-sm">
                About Admiral Detailing
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-vintage-navy mb-4 sm:mb-6 drop-shadow-sm">
                Crafted for Excellence
              </h2>
              <p className="text-lg sm:text-xl text-vintage-navy/80 max-w-3xl mx-auto leading-relaxed font-serif drop-shadow-sm">
                Nestled in the prestigious Harbor Springs, we provide white-glove detailing services to discerning
                clients who demand nothing but perfection for their prized possessions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4 bg-vintage-cream/80 p-4 rounded-lg shadow-lg drop-shadow-sm">
                  <div className="bg-vintage-gold p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-vintage-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-vintage-navy mb-2">
                      Harbor Springs Heritage
                    </h3>
                    <p className="text-vintage-navy/70 font-serif text-sm sm:text-base">
                      Located in Michigan's premier resort destination, we understand the refined tastes of seasonal
                      residents and yacht club members.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-vintage-cream/80 p-4 rounded-lg shadow-lg drop-shadow-sm">
                  <div className="bg-vintage-gold p-3 rounded-full flex-shrink-0">
                    <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-vintage-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-vintage-navy mb-2">
                      White-Glove Service
                    </h3>
                    <p className="text-vintage-navy/70 font-serif text-sm sm:text-base">
                      Every detail is meticulously attended to with the highest quality products and techniques,
                      ensuring your investment receives the care it deserves.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-vintage-cream/80 p-4 rounded-lg shadow-lg drop-shadow-sm">
                  <div className="bg-vintage-gold p-3 rounded-full flex-shrink-0">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-vintage-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-vintage-navy mb-2">
                      Trusted by Collectors
                    </h3>
                    <p className="text-vintage-navy/70 font-serif text-sm sm:text-base">
                      From rare Porsches to luxury yachts, our clientele trusts us with their most valuable automotive
                      and marine investments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative order-first md:order-last">
                <div className="bg-vintage-cream/80 p-4 rounded-lg shadow-lg drop-shadow-sm">
                  <Image
                    src="/images/admiral-full-logo.png"
                    alt="Admiral Detailing complete brand logo with anchor, car, and company name"
                    width={500}
                    height={600}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-vintage-gold text-vintage-navy p-4 sm:p-6 rounded-lg shadow-lg drop-shadow-sm">
                  <div className="text-2xl sm:text-3xl font-serif font-bold">7+</div>
                  <div className="text-xs sm:text-sm font-serif">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-beige-100/40 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4 bg-vintage-gold/30 text-vintage-navy border-vintage-gold/50 font-serif drop-shadow-sm">
                Our Services
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-vintage-navy mb-4 sm:mb-6 drop-shadow-sm">
                Precision in Every Detail
              </h2>
              <p className="text-lg sm:text-xl text-vintage-navy/80 max-w-3xl mx-auto leading-relaxed font-serif drop-shadow-sm">
                Specialized services tailored for luxury automobiles and marine vessels, using only the finest products
                and techniques.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Luxury Car Detailing */}
              <Card className="bg-vintage-cream/90 border-beige-300 shadow-lg drop-shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-vintage-gold p-3 sm:p-4 rounded-full mr-4 flex-shrink-0">
                      <Car className="h-6 w-6 sm:h-8 sm:w-8 text-vintage-navy" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-vintage-navy">Car Detailing</h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6">
                    <div className="flex items-center text-vintage-navy/80">
                      <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-3 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">Paint Correction & Ceramic Coating</span>
                    </div>
                    <div className="flex items-center text-vintage-navy/80">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-3 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">Interior Leather & Fabric Protection</span>
                    </div>
                    <div className="flex items-center text-vintage-navy/80">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-3 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">Engine Bay Detailing</span>
                    </div>
                    <div className="flex items-center text-vintage-navy/80">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-3 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">Concours-Level Preparation</span>
                    </div>
                  </div>

                  <p className="text-vintage-navy/70 mb-6 font-serif text-sm sm:text-base">
                    From daily drivers to classic cars, we treat every vehicle with museum-quality care. Professional
                    detailing services for all makes and models with premium products and techniques.
                  </p>

                  <Link href="#booking">
                    <Button className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-serif font-semibold shadow-lg border-0 drop-shadow-sm min-h-[48px]">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Boat/Yacht Detailing */}
              <Card className="bg-vintage-cream/90 border-beige-300 shadow-lg drop-shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-vintage-gold p-3 sm:p-4 rounded-full mr-4 flex-shrink-0">
                      <Ship className="h-6 w-6 sm:h-8 sm:w-8 text-vintage-navy" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-vintage-navy">
                      Yacht & Boat Detailing
                    </h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6">
                    <div className="flex items-center text-vintage-navy/80">
                      <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-3 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">Hull Polishing & Waxing</span>
                    </div>
                    <div className="flex items-center text-vintage-navy/80">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-3 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">Teak Deck Restoration</span>
                    </div>
                    <div className="flex items-center text-vintage-navy/80">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-3 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">Interior Cabin Detailing</span>
                    </div>
                    <div className="flex items-center text-vintage-navy/80">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-3 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">Winterization Prep</span>
                    </div>
                  </div>

                  <p className="text-vintage-navy/70 mb-6 font-serif text-sm sm:text-base">
                    Comprehensive marine detailing services for sailboats, motor yachts, and luxury vessels. We
                    understand the unique challenges of the Great Lakes environment.
                  </p>

                  <Link href="#booking">
                    <Button className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-serif font-semibold shadow-lg border-0 drop-shadow-sm min-h-[48px]">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-vintage-cream/60 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4 bg-beige-200/90 text-vintage-navy font-serif drop-shadow-sm">Our Work</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-vintage-navy mb-4 sm:mb-6 drop-shadow-sm">
                Before & After Gallery
              </h2>
              <p className="text-lg sm:text-xl text-vintage-navy/80 max-w-3xl mx-auto leading-relaxed font-serif drop-shadow-sm">
                Witness the transformation of luxury vehicles and vessels through our meticulous detailing process.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card
                  key={item}
                  className="overflow-hidden group cursor-pointer bg-vintage-cream/90 border-beige-300 shadow-lg drop-shadow-sm"
                >
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=400`}
                      alt={`Gallery image ${item}`}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vintage-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 text-white">
                        <Badge className="bg-vintage-gold text-vintage-navy mb-2 font-serif text-xs sm:text-sm">
                          {item % 2 === 0 ? "Yacht Detail" : "Car Detail"}
                        </Badge>
                        <p className="text-xs sm:text-sm font-serif">Professional detailing transformation</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-vintage-navy text-vintage-navy hover:bg-vintage-navy/10 font-serif shadow-lg drop-shadow-sm min-h-[48px]"
              >
                View Full Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-12 sm:py-16 md:py-20 bg-beige-100/40 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Card className="bg-vintage-cream/90 border-beige-300 shadow-lg drop-shadow-sm max-w-4xl mx-auto">
                <CardContent className="p-6 sm:p-8">
                  <Badge className="mb-4 bg-vintage-gold/30 text-vintage-navy border-vintage-gold/50 font-serif drop-shadow-sm">
                    Book Your Service
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-vintage-navy mb-4 sm:mb-6 drop-shadow-sm">
                    Schedule Your Appointment
                  </h2>
                  <p className="text-lg sm:text-xl text-vintage-navy/80 leading-relaxed font-serif drop-shadow-sm">
                    Ready to experience the Admiral Detailing difference? Contact us to schedule your premium detailing
                    service.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <Card className="bg-vintage-cream/90 border-beige-300 shadow-lg drop-shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-vintage-navy mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center text-vintage-navy/80">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-4 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">(231) 555-0123</span>
                    </div>
                    <div className="flex items-center text-vintage-navy/80">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-4 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">info@admiraldetailing.com</span>
                    </div>
                    <div className="flex items-center text-vintage-navy/80">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-vintage-gold mr-4 flex-shrink-0" />
                      <span className="font-serif text-sm sm:text-base">Harbor Springs, MI 49740</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-serif font-semibold text-vintage-navy mb-4">Service Hours</h4>
                    <div className="space-y-2 text-vintage-navy/80 font-serif text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>By Appointment</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-vintage-cream/90 border-beige-300 shadow-lg drop-shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-vintage-navy mb-6">Request Quote</h3>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="bg-vintage-cream border-beige-300 text-vintage-navy placeholder:text-vintage-navy/50 font-serif shadow-lg min-h-[48px]"
                      />
                      <Input
                        placeholder="Last Name"
                        className="bg-vintage-cream border-beige-300 text-vintage-navy placeholder:text-vintage-navy/50 font-serif shadow-lg min-h-[48px]"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="bg-vintage-cream border-beige-300 text-vintage-navy placeholder:text-vintage-navy/50 font-serif shadow-lg min-h-[48px]"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-vintage-cream border-beige-300 text-vintage-navy placeholder:text-vintage-navy/50 font-serif shadow-lg min-h-[48px]"
                    />
                    <select className="w-full p-3 bg-vintage-cream border border-beige-300 rounded-md text-vintage-navy font-serif shadow-lg min-h-[48px]">
                      <option value="">Select Service Type</option>
                      <option value="car">Car Detailing</option>
                      <option value="boat">Yacht/Boat Detailing</option>
                      <option value="both">Both Services</option>
                    </select>
                    <Textarea
                      placeholder="Tell us about your vehicle/vessel and desired services..."
                      rows={4}
                      className="bg-vintage-cream border-beige-300 text-vintage-navy placeholder:text-vintage-navy/50 font-serif shadow-lg"
                    />
                    <Button className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-serif font-semibold shadow-lg border-0 drop-shadow-sm min-h-[48px]">
                      Request Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-vintage-cream/60 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-vintage-gold/30 text-vintage-navy border-vintage-gold/50 font-serif drop-shadow-sm">
              Latest Updates
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-vintage-navy drop-shadow-sm">
              See What We've Been Working On
            </h2>
            <p className="text-lg sm:text-xl text-vintage-navy/80 max-w-2xl mx-auto mb-8 leading-relaxed font-serif drop-shadow-sm">
              Explore our latest projects, detailing tips, and maintenance guides for your luxury vehicles and vessels.
            </p>
            <Link href="/blog" className="inline-block">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-xl border-4 border-vintage-gold/60 animate-pulse"></div>
                <Button
                  size="lg"
                  className="bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-serif font-bold px-12 sm:px-16 py-6 sm:py-8 text-xl sm:text-2xl shadow-2xl border-4 border-vintage-navy/40 transition-all duration-300 drop-shadow-xl relative overflow-hidden min-h-[64px] transform hover:scale-105"
                  style={{
                    boxShadow: "0 16px 48px rgba(212, 175, 55, 0.5), inset 0 2px 4px rgba(255,255,255,0.4)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-vintage-gold/30 to-vintage-gold/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Read Our Blog</span>
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vintage-navy/90 py-8 sm:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="sm:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Image
                    src="/images/admiral-logo.png"
                    alt="Admiral Mobile Detailing Logo"
                    width={24}
                    height={24}
                    className="sm:w-8 sm:h-8"
                  />
                  <span className="text-lg sm:text-2xl font-serif font-bold text-vintage-cream">
                    Admiral Mobile Detailing
                  </span>
                </div>
                <p className="text-vintage-cream/80 mb-6 max-w-md font-serif text-sm sm:text-base">
                  Premium detailing services for luxury automobiles and yachts in Harbor Springs, Michigan. Where
                  craftsmanship meets perfection.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-vintage-cream/70 hover:text-vintage-gold transition-colors">
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                  <Link href="#" className="text-vintage-cream/70 hover:text-vintage-gold transition-colors">
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-vintage-cream font-serif font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-vintage-cream/80 font-serif text-sm sm:text-base">
                  <li>
                    <Link href="#" className="hover:text-vintage-gold transition-colors">
                      Car Detailing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-vintage-gold transition-colors">
                      Yacht Detailing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-vintage-gold transition-colors">
                      Paint Correction
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-vintage-gold transition-colors">
                      Ceramic Coating
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-vintage-cream font-serif font-semibold mb-4">Service Area</h4>
                <ul className="space-y-2 text-vintage-cream/80 font-serif text-sm sm:text-base">
                  <li>Harbor Springs</li>
                  <li>Petoskey</li>
                  <li>Charlevoix</li>
                  <li>Boyne City</li>
                  <li>Mackinaw City</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-vintage-cream/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-vintage-cream/70 font-serif text-sm sm:text-base">
              <p>&copy; {new Date().getFullYear()} Admiral Detailing. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
