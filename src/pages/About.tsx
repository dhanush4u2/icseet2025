import { Building2, Globe, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About ICSEET-2025</h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The 2nd International Conference on Sustainable Energy and Environmental Technologies (ICSEET-2025) 
              is a premier forum for researchers, practitioners, and students to present and discuss the most 
              recent innovations, trends, and concerns in the field of sustainable energy and environmental technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Promote research in sustainable energy technologies</li>
                  <li>• Foster collaboration among researchers worldwide</li>
                  <li>• Discuss solutions to environmental challenges</li>
                  <li>• Share best practices in green technologies</li>
                  <li>• Encourage innovation in renewable energy</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Scope
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Renewable energy systems</li>
                  <li>• Environmental sustainability</li>
                  <li>• Green building technologies</li>
                  <li>• Waste management solutions</li>
                  <li>• Climate change mitigation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                About REVA University
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                REVA University is a leading institution of higher education located in Bangalore, Karnataka, India. 
                The university is committed to providing quality education and fostering research excellence across 
                various disciplines.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With state-of-the-art infrastructure, experienced faculty, and a focus on innovation and sustainability, 
                REVA University has established itself as a premier destination for academic and research pursuits 
                in India and beyond.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Who Should Attend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <ul className="space-y-2">
                    <li>• Researchers and academicians</li>
                    <li>• Industry professionals</li>
                    <li>• PhD scholars and students</li>
                    <li>• Policy makers</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>• Environmental engineers</li>
                    <li>• Energy specialists</li>
                    <li>• Technology developers</li>
                    <li>• Sustainability consultants</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
