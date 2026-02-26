
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ShoppingCart, ExternalLink, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mgolebog', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.errors?.[0]?.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('Failed to send message. Please check your connection.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-[80vh] animate-in zoom-in duration-500">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Info Side */}
        <div className="lg:w-1/2 bg-gradient-main p-12 lg:p-24 flex flex-col justify-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <h1 className="text-5xl font-black mb-8">Get In Touch</h1>
          <p className="text-xl mb-12 opacity-90 max-w-md font-medium">
            Have a project in mind? We'd love to hear from you. Let's bridge that gap together.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md group-hover:bg-white/30 transition-all">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">Call Us</p>
                <p className="text-2xl font-black">+91 9881103444</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md group-hover:bg-white/30 transition-all">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">WhatsApp</p>
                <p className="text-2xl font-black">+91 9881103444</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md group-hover:bg-white/30 transition-all">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">Email</p>
                <p className="text-2xl font-black">004neil@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <a 
              href="https://payhip.com/Creativelyink" 
              target="_blank" 
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-xl hover:scale-105 transition-transform"
            >
              <ShoppingCart className="w-5 h-5" /> Visit Store
            </a>
            <a 
              href="https://creativelyink.blogspot.com/" 
              target="_blank" 
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              <ExternalLink className="w-5 h-5" /> Our Blog
            </a>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            {status === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Message Received!</h2>
                <p className="text-slate-500 font-medium mb-8">
                  Thank you for reaching out. Our team will get back to you shortly to discuss your project.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Send a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-2xl transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-pink-500 focus:bg-white outline-none rounded-2xl transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                    <textarea 
                      required
                      name="message"
                      rows={4} 
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-purple-500 focus:bg-white outline-none rounded-2xl transition-all resize-none"
                      placeholder="How can we help your business?"
                    />
                  </div>
                  
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-rose-600 bg-rose-50 p-4 rounded-xl border border-rose-100 text-sm font-bold">
                      <AlertCircle className="w-4 h-4" />
                      {errorMessage}
                    </div>
                  )}

                  <button 
                    disabled={status === 'submitting'}
                    className="w-full py-5 bg-gradient-main text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
