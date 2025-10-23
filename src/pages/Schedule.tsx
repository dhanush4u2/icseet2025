import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schedule = () => {
  const scheduleDay1 = [
    { time: "08:00 - 09:00", activity: "Registration & Welcome Coffee", location: "Main Lobby" },
    { time: "09:00 - 09:30", activity: "Inauguration Ceremony", location: "Main Auditorium" },
    { time: "09:30 - 10:30", activity: "Keynote Address 1", location: "Main Auditorium" },
    { time: "10:30 - 11:00", activity: "Tea Break & Networking", location: "Conference Hall" },
    { time: "11:00 - 13:00", activity: "Technical Session 1A & 1B", location: "Halls A & B" },
    { time: "13:00 - 14:00", activity: "Lunch Break", location: "Dining Hall" },
    { time: "14:00 - 16:00", activity: "Technical Session 2A & 2B", location: "Halls A & B" },
    { time: "16:00 - 16:30", activity: "Tea Break", location: "Conference Hall" },
    { time: "16:30 - 18:00", activity: "Poster Session", location: "Exhibition Hall" },
  ];

  const scheduleDay2 = [
    { time: "09:00 - 10:00", activity: "Keynote Address 2", location: "Main Auditorium" },
    { time: "10:00 - 10:30", activity: "Coffee Break", location: "Conference Hall" },
    { time: "10:30 - 12:30", activity: "Technical Session 3A & 3B", location: "Halls A & B" },
    { time: "12:30 - 13:30", activity: "Lunch Break", location: "Dining Hall" },
    { time: "13:30 - 15:30", activity: "Technical Session 4A & 4B", location: "Halls A & B" },
    { time: "15:30 - 16:00", activity: "Tea Break", location: "Conference Hall" },
    { time: "16:00 - 18:00", activity: "Panel Discussion", location: "Main Auditorium" },
    { time: "19:00 - 21:00", activity: "Gala Dinner", location: "Banquet Hall" },
  ];

  const scheduleDay3 = [
    { time: "09:00 - 10:00", activity: "Invited Talk", location: "Main Auditorium" },
    { time: "10:00 - 10:30", activity: "Coffee Break", location: "Conference Hall" },
    { time: "10:30 - 12:30", activity: "Technical Session 5A & 5B", location: "Halls A & B" },
    { time: "12:30 - 13:30", activity: "Lunch Break", location: "Dining Hall" },
    { time: "13:30 - 14:30", activity: "Valedictory Session & Awards", location: "Main Auditorium" },
    { time: "14:30 - 15:00", activity: "Closing Ceremony", location: "Main Auditorium" },
  ];

  const ScheduleTable = ({ schedule }: { schedule: typeof scheduleDay1 }) => (
    <div className="space-y-3">
      {schedule.map((item, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="pt-4">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex items-center gap-2 text-primary font-semibold min-w-[140px]">
                <Clock className="h-4 w-4" />
                {item.time}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{item.activity}</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                {item.location}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Conference Schedule</h1>
            <p className="text-lg text-muted-foreground">
              ICSEET-2025 | December 11-13, 2025
            </p>
          </div>

          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 text-center">
                <Calendar className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Note:</strong> The schedule is tentative and subject to changes. 
                  Final schedule will be updated closer to the conference date.
                </p>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="day1" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="day1">Day 1 - Dec 11</TabsTrigger>
              <TabsTrigger value="day2">Day 2 - Dec 12</TabsTrigger>
              <TabsTrigger value="day3">Day 3 - Dec 13</TabsTrigger>
            </TabsList>

            <TabsContent value="day1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Day 1 - Thursday, December 11, 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScheduleTable schedule={scheduleDay1} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="day2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Day 2 - Friday, December 12, 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScheduleTable schedule={scheduleDay2} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="day3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Day 3 - Saturday, December 13, 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScheduleTable schedule={scheduleDay3} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Sessions Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Renewable Energy Technologies</li>
                  <li>• Environmental Sustainability</li>
                  <li>• Green Building & Smart Cities</li>
                  <li>• Waste Management Solutions</li>
                  <li>• Climate Change Mitigation</li>
                  <li>• Energy Efficiency & Storage</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Session Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <p className="font-semibold text-foreground">Oral Presentations</p>
                    <p className="text-sm">15 minutes presentation + 5 minutes Q&A</p>
                  </li>
                  <li>
                    <p className="font-semibold text-foreground">Poster Presentations</p>
                    <p className="text-sm">Interactive poster session with networking</p>
                  </li>
                  <li>
                    <p className="font-semibold text-foreground">Panel Discussion</p>
                    <p className="text-sm">Expert panel on current trends and future directions</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
