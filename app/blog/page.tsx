"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Ship, Car, Calendar } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Boat Detailing in Petoskey",
    description: "Discover the essential steps for maintaining your vessel's pristine condition in the Great Lakes region.",
    image: "/images/hero-yacht-porsche.png",
    category: "Marine Care",
    date: "March 15, 2024",
    icon: Ship,
  },
  {
    id: 2,
    title: "Luxury Car Detailing Guide",
    description: "Learn the secrets of professional car detailing that keeps your luxury vehicle looking showroom-ready.",
    image: "/images/hero-bronco-dock.png",
    category: "Auto Care",
    date: "March 10, 2024",
    icon: Car,
  },
  {
    id: 3,
    title: "Winter Storage Tips",
    description: "Essential preparation steps for storing your boat or car during Michigan's harsh winter months.",
    image: "/images/hero-bronco-dock.png",
    category: "Seasonal Care",
    date: "March 5, 2024",
    icon: Ship,
  },
  {
    id: 4,
    title: "Ceramic Coating Benefits",
    description: "Why ceramic coating is becoming the gold standard in vehicle protection and maintenance.",
    image: "/images/hero-yacht-porsche.png",
    category: "Auto Care",
    date: "February 28, 2024",
    icon: Car,
  },
]

export default function BlogPage() {
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

      {/* Blog Header */}
      <div className="relative pt-32 pb-16 bg-vintage-cream/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-vintage-gold/30 text-vintage-navy border-vintage-gold/50 font-serif drop-shadow-sm">
              Our Blog
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-vintage-navy drop-shadow-sm">
              Admiral Detailing Insights
            </h1>
            <p className="text-lg sm:text-xl text-vintage-navy/80 max-w-2xl mx-auto leading-relaxed font-serif drop-shadow-sm">
              Expert tips, guides, and insights for maintaining your luxury vehicles and vessels in pristine condition.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="relative py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-vintage-cream/90 border-beige-300 shadow-lg drop-shadow-sm overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-vintage-gold/30 text-vintage-navy border-vintage-gold/50 font-serif">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-vintage-navy/60 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-vintage-navy mb-4 group-hover:text-vintage-gold transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-vintage-navy/70 mb-6 font-serif text-base sm:text-lg">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-vintage-gold hover:text-vintage-navy font-serif font-semibold transition-colors duration-300"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 