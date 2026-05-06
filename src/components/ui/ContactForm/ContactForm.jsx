'use client';
import { useState } from 'react';
import Button from '@/components/sheard/Button/button';
import { useValidation } from '@/hooks/useValidation';
import { VALIDATION_SCHEMAS } from '@/lib/validation';
import FormInput from './FormInput';


const ContactForm = () => {
  const { validate, shouldShowError, setFieldTouched, clearErrors } = useValidation(VALIDATION_SCHEMAS.contact);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      alert('Please fix the validation errors before submitting.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const whatsappNumber = '880178027057'; // Your WhatsApp number
      const messageText = `Hi, my name is ${formData.name}%0A%0AEmail: ${formData.email}%0A%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}`;
      
      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      clearErrors();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#1B2A40] rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Get In Touch</h2>
        <p className="text-gray-300 text-center mb-8">
          Have a project in mind? Let&apos;s discuss how we can work together.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => setFieldTouched('name')}
              error={shouldShowError('name')}
              touched={true}
              required
              placeholder="Your full name"
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => setFieldTouched('email')}
              error={shouldShowError('email')}
              touched={true}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <FormInput
            label="Subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            onBlur={() => setFieldTouched('subject')}
            error={shouldShowError('subject')}
            touched={true}
            required
            placeholder="What&apos;s this about?"
          />

          <FormInput
            label="Message"
            name="message"
            type="textarea"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => setFieldTouched('message')}
            error={shouldShowError('message')}
            touched={true}
            required
            rows={6}
            placeholder="Tell me about your project or inquiry..."
          />

          {submitStatus === 'success' && (
            <div className="bg-green-600/20 border border-green-600 text-green-400 px-4 py-3 rounded-md">
              Perfect! WhatsApp is opening with your message. You can now send it directly.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-600/20 border border-red-600 text-red-400 px-4 py-3 rounded-md">
              Error opening WhatsApp. Please try again or contact me directly at +8801557132665
            </div>
          )}

          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
