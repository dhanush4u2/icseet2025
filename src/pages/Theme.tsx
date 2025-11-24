import { Leaf, Zap, Battery, Flame, Globe, Beaker } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Theme = () => {
  const themes = [
    {
      icon: Leaf,
      title: "Green and Sustainable Chemistry",
      topics: [
        "Green synthesis and catalysis",
        "Environmentally benign solvents",
        "Renewable feedstocks and bio-based materials",
        "Waste minimization and atom economy",
        "Life cycle assessment of chemical processes",
      ],
    },
    {
      icon: Beaker,
      title: "Catalysis",
      topics: [
        "Water splitting reactions",
        "Photocatalysis",
        "Electrocatalysis",
        "Heterogeneous and homogeneous catalysis",
        "Catalyst design and optimization",
      ],
    },
    {
      icon: Zap,
      title: "Energy Conversion Devices",
      topics: [
        "Solar cells - polymer solar cells, dye-sensitized solar cells",
        "Perovskite solar cells, quantum dot solar cells",
        "Hybrid solar cells, silicon solar cells",
        "Thin-film and multi-junction solar cells",
        "Solar cell efficiency and stability improvements",
      ],
    },
    {
      icon: Battery,
      title: "Energy Storage Devices",
      topics: [
        "Polymer batteries, Li-ion batteries, Na-ion batteries",
        "K-ion batteries, zinc-magnesium batteries",
        "Redox flow batteries, supercapacitors",
        "Battery management systems",
        "Advanced electrode materials and electrolytes",
      ],
    },
    {
      icon: Flame,
      title: "Fuel Cells",
      topics: [
        "Direct methanol fuel cells",
        "Solid-oxide fuel cells",
        "Reversible fuel cells",
        "Phosphoric acid fuel cells, alkaline fuel cells",
        "Molten carbonate fuel cells",
        "Fuel cell stack design and optimization",
      ],
    },
    {
      icon: Globe,
      title: "Environmental Aspects",
      topics: [
        "CO2 reduction and carbon capture",
        "CO oxidation",
        "Nitrate reduction (ammonia synthesis)",
        "Pollution remediation and monitoring",
        "Sustainable waste management",
        "Green technology for environmental protection",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Themes of the Conference</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ICSEES-2025 focuses on cutting-edge research in sustainable energy and environmental solutions. 
              Researchers are invited to submit their work in the following thematic areas:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <theme.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg leading-tight">{theme.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {theme.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-3 text-center">Important Note</h3>
              <p className="text-muted-foreground text-center max-w-4xl mx-auto">
                The above list is not exhaustive. Papers addressing other relevant topics within the broader 
                scope of sustainable energy, environmental solutions, electrochemistry, and materials science 
                are also welcome. Authors are encouraged to explore interdisciplinary approaches and innovative 
                solutions to contemporary challenges in energy and environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Theme;
