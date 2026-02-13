import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SiteFooter } from '@/components/SiteFooter';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kampala, Uganda',
    subtext: 'Jeffeh House, Plot 712, Bahai Road',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+256 703 896 443',
    subtext: 'Monday to Friday, 9am - 6pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@anuelenergy.com',
    subtext: 'We reply within 24 hours',
  },
];

export function Section09Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    industry: '',
    educationLevel: '',
  });

  const levelOptions: Record<string, string[]> = {
    education: ['Primary', 'Secondary', 'Tertiary', 'University'],
    healthcare: ['Clinic', 'Health Center', 'Hospital', 'Specialty'],
    'public-sector': ['Local', 'Regional', 'National', 'Agency'],
    commercial: ['SME', 'Enterprise', 'Industrial', 'Retail'],
  };

  const currentLevels =
    formData.industry && levelOptions[formData.industry]
      ? levelOptions[formData.industry]
      : [];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: '',
        industry: '',
        educationLevel: '',
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section relative w-full py-20 lg:py-32"
      style={{ zIndex: 90 }}
    >
      <div className="px-6 lg:px-[6vw]">
        {/* Header */}
        <div className="mb-12 lg:mb-16 contact-copy">
          <p className="subtitle text-secondary max-w-xl contact-lead">
            Shine helps public institutions build solar systems that meet their energy needs.
          </p>
        </div>

        {/* Form Card */}
        <div className="form-card w-full">
          <p className="form-intro contact-lead">
            Let us know a bit about your organisation, and we will reach out soon.
          </p>
          <form onSubmit={handleSubmit} className="contact-form-grid">
            <div className="contact-form-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label block mb-2">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="input-theme"
                  />
                </div>
                <div>
                  <label className="form-label block mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="input-theme"
                  />
                </div>
              </div>

              <div>
                <label className="form-label block mb-2">Phone</label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+256 700 000 000"
                  required
                  className="input-theme"
                />
                <p className="form-helper text-secondary mt-2">
                  Include country code.
                </p>
              </div>

              <div>
                <label className="form-label block mb-2">Organization</label>
                <Input
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="School or organization name"
                  required
                  className="input-theme"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label block mb-2">Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleSelectChange}
                    required
                    className="input-theme w-full rounded-md px-3 py-2 text-sm bg-transparent"
                  >
                    <option value="">Select industry</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="public-sector">Public Sector</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="form-label block mb-2">Level</label>
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleSelectChange}
                    required
                    className="input-theme w-full rounded-md px-3 py-2 text-sm bg-transparent"
                  >
                    <option value="">
                      {formData.industry ? 'Select level' : 'Select industry first'}
                    </option>
                    {currentLevels.map((level) => (
                      <option key={level} value={level.toLowerCase()}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="contact-form-right">
              <div>
                <label className="form-label block mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={8}
                  className="input-theme resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || submitted}
                className="btn-primary w-full sm:w-auto self-end"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info Row */}
        <div className="contact-info-row mt-10">
          {contactInfo.map((item) => (
            <div key={item.label} className="contact-info-item">
              <item.icon className="w-5 h-5 contact-meta-icon" />
              <div className="contact-info-text">
                <span className="contact-meta-value block">
                  {item.value}
                </span>
                <span className="contact-meta-sub block">
                  {item.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>

        <SiteFooter />
      </div>
    </section>
  );
}
