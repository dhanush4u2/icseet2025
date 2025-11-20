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
    { category: "Pre-Conference & Conference (11-13 Dec)", early: "₹1,500", regular: "₹1,500", note: "Faculty/Research Scholar - Hands-on Training on Electrochemical Workstation" },
    { category: "Conference Only - Faculty/Research Scholar", early: "₹1,000", regular: "₹1,000", note: "12th & 13th Dec 2025" },
    { category: "Conference Only - UG/PG Students", early: "₹500", regular: "₹500", note: "12th & 13th Dec 2025" },
    { category: "Conference Only - Industry Delegates", early: "₹2,000", regular: "₹2,000", note: "12th & 13th Dec 2025" },
    { category: "Conference Only - Foreign Delegates", early: "$100", regular: "$100", note: "12th & 13th Dec 2025" },
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
                            <th className="text-right py-2 font-semibold">Fee</th>
                          </tr>
                        </thead>
                        <tbody>
                          {registrationFees.map((fee, index) => (
                            <tr key={index} className="border-b">
                              <td className="py-3">
                                <div>
                                  <div className="font-medium">{fee.category}</div>
                                  {fee.note && (
                                    <div className="text-xs text-muted-foreground mt-1">{fee.note}</div>
                                  )}
                                </div>
                              </td>
                              <td className="text-right py-3 font-semibold">{fee.early}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Last Date for Registration:</strong> 5th December 2025
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Payment Link:</strong> <a href="https://www.reva.edu.in/payment" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.reva.edu.in/payment</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Email abstracts to:</strong> <a href="mailto:icseet-2025@reva.edu.in" className="text-primary hover:underline">icseet-2025@reva.edu.in</a>
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
                    <div className="space-y-4">
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <p className="text-sm font-semibold mb-2">How to Register:</p>
                        <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                          <li>Fill the registration form using the link below</li>
                          <li>Make payment using the payment link</li>
                          <li>Send your abstract, filled registration form, and payment receipt to <a href="mailto:icseet-2025@reva.edu.in" className="text-primary hover:underline font-medium">icseet-2025@reva.edu.in</a></li>
                        </ol>
                      </div>

                      <Button className="w-full" size="lg" asChild>
                        <a href="https://tinyurl.com/icseet-2025" target="_blank" rel="noopener noreferrer">
                          Open Registration Form
                        </a>
                      </Button>

                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://www.reva.edu.in/payment" target="_blank" rel="noopener noreferrer">
                          Proceed to Payment
                        </a>
                      </Button>

                      <div className="pt-4 border-t">
                        <h4 className="font-semibold mb-2 text-sm">Contact Information</h4>
                        <p className="text-sm text-muted-foreground">Department of Chemistry</p>
                        <p className="text-sm text-muted-foreground">School of Applied Sciences</p>
                        <p className="text-sm text-muted-foreground">REVA University, Bangalore</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Email: <a href="mailto:icseet-2025@reva.edu.in" className="text-primary hover:underline">icseet-2025@reva.edu.in</a>
                        </p>
                      </div>
                    </div>
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
                        <Select required>
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
                          <p className="font-semibold">Abstract Submission Deadline</p>
                          <p className="text-muted-foreground">5th December 2025</p>
                        </li>
                        <li>
                          <p className="font-semibold">Registration Deadline</p>
                          <p className="text-muted-foreground">5th December 2025</p>
                        </li>
                        <li>
                          <p className="font-semibold">Pre-Conference</p>
                          <p className="text-muted-foreground">11th December 2025</p>
                          <p className="text-xs text-muted-foreground mt-1">Hands-on Training on Electrochemical Workstation</p>
                        </li>
                        <li>
                          <p className="font-semibold">Conference</p>
                          <p className="text-muted-foreground">12th & 13th December 2025</p>
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
                      <Button variant="outline" className="w-full mt-4" size="sm" asChild>
                        <a href="/documents/Abstract_Template-ICSEE-2025.doc" download>
                          Download Template
                        </a>
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
