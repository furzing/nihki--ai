
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Send } from "lucide-react";

interface DemoRequestFormProps {
  onClose: () => void;
}

const DemoRequestForm = ({ onClose }: DemoRequestFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    testScenario: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Demo request submitted:", formData);
    // Show success message and close form
    alert("Thank you! We'll get back to you as soon as possible.");
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <CardTitle className="text-2xl font-bold text-center">
            Request Live Demo
          </CardTitle>
          <p className="text-gray-600 text-center">
            Experience Nihki's AI interpretation in action
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Your company name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@company.com"
              />
            </div>
            <div>
              <Label htmlFor="testScenario">What would you like to test?</Label>
              <Textarea
                id="testScenario"
                name="testScenario"
                value={formData.testScenario}
                onChange={handleChange}
                required
                placeholder="Describe your use case (e.g., client interviews, international meetings, etc.)"
                rows={3}
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Send className="w-4 h-4 mr-2" />
              Request Demo
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoRequestForm;
