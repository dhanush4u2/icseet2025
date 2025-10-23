import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Star, Sparkles, Mail } from "lucide-react";

const Sponsors = () => {
  const sponsorshipTiers = [
    {
      name: "Platinum Sponsor",
      icon: Sparkles,
      amount: "₹5,00,000",
      benefits: [
        "Prime logo placement on all conference materials",
        "Dedicated exhibition booth (Premium location)",
        "5 complimentary conference registrations",
        "Speaking opportunity in plenary session",
        "Full-page advertisement in conference proceedings",
        "Recognition in all press releases",
        "Exclusive networking session with delegates",
      ],
    },
    {
      name: "Gold Sponsor",
      icon: Award,
      amount: "₹3,00,000",
      benefits: [
        "Prominent logo placement on conference materials",
        "Exhibition booth",
        "3 complimentary conference registrations",
        "Half-page advertisement in conference proceedings",
        "Recognition in conference website and banners",
        "Networking opportunities with participants",
      ],
    },
    {
      name: "Silver Sponsor",
      icon: Star,
      amount: "₹1,50,000",
      benefits: [
        "Logo placement on conference materials",
        "2 complimentary conference registrations",
        "Quarter-page advertisement in proceedings",
        "Recognition on conference website",
        "Display of promotional materials at venue",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sponsors & Partners</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ICSEET-2025 welcomes sponsors and partners who share our commitment to advancing 
              sustainable energy and environmental technologies.
            </p>
          </div>

          <Card className="mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Become a Sponsor</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Partner with ICSEET-2025 to showcase your organization's commitment to sustainability 
                and connect with leading researchers, academics, and industry professionals from around the world.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us for Sponsorship
              </Button>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Sponsorship Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {sponsorshipTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow ${
                    index === 0 ? "border-primary border-2" : ""
                  }`}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <tier.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <p className="text-3xl font-bold text-primary mt-2">{tier.amount}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Other Sponsorship Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <p className="font-semibold text-foreground">Conference Bag Sponsor</p>
                    <p className="text-sm">₹75,000 - Your logo on all conference bags</p>
                  </li>
                  <li>
                    <p className="font-semibold text-foreground">Lunch/Dinner Sponsor</p>
                    <p className="text-sm">₹1,00,000 per session</p>
                  </li>
                  <li>
                    <p className="font-semibold text-foreground">Session Sponsor</p>
                    <p className="text-sm">₹50,000 per technical session</p>
                  </li>
                  <li>
                    <p className="font-semibold text-foreground">Souvenir Sponsor</p>
                    <p className="text-sm">₹60,000 - Full-page ad in conference souvenir</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Sponsor ICSEET-2025?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access to 300+ researchers and industry professionals</li>
                  <li>• Brand visibility across international audience</li>
                  <li>• Networking with key decision makers</li>
                  <li>• Association with premier academic institution</li>
                  <li>• Showcase your products and services</li>
                  <li>• Support advancement of sustainable technologies</li>
                  <li>• Recruitment opportunities</li>
                  <li>• Media coverage and publicity</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Current Sponsors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Sponsorship opportunities are now open. Be among the first to partner with ICSEET-2025!
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border"
                    >
                      <span className="text-muted-foreground text-sm">Sponsor Logo</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
