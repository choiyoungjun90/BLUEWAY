import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, FileText, Settings, CheckCircle } from 'lucide-react';

const BusinessProgress = () => {
  const { t, i18n } = useTranslation();
  const steps = t('progress.steps', { returnObjects: true });
  
  // 단계별 아이콘
  const icons = [MessageSquare, FileText, Settings, CheckCircle];

  // 언어에 따라 이미지 경로 변경
  const getImageSrc = () => {
    const lang = i18n.language;
    if (lang === 'ko') {
      return '/assets/process_ko.png'; // 한국어 이미지
    } else {
      return '/assets/process_en.png'; // 영어 이미지 (기본)
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('progress.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('progress.subtitle')}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 조직도 이미지 영역 */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            {/* 이미지 반응형 처리 - 언어에 따라 변경 */}
            <img 
              src={getImageSrc()} 
              alt="Business Progress" 
              className="w-full h-auto object-contain mx-auto"
              onError={(e) => e.target.src = '/assets/process.png'} // 이미지 없으면 기본 이미지로 폴백
            />
          </div>
        </div>

        {/* 프로세스 스텝 (현대적인 카드 그리드 디자인) */}
        <div className="max-w-7xl mx-auto mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            
            {/* 데스크탑 연결선 (배경에 은은하게 배치) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-0 -translate-y-12"></div>

            {Array.isArray(steps) && steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <div key={index} className="relative group">
                  <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center relative z-10 h-full">
                    
                    {/* 단계 번호 배지 */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg shadow-blue-200">
                      STEP 0{index + 1}
                    </div>

                    {/* 아이콘 섹션 */}
                    <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-inner">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>

                    {/* 텍스트 섹션 */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed break-keep">
                      {step.desc}
                    </p>

                    {/* 배경 장식 숫자 */}
                    <span className="absolute bottom-6 right-8 text-7xl font-black text-gray-50 group-hover:text-blue-50/50 transition-colors -z-10 select-none">
                      {index + 1}
                    </span>
                  </div>

                  {/* 다음 단계 화살표 (데스크탑 전용) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-12 z-20 items-center justify-center text-gray-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProgress;