import { Calendar, MapPin, Download, Users, Award, BookOpen } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
              <p className="text-sm font-semibold">December 11-13, 2025</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              2nd International Conference on<br />
              <span className="text-primary">Sustainable Energy and Environmental Technologies</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-3 opacity-90 font-semibold">ICSEET-2025</p>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="text-lg">REVA University, Bangalore, Karnataka, India</p>
            </div>

            <div className="mb-12">
              <p className="text-sm mb-4 opacity-80">Conference starts in</p>
              <CountdownTimer />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/registration">Register Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">World-Class Speakers</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn from leading experts in sustainable energy and environmental technologies
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Research Papers</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit your research and contribute to the field of sustainable technologies
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Networking</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with researchers and professionals from around the world
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About ICSEET-2025</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The 2nd International Conference on Sustainable Energy and Environmental Technologies (ICSEET-2025) 
              brings together researchers, academics, industry professionals, and students to discuss the latest 
              developments in sustainable energy solutions and environmental conservation technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This three-day conference will feature keynote speeches, technical sessions, poster presentations, 
              and workshops focused on innovative approaches to address global energy and environmental challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conference Materials</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Brochure</h3>
                <Button variant="outline" size="sm" className="mt-2">Download</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call for Papers</h3>
                <Button variant="outline" size="sm" className="mt-2">Download</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Schedule</h3>
                <Button variant="outline" size="sm" className="mt-2">Download</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Abstract Template</h3>
                <Button variant="outline" size="sm" className="mt-2">Download</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
