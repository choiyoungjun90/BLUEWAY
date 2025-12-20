import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, GraduationCap, Heart, Handshake } from 'lucide-react';

const Ceo = () => {
  const { t } = useTranslation();
  const visions = t('ceo.vision', { returnObjects: true });

  // 아이콘 매핑 배열
  const icons = [Globe, GraduationCap, Heart, Handshake];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* CEO Message Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t('ceo.title')}
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Message Content */}
        <div className="max-w-5xl hover:shadow-2xl hover:scale-110 duration-300 hover:cursor-pointer mx-auto bg-white p-8 md:p-14 rounded-2xl shadow-xl border border-gray-100 mb-24 relative overflow-hidden">
          {/* 장식용 배경 요소 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
          
          <div className="space-y-6 text-xl text-black leading-relaxed relative z-10">
            <p className="font-semibold text-blue-800 text-xl">
              {t('ceo.p1')}
            </p>
            <p>{t('ceo.p2')}</p>
            <p>{t('ceo.p3')}</p>
            <p>{t('ceo.p4')}</p>
          </div>
          
          <div className="mt-12 text-right border-t pt-6">
            <p className="font-bold text-2xl text-gray-900">BLUEWAY Co. Ltd.</p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Future</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">
              {t('ceo.visionTitle')}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.isArray(visions) && visions.map((item, index) => {
              const IconComponent = icons[index] || Globe;
              return (
                <div 
                  key={index} 
                  className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:scale-110 duration-300 hover:cursor-pointer transition-all duration-300 border-l-4 border-transparent hover:border-blue-600 hover:-translate-y-2 flex flex-col md:flex-row gap-6 items-start "
                >
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent size={32} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h4 className="text-xl font-bold text-black mb-3 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-900 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceo;
