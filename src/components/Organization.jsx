import React from 'react';
import { useTranslation } from 'react-i18next';

const Organization = () => {
  const { t, i18n } = useTranslation();

  // 언어에 따라 이미지 경로 변경
  const getImageSrc = () => {
    const lang = i18n.language;
    if (lang === 'ko') {
      return '/assets/organization_ko.png'; // 한국어 이미지
    } else {
      return '/assets/organization_en.png'; // 영어 이미지 (기본)
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('organization.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('organization.subtitle')}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 조직도 이미지 영역 */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            {/* 이미지 반응형 처리 - 언어에 따라 변경 */}
            <img 
              src={getImageSrc()} 
              alt="Organization Chart" 
              className="w-full h-auto object-contain mx-auto"
              onError={(e) => e.target.src = '/assets/organization.png'} // 이미지 없으면 기본 이미지로 폴백
            />
          </div>
          
          {/* 부서별 텍스트 요약 (접근성 및 SEO 용) */}
          <div className="hidden grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800">Sales</h4>
              <p className="text-sm text-gray-500">Domestic & Overseas</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800">Marketing</h4>
              <p className="text-sm text-gray-500">Purchasing & Strategy</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800">Management</h4>
              <p className="text-sm text-gray-500">Support & Finance</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-800">Q.C</h4>
              <p className="text-sm text-gray-500">Quality Control</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;