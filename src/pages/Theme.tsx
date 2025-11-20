import { Lightbulb, Wind, Droplets, Factory, Leaf, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Theme = () => {
  const themes = [
    {
      icon: Zap,
      title: "Renewable Energy Systems",
      topics: [
        "Solar energy technologies",
        "Wind power generation",
        "Hydroelectric systems",
        "Biomass energy",
        "Geothermal energy",
      ],
    },
    {
      icon: Leaf,
      title: "Environmental Technologies",
      topics: [
        "Air pollution control",
        "Water treatment technologies",
        "Soil remediation",
        "Environmental monitoring",
        "Ecological restoration",
      ],
    },
    {
      icon: Factory,
      title: "Sustainable Manufacturing",
      topics: [
        "Green manufacturing processes",
        "Circular economy",
        "Industrial ecology",
        "Cleaner production",
        "Sustainable supply chain",
      ],
    },
    {
      icon: Droplets,
      title: "Water & Waste Management",
      topics: [
        "Wastewater treatment",
        "Solid waste management",
        "Recycling technologies",
        "Water conservation",
        "E-waste management",
      ],
    },
    {
      icon: Wind,
      title: "Climate Change & Policy",
      topics: [
        "Climate change mitigation",
        "Carbon footprint reduction",
        "Environmental policy",
        "Sustainable development goals",
        "Green economy",
      ],
    },
    {
      icon: Lightbulb,
      title: "Energy Efficiency",
      topics: [
        "Smart grid technologies",
        "Energy storage systems",
        "Building energy management",
        "Industrial energy efficiency",
        "Electric vehicles",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Conference Themes</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ICSEET-2025 focuses on various aspects of sustainable energy and environmental solutions. 
              Researchers are invited to submit their work in the following thematic areas:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <theme.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg">{theme.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {theme.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>• {topic}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-3">Important Note</h3>
              <p className="text-muted-foreground">
                The above list is not exhaustive. Papers addressing other relevant topics within the broader 
                scope of sustainable energy and environmental solutions are also welcome. Authors are encouraged 
                to explore interdisciplinary approaches and innovative solutions to contemporary challenges in energy 
                and environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Theme;
