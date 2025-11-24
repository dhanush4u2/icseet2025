import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with the organizing committee
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:icseet-2025@reva.edu.in" className="text-primary hover:underline">
                        icseet-2025@reva.edu.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+91 9964556195</p>
                      <p className="text-muted-foreground">+91 9885057117</p>
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
                  <CardTitle>Conference Chair</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold">Dr. Madhusudana Reddy</p>
                    <p className="text-sm text-muted-foreground">Convener, Professor & Head</p>
                    <p className="text-sm text-muted-foreground">Department of Chemistry, REVA University</p>
                  </div>
                  <div>
                    <p className="font-semibold">Department of Chemistry</p>
                    <p className="text-sm text-muted-foreground">School of Applied Sciences</p>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:icseet-2025@reva.edu.in" className="text-primary hover:underline">
                        icseet-2025@reva.edu.in
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Location Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.720610555168!2d77.63308074171067!3d13.116877601961464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae191736187a37%3A0x3092096ba7fb4c9b!2sREVA%20University!5e0!3m2!1sen!2sin!4v1763989356716!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="REVA University Location"
                />
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
