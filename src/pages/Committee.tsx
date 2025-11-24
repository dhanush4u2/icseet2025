import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Building2, UserCheck } from "lucide-react";
import { chiefPatrons, patrons, organizingCommittee, advisoryCommittee } from "@/data/conferenceData";

const Committee = () => {
  const conveners = [
    { name: "Dr. Nagaraju D H", designation: "Professor, Department of Chemistry, REVA University" },
  ];
  const ConferenceChair = [
    { name: "Dr. M. B. Madhusudana Reddy ", designation: "Head & Professor, Department of Chemistry, REVA University" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Organizing Committee</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ICSEET-2025 is organized by the Department of Chemistry, School of Applied Sciences, 
              REVA University, with support from esteemed faculty and experts worldwide.
            </p>
          </div>

          {/* Chief Patrons */}
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Chief Patrons
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {chiefPatrons.map((person, index) => (
                  <div key={index} className="text-center py-4">
                    <p className="font-bold text-xl mb-1">{person.name}</p>
                    <p className="text-muted-foreground">{person.designation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Patrons */}
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-primary" />
                Patrons
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patrons.map((person, index) => (
                  <div key={index} className="text-center py-4 bg-muted/30 rounded-lg">
                    <p className="font-bold text-lg mb-1">{person.name}</p>
                    <p className="text-sm text-muted-foreground px-2">{person.designation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conference Chair */}
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-6 w-6 text-primary" />
                Conference Chair
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {ConferenceChair.map((person, index) => (
                <div key={index} className="text-center py-4">
                  <p className="font-bold text-xl mb-1">{person.name}</p>
                  <p className="text-muted-foreground">{person.designation}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Convener */}
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-6 w-6 text-primary" />
                Convener
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {conveners.map((person, index) => (
                <div key={index} className="text-center py-4">
                  <p className="font-bold text-xl mb-1">{person.name}</p>
                  <p className="text-muted-foreground">{person.designation}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Organizing Committee */}
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Organizing Committee
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {organizingCommittee.map((member, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg text-center">
                    <p className="font-semibold">{member}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Advisory Committee */}
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                Advisory Committee
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {advisoryCommittee.map((member, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <p className="font-semibold text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{member.affiliation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Department Information */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                <strong>Organized by:</strong> Department of Chemistry, School of Applied Sciences<br />
                REVA University, Bangalore, Karnataka, India
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Committee;
