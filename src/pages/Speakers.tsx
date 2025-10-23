import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "To be announced",
      title: "Keynote Speaker",
      affiliation: "",
      expertise: "Renewable Energy Systems",
    },
    {
      name: "To be announced",
      title: "Keynote Speaker",
      affiliation: "",
      expertise: "Environmental Technologies",
    },
    {
      name: "To be announced",
      title: "Invited Speaker",
      affiliation: "",
      expertise: "Sustainable Development",
    },
    {
      name: "To be announced",
      title: "Invited Speaker",
      affiliation: "",
      expertise: "Climate Change",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Keynote Speakers</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ICSEET-2025 will feature distinguished speakers from academia and industry who are leaders 
              in sustainable energy and environmental technologies.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12 text-center">
            <p className="text-lg font-semibold text-primary mb-2">Speaker announcements coming soon!</p>
            <p className="text-muted-foreground">
              We are currently finalizing our lineup of world-class speakers. Check back soon for updates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-bold text-primary">?</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
                      <p className="text-primary font-semibold mb-2">{speaker.title}</p>
                      {speaker.affiliation && (
                        <p className="text-sm text-muted-foreground mb-2">{speaker.affiliation}</p>
                      )}
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-semibold">Expertise:</span> {speaker.expertise}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Previous Conference Highlights</h3>
              <p className="text-muted-foreground mb-4">
                Our previous conference featured renowned experts from leading institutions worldwide, 
                including representatives from:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                <li>• International research institutions</li>
                <li>• Leading universities</li>
                <li>• Industry leaders in renewable energy</li>
                <li>• Environmental technology companies</li>
                <li>• Government research organizations</li>
                <li>• Sustainability consultancies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
