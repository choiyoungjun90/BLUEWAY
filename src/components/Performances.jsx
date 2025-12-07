import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function Performances() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Performances - Kyeam Technologies</title>
        <meta name="description" content="Our performances and achievements." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('header.nav')[3]}</h2>
          <p className="text-lg text-center">Performances information here.</p>
        </div>
      </section>
    </>
  );
}

export default Performances;