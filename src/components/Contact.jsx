import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  // 1. state 초기값 변경 (name -> from_name, email -> reply_to)
  const [formData, setFormData] = useState({ from_name: '', reply_to: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  // 알림 자동 삭제
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => setAlert({ ...alert, show: false }), 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // sendForm 대신 send 사용 (데이터를 직접 객체로 전송)
    emailjs.send(
      'service_ubxvcqi',
      'template_krzrvki',
      {
        from_name: formData.from_name,
        reply_to: formData.reply_to,
        message: formData.message,
        // to_name: 'Blueway 담당자',
      },
      'rY8k-_EBeuJ7jYP2O'  // Public Key
    )
    .then(() => {
      setAlert({
        show: true,
        type: 'success',
        message: 'Your message has been sent successfully!'
      });
      setFormData({ from_name: '', reply_to: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setAlert({
        show: true,
        type: 'error',
        message: `전송 실패: ${error.text} (Status: ${error.status})`
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - BLUEWAY</title>
      </Helmet>

      {/* 커스텀 알림 (Toast) - 하단 중앙 배치 및 디자인 개선 */}
      {alert.show && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className={`flex items-center gap-5 px-8 py-5 rounded-2xl shadow-2xl border-2 backdrop-blur-sm ${
            alert.type === 'success' 
              ? 'bg-blue-50/95 border-blue-200 text-blue-900' 
              : 'bg-red-50/95 border-red-200 text-red-900'
          }`}>
            <div className={`p-2 rounded-full ${alert.type === 'success' ? 'bg-blue-200' : 'bg-red-200'}`}>
              {alert.type === 'success' ? <CheckCircle size={28} /> : <AlertCircle size={28} />}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">
                {alert.type === 'success' ? 'Success!' : 'Error'}
              </span>
              <span className="text-sm">
                {alert.message}
              </span>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* 왼쪽: 연락처 정보 섹션 */}
            <div className="md:w-2/5 bg-blue-600 p-10 text-white">
              <h2 className="text-3xl font-bold mb-8">{t('tabs.contact')}</h2>
              <p className="text-blue-100 mb-12">
                {t('contact.description') || 'Feel free to reach out to us with any inquiries or feedback. We are here to assist you!'}
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500 rounded-lg"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-blue-100">+82-31-8069-5522</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500 rounded-lg"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-blue-100">blueway@blueway-co.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽: 문의 폼 섹션 */}
            <div className="md:w-3/5 p-10">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="from_name"  // 3. name 속성 변경 (중요)
                      value={formData.from_name} // state 연결 변경
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="reply_to"   // 4. name 속성 변경 (중요)
                      value={formData.reply_to} // state 연결 변경
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl h-40 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <>
                      <Send size={20} />
                      Send
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;