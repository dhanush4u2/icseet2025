import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Globe } from "lucide-react";

const Sponsors = () => {
  const sponsors = [
    {
      name: "Anusandhan National Research Foundation (ANRF)",
      subtitle: "Department of Science and Technology, Govt. Of India, India",
      logo: "/sponsors/anrf.png",
      tier: "Principal Sponsor",
    },
    {
      name: "Raman INNOLABS",
      subtitle: "Manufacturers and Suppliers",
      description: "Quartz wares, Alumina wares, Quartz and Alumina tubes, Furnaces, Ovens, Heating Systems, Glass wares, Autoclaves, Advanced Research Materials, High Vacuum systems - Vacuum pumps and etc.",
      email: "ramaninnolabs@gmail.com",
      phone: ["8884733828", "7795989765"],
      logo: "/sponsors/raman.png",
      tier: "Major Sponsor",
    },
    {
      name: "Research Support India (RSI)",
      subtitle: "Research Equipment & Support Services",
      address: "Alliance Galleria, Magnus D-604, 200 ft Radial Road, Pallavaram, Chennai – 600043",
      logo: "/sponsors/rsi.png",
      tier: "Sponsor",
    },
    {
      name: "Elixir Technologies",
      address: "300/2 Chamundeshwari Layout, Doddabommasandra Main Road, Vidyaranyapura, Bengalore 560097",
      logo: "/sponsors/Elixir.png",
      tier: "Sponsor",
    },
  ];

  const mediaPartner = {
    name: "Lab A To Z",
    logo: "/sponsors/lab.png",
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Sponsors & Partners</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We gratefully acknowledge our sponsors who support ICSEES-2025 and share our commitment 
              to advancing sustainable energy and environmental solutions.
            </p>
          </div>

          {/* Principal Sponsor */}
          <Card className="mb-12 shadow-xl border-primary/30">
            <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
              <div className="inline-block px-4 py-1 bg-primary/20 rounded-full mb-2">
                <p className="text-sm font-semibold text-primary">Principal Sponsor</p>
              </div>
              <CardTitle className="text-2xl">{sponsors[0].name}</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">{sponsors[0].subtitle}</p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex justify-center">
                <div className="w-full max-w-2xl bg-white p-8 rounded-lg">
                  <img 
                    src={sponsors[0].logo} 
                    alt={sponsors[0].name}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Major Sponsor */}
          <Card className="mb-12 shadow-lg border-primary/20">
            <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-primary/10 pb-4">
              <div className="inline-block px-4 py-1 bg-primary/20 rounded-full mb-2">
                <p className="text-sm font-semibold text-primary">Major Sponsor</p>
              </div>
              <CardTitle className="text-2xl">{sponsors[1].name}</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">{sponsors[1].subtitle}</p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col items-center gap-6">
                <div className="w-full max-w-lg bg-white p-6 rounded-lg">
                  <img 
                    src={sponsors[1].logo} 
                    alt={sponsors[1].name}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="text-center max-w-3xl">
                  <p className="text-muted-foreground mb-4">{sponsors[1].description}</p>
                  <div className="flex flex-col items-center gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${sponsors[1].email}`} className="text-primary hover:underline">
                        {sponsors[1].email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">
                        {sponsors[1].phone?.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Other Sponsors */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Sponsors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {sponsors.slice(2).map((sponsor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl">{sponsor.name}</CardTitle>
                    {sponsor.subtitle && (
                      <p className="text-sm text-muted-foreground mt-1">{sponsor.subtitle}</p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-full max-w-sm bg-white p-4 rounded-lg">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      {sponsor.address && (
                        <p className="text-sm text-muted-foreground text-center">
                          {sponsor.address}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Media Partner */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="inline-block px-4 py-1 bg-primary/20 rounded-full mb-2">
                <p className="text-sm font-semibold text-primary">Media Partner</p>
              </div>
              <CardTitle className="text-xl">{mediaPartner.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <div className="w-full max-w-md bg-white p-6 rounded-lg">
                  <img 
                    src={mediaPartner.logo} 
                    alt={mediaPartner.name}
                    className="w-full h-auto object-contain"
                  />
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
