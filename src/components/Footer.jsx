import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">{t('footer.address')}</p>
        <p className="mb-2">{t('footer.phone')}</p>
        <p className="mb-4">{t('footer.fax')}</p>
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}

export default Footer;