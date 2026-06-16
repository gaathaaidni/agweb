'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ form: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions about our services or products? We&apos;re here to help you navigate your global business journey.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  For enquiries, collaborations, or investment support — connect with us anytime through the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 79 3590 8656</p>
                    <p className="text-gray-600">+91 98257 28291</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@aidniglobal.in</p>
                    <p className="text-gray-600">office@aidniglobal.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Office Address</h4>
                    <p className="text-gray-600">
                      407-408, Patel Avenue, SG highway,<br />
                      Ahmedabad. India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="bg-green-100 p-4 rounded-full text-green-600 mb-6">
                    <CheckCircle2 className="w-16 h-16" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-600 font-bold hover:underline transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700" htmlFor="firstName">First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700" htmlFor="lastName">Last Name *</label>
                      <input 
                        type="text" 
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700" htmlFor="email">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700" htmlFor="message">Comment or Message *</label>
                    <textarea 
                      name="message"
                      id="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Message'} <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}