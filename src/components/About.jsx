import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BusinessProgress from './BusinessProgress.jsx';
import Organization from './Organization.jsx';
import { MapPin, Briefcase, Users } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  const [activeSubTab, setActiveSubTab] = useState('organization');

  // 탭 메뉴 데이터
  const subTabs = [
    { id: 'organization', label: 'Organization', icon: Users },
    { id: 'business', label: 'Business Process', icon: Briefcase },
    { id: 'location', label: 'Location', icon: MapPin },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 상단 헤더 섹션 */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            {t('about.description')}
          </div>
        </div>
      </div>

      {/* 서브 탭 메뉴 */}
      <div className="sticky top-20 z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 md:space-x-12 overflow-x-auto">
            {subTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`
                    flex items-center gap-2 py-6 px-2 border-b-4 transition-all duration-300 whitespace-nowrap
                    ${isActive 
                      ? 'border-blue-600 text-blue-600 font-bold' 
                      : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'}
                  `}
                >
                  <Icon size={20} />
                  <span className="text-lg">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 탭 컨텐츠 영역 */}
      <div className="min-h-[600px] animate-fade-in">
        {activeSubTab === 'organization' && (
          <div className="animate-slide-up">
            <Organization />
          </div>
        )}

        {activeSubTab === 'business' && (
          <div className="animate-slide-up">
            <BusinessProgress />
          </div>
        )}

        {activeSubTab === 'location' && (
          <div className="animate-slide-up">
            <section className="bg-gray-50 py-16">
              <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Location</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {/* 1. Google Map */}
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h4 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
                      <span className="text-blue-600">📍</span> Google Map
                    </h4>
                    <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.818579742487!2d126.97215711228858!3d37.39412247196735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5e3f9d6e7c17%3A0x16c0c2950f8f3ee2!2z6rK96riw64-EIOyViOyWkeyLnCDrj5nslYjqtawg7Z2l7JWI64yA66GcIDQ0NQ!5e0!3m2!1sko!2skr!4v1765713020984!5m2!1sko!2skr"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                      ></iframe>
                    </div>
                  </div>

                  {/* 2. Naver Map */}
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h4 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
                      <span className="text-green-500">N</span> Naver Map
                    </h4>
                    <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden relative group flex items-center justify-center border border-gray-200">
                      <iframe 
                        src="https://naver.me/G8hnmkVr"
                        width="100%"
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Naver Map"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* 텍스트 주소 정보 */}
                <div className="mt-12 text-center">
                  <p className="text-xl font-medium text-gray-800">주소 (Address)</p>
                  <p className="text-gray-600 mt-2">경기도 안양시 동안구 흥안대로 445, 702호(평촌 K-비즈리움)</p>
                  <p className="text-gray-500 mt-1">702ho, Pyeongchon K-Bizrium, 445 Heungan-daero, Dongan-gu, Anyang-si, Gyeonggi-do, Korea</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;