
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form processing
      console.log("Demo request submitted:", formData);
      
      // Show success toast
      toast({
        title: t('demoForm.successTitle'),
        description: t('demoForm.successMessage'),
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
        title: t('demoForm.errorTitle'),
        description: t('demoForm.errorMessage'),
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
            className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-4 p-1 rounded-full hover:bg-gray-100 transition-colors`}
            disabled={isSubmitting}
          >
            <X className="w-4 h-4" />
          </button>
          <CardTitle className={`text-2xl font-bold text-center ${isRTL ? 'leading-relaxed' : ''}`}>
            {t('demoForm.title')}
          </CardTitle>
          <p className={`text-gray-600 text-center ${isRTL ? 'leading-relaxed' : ''}`}>
            {t('demoForm.subtitle')}
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className={isRTL ? 'leading-relaxed' : ''}>{t('demoForm.fullName')}</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('demoForm.fullNamePlaceholder')}
                disabled={isSubmitting}
                className={isRTL ? 'text-right' : ''}
              />
            </div>
            <div>
              <Label htmlFor="company" className={isRTL ? 'leading-relaxed' : ''}>{t('demoForm.company')}</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder={t('demoForm.companyPlaceholder')}
                disabled={isSubmitting}
                className={isRTL ? 'text-right' : ''}
              />
            </div>
            <div>
              <Label htmlFor="email" className={isRTL ? 'leading-relaxed' : ''}>{t('demoForm.email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('demoForm.emailPlaceholder')}
                disabled={isSubmitting}
                className={isRTL ? 'text-right' : ''}
              />
            </div>
            <div>
              <Label htmlFor="testScenario" className={isRTL ? 'leading-relaxed' : ''}>{t('demoForm.testScenario')}</Label>
              <Textarea
                id="testScenario"
                name="testScenario"
                value={formData.testScenario}
                onChange={handleChange}
                required
                placeholder={t('demoForm.testScenarioPlaceholder')}
                rows={3}
                disabled={isSubmitting}
                className={isRTL ? 'text-right' : ''}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? t('demoForm.submitting') : t('demoForm.requestDemo')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoRequestForm;
