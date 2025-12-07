import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function Affiliates() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Affiliates - Kyeam Technologies</title>
        <meta name="description" content="Our affiliates and partners." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('header.nav')[2]}</h2>
          <p className="text-lg text-center">Affiliates information here.</p>
        </div>
      </section>
    </>
  );
}

export default Affiliates;