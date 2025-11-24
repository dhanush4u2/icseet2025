import { Card, CardContent } from "@/components/ui/card";
import { speakers } from "@/data/conferenceData";

const Speakers = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Keynote & Invited Speakers</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ICSEET-2025 will feature distinguished speakers from academia and industry who are leaders 
              in sustainable energy and environmental solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map((speaker, index) => {
              // Map speaker names to their photo filenames
              const photoMap: { [key: string]: string } = {
                "Dr. Prashanth Menezes": "prashanth.png",
                "Dr. Xuezhu Xu": "xue.png",
                "Dr. Mohamed Mamlouk": "mohamed.png",
                "Dr. V. Ganesh": "ganesh.png",
                "Dr. Muhammed Musthafa": "musthafa.png",
                "Dr. M. Sathish": "satish.png",
                "Dr. Rakesh Kumar Pandey": "rakesh.png",
                "Dr. Shahid Rasul": "shahid.png",
                "Dr. Rochan Sinha": "rochan.png",
                "Dr. S. Radha": "radha.png",
                "Dr. Murarai": "murarai.png",
                "Dr. Manav Saxena": "manav.png",
                "Dr. Ravi Kumar": "ravi.png",
                "Dr. Himani Pandey": "himani.png",
              };
              const photoFileName = photoMap[speaker.name] || "placeholder.png";
              
              return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    {/* Speaker photo */}
                    <div className="w-32 h-32 rounded-lg overflow-hidden mb-4 border-2 border-primary/10">
                      <img 
                        src={`/speakers/${photoFileName}`}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-primary/5', 'flex', 'items-center', 'justify-center');
                          const icon = document.createElement('div');
                          icon.innerHTML = '<svg class="h-16 w-16 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>';
                          target.parentElement!.appendChild(icon);
                        }}
                      />
                    </div>
                    
                    <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
                    <p className="text-primary font-semibold mb-2 text-sm">{speaker.title}</p>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{speaker.affiliation}</p>
                    <p className="text-sm text-muted-foreground mb-1">{speaker.organization}</p>
                    {speaker.location && (
                      <p className="text-xs text-muted-foreground mt-2 italic">{speaker.location}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
            })}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-4 text-center">Conference Highlights</h3>
              <p className="text-muted-foreground mb-4 text-center max-w-4xl mx-auto">
                Our conference features renowned experts from leading institutions worldwide, bringing together 
                cutting-edge research and industry insights in sustainable energy and environmental solutions.
              </p>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-muted-foreground text-sm max-w-5xl mx-auto">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  International research leaders
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Industry innovators & CTOs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Premier academic institutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Hands-on technology demonstrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Networking opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Latest research insights
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
