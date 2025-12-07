import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Contact Us - Kyeam Technologies</title>
        <meta name="description" content="Get in touch with Kyeam Technologies Co., Ltd." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('tabs.contact')}</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
              <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;