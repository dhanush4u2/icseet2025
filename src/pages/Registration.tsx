import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, DollarSign, Users, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Registration = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("");

  const registrationFees = [
    { category: "Indian Academicians", early: "₹5,000", regular: "₹6,000" },
    { category: "Indian Industry Professionals", early: "₹7,000", regular: "₹8,000" },
    { category: "Indian Students", early: "₹3,000", regular: "₹4,000" },
    { category: "Foreign Delegates", early: "$200", regular: "$250" },
    { category: "Foreign Students", early: "$150", regular: "$180" },
  ];

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted",
      description: "We'll send you payment details via email shortly.",
    });
  };

  const handleAbstractSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Abstract Submitted",
      description: "Your abstract has been submitted successfully. You'll receive a confirmation email soon.",
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Registration & Abstract Submission</h1>
            <p className="text-lg text-muted-foreground">
              Register for ICSEET-2025 and submit your research abstract
            </p>
          </div>

          <Tabs defaultValue="registration" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="registration">Conference Registration</TabsTrigger>
              <TabsTrigger value="abstract">Abstract Submission</TabsTrigger>
            </TabsList>

            <TabsContent value="registration">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      Registration Fees
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 font-semibold">Category</th>
                            <th className="text-right py-2 font-semibold">Early Bird</th>
                            <th className="text-right py-2 font-semibold">Regular</th>
                          </tr>
                        </thead>
                        <tbody>
                          {registrationFees.map((fee, index) => (
                            <tr key={index} className="border-b">
                              <td className="py-3">{fee.category}</td>
                              <td className="text-right py-3">{fee.early}</td>
                              <td className="text-right py-3">{fee.regular}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Early Bird Deadline:</strong> October 31, 2025
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Register Now
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleRegistration} className="space-y-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" required placeholder="Enter your full name" />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required placeholder="your.email@example.com" />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" required placeholder="+91-XXXXXXXXXX" />
                      </div>

                      <div>
                        <Label htmlFor="affiliation">Affiliation/Organization *</Label>
                        <Input id="affiliation" required placeholder="University/Company name" />
                      </div>

                      <div>
                        <Label htmlFor="category">Registration Category *</Label>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {registrationFees.map((fee, index) => (
                              <SelectItem key={index} value={fee.category}>
                                {fee.category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Button type="submit" className="w-full">
                        Proceed to Payment
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Payment gateway integration coming soon. You'll receive payment details via email.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="abstract">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Submit Your Abstract
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleAbstractSubmission} className="space-y-4">
                        <div>
                          <Label htmlFor="paperTitle">Paper Title *</Label>
                          <Input id="paperTitle" required placeholder="Enter your paper title" />
                        </div>

                        <div>
                          <Label htmlFor="authorName">Author Name(s) *</Label>
                          <Input id="authorName" required placeholder="First Author, Second Author, etc." />
                        </div>

                        <div>
                          <Label htmlFor="authorEmail">Corresponding Author Email *</Label>
                          <Input id="authorEmail" type="email" required placeholder="author@example.com" />
                        </div>

                        <div>
                          <Label htmlFor="themeArea">Theme Area *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select theme area" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="renewable">Renewable Energy Systems</SelectItem>
                              <SelectItem value="environmental">Environmental Technologies</SelectItem>
                              <SelectItem value="manufacturing">Sustainable Manufacturing</SelectItem>
                              <SelectItem value="water">Water & Waste Management</SelectItem>
                              <SelectItem value="climate">Climate Change & Policy</SelectItem>
                              <SelectItem value="efficiency">Energy Efficiency</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="abstract">Abstract (Max 300 words) *</Label>
                          <Textarea
                            id="abstract"
                            required
                            placeholder="Enter your abstract here..."
                            rows={6}
                          />
                        </div>

                        <div>
                          <Label htmlFor="keywords">Keywords *</Label>
                          <Input id="keywords" required placeholder="keyword1, keyword2, keyword3" />
                        </div>

                        <div>
                          <Label htmlFor="file">Upload Abstract (PDF) *</Label>
                          <div className="mt-2 flex items-center gap-2">
                            <Input id="file" type="file" accept=".pdf" required />
                            <Upload className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Maximum file size: 5MB
                          </p>
                        </div>

                        <Button type="submit" className="w-full">
                          Submit Abstract
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Important Dates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <p className="font-semibold">Abstract Submission</p>
                          <p className="text-muted-foreground">October 15, 2025</p>
                        </li>
                        <li>
                          <p className="font-semibold">Acceptance Notification</p>
                          <p className="text-muted-foreground">November 1, 2025</p>
                        </li>
                        <li>
                          <p className="font-semibold">Full Paper Submission</p>
                          <p className="text-muted-foreground">November 20, 2025</p>
                        </li>
                        <li>
                          <p className="font-semibold">Early Bird Registration</p>
                          <p className="text-muted-foreground">October 31, 2025</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Submission Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Abstract should not exceed 300 words</li>
                        <li>• Use the provided template</li>
                        <li>• Submit in PDF format only</li>
                        <li>• Include 4-6 keywords</li>
                        <li>• Follow IEEE format for references</li>
                      </ul>
                      <Button variant="outline" className="w-full mt-4" size="sm">
                        Download Template
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Registration;
