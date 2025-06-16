
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form processing
      console.log("Demo request submitted:", formData);
      
      // Show success toast
      toast({
        title: "Demo Request Submitted!",
        description: "Thank you for your interest. We'll contact you within 24 hours to schedule your live demo.",
      });

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        testScenario: ""
      });

      // Close form after short delay
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error("Error submitting demo request:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Submitting..." : "Request Demo"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoRequestForm;
