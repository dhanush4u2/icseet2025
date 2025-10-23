import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" required placeholder="Your full name" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" required placeholder="What is this regarding?" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Your message..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">icseet2025@reva.edu.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+91-8277049441</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">
                        REVA University<br />
                        Rukmini Knowledge Park<br />
                        Kattigenahalli, Yelahanka<br />
                        Bangalore - 560064<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a href="https://www.reva.edu.in" className="text-primary hover:underline">
                        www.reva.edu.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conference Coordinators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold">Dr. [Name]</p>
                    <p className="text-sm text-muted-foreground">Conference Convener</p>
                    <p className="text-sm text-muted-foreground">convener@icseet2025.in</p>
                  </div>
                  <div>
                    <p className="font-semibold">Dr. [Name]</p>
                    <p className="text-sm text-muted-foreground">Technical Chair</p>
                    <p className="text-sm text-muted-foreground">technical@icseet2025.in</p>
                  </div>
                  <div>
                    <p className="font-semibold">Prof. [Name]</p>
                    <p className="text-sm text-muted-foreground">Registration Chair</p>
                    <p className="text-sm text-muted-foreground">registration@icseet2025.in</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Location Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Interactive map will be embedded here
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                REVA University is easily accessible from Bangalore International Airport (approximately 35 km) 
                and well-connected by public transport.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
