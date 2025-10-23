import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe } from "lucide-react";

const Committee = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Organizing Committee</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The conference is organized by a dedicated team of experts from REVA University and 
              collaborating institutions worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  Patron
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Chancellor</p>
                <p className="text-muted-foreground text-sm">REVA University</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  Chief Patron
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Vice Chancellor</p>
                <p className="text-muted-foreground text-sm">REVA University</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  General Chair
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Dean</p>
                <p className="text-muted-foreground text-sm">School of Applied Sciences</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Advisory Committee</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-3">International Members</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• To be announced</li>
                    <li>• To be announced</li>
                    <li>• To be announced</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">National Members</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• To be announced</li>
                    <li>• To be announced</li>
                    <li>• To be announced</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Technical Program Committee</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The Technical Program Committee consists of renowned researchers and experts from various 
                institutions worldwide who will review submitted papers and ensure the quality of the conference program.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Committee member details will be updated soon.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Organizing Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Convener</h4>
                  <p className="text-sm text-muted-foreground">Faculty Members</p>
                  <p className="text-sm text-muted-foreground">REVA University</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Co-Conveners</h4>
                  <p className="text-sm text-muted-foreground">Faculty Members</p>
                  <p className="text-sm text-muted-foreground">REVA University</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Coordinators</h4>
                  <p className="text-sm text-muted-foreground">Faculty & Staff</p>
                  <p className="text-sm text-muted-foreground">REVA University</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Committee;
