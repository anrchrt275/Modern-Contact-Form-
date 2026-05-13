import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { Toaster, toast } from 'sonner';

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi request jaringan
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    
    // Memunculkan toast notifikasi sukses
    toast.success('Pesan Terkirim!', {
      description: 'Terima kasih telah menghubungi kami. Tim kami akan segera merespons.',
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4 sm:p-8 font-sans text-neutral-900 selection:bg-indigo-100 selection:text-indigo-900 relative overflow-hidden">
      <Toaster position="top-center" richColors theme="light" />
      
      {/* Latar Belakang Dekoratif Modern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-neutral-50 to-neutral-50 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[500px] relative z-10"
      >
        {/* Card Header */}
        <div className="mb-8 text-center space-y-3">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-neutral-100/80 flex items-center justify-center mx-auto mb-5"
          >
            <Send className="w-6 h-6 text-indigo-600" />
          </motion.div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-950">Hubungi Kami</h1>
          <p className="text-neutral-500 text-sm max-w-sm mx-auto leading-relaxed">
            Punya pertanyaan, proyek, atau sekadar ingin menyapa? Kami siap mendengar dari Anda.
          </p>
        </div>

        {/* Card Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-white p-7 sm:p-9 rounded-[2rem] shadow-xl shadow-indigo-900/5 ring-1 ring-neutral-950/5 relative"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-5 sm:space-y-0 sm:flex sm:gap-4">
              {/* Name Input */}
              <div className="space-y-1.5 flex-1">
                <label htmlFor="name" className="text-sm font-semibold text-neutral-700 ml-1">Nama Lengkap</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-indigo-500 transition-colors">
                    <User className="w-[18px] h-[18px]" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full pl-[2.5rem] pr-4 py-3 bg-neutral-50/50 border border-neutral-200 text-neutral-900 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all outline-none disabled:opacity-60 placeholder:text-neutral-400"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1.5 flex-1">
                <label htmlFor="email" className="text-sm font-semibold text-neutral-700 ml-1">Alamat Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-indigo-500 transition-colors">
                    <Mail className="w-[18px] h-[18px]" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="w-full pl-[2.5rem] pr-4 py-3 bg-neutral-50/50 border border-neutral-200 text-neutral-900 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all outline-none disabled:opacity-60 placeholder:text-neutral-400"
                  />
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-neutral-700 ml-1">Pesan Anda</label>
              <div className="relative group">
                <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none text-neutral-400 group-focus-within:text-indigo-500 transition-colors">
                  <MessageSquare className="w-[18px] h-[18px]" />
                </div>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Ceritakan detail gagasan yang ingin Anda diskusikan..."
                  disabled={isSubmitting}
                  className="w-full pl-[2.5rem] pr-4 py-3 bg-neutral-50/50 border border-neutral-200 text-neutral-900 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all outline-none disabled:opacity-60 resize-none placeholder:text-neutral-400"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full relative flex items-center justify-center py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-600/20 transition-all focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden mt-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-indigo-200" />
                    Sedang Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-[18px] h-[18px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    Kirim Pesan
                  </>
                )}
              </span>
              
              {/* Animasi latar belakang hover */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out pointer-events-none"></div>
            </motion.button>
          </form>
        </motion.div>
        
        {/* Footer Text */}
        <p className="mt-8 text-center text-[13px] text-neutral-400 font-medium">
          Kami berkomitmen menjaga privasi data Anda. <br className="sm:hidden" />
          <a href="#" className="text-neutral-500 underline hover:text-indigo-600 transition-colors">Kebijakan Privasi</a>
        </p>
      </motion.div>
    </div>
  );
}
