import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, FileText, Settings, CheckCircle } from 'lucide-react';

const BusinessProgress = () => {
  const { t } = useTranslation();
  const steps = t('progress.steps', { returnObjects: true });
  
  // 단계별 아이콘
  const icons = [MessageSquare, FileText, Settings, CheckCircle];

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
            {/* 이미지 반응형 처리 */}
            <img 
              src="src/assets/process.png" 
              alt="Business Progress" 
              className="w-full h-auto object-contain mx-auto"
            />
            </div>
        </div>

        {/* 프로세스 스텝 (반응형 그리드) */}
        <div className="max-w-7xl mx-auto mt-20 bg-blue-900/90 p-10 rounded-3xl shadow-xl border border-blue-200/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.isArray(steps) && steps.map((step, index) => {
                const Icon = icons[index];
                return (
                  <div key={index} className="relative group">
                    {/* 연결선 (데스크탑에서만 보임, 마지막 항목 제외) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-400/30 -z-10"></div>
                    )}

                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col items-center text-center hover:-translate-y-2">
                      {/* 아이콘 원형 박스 */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-blue-900/50">
                        <Icon size={28} className="text-white" />
                      </div>

                      {/* 단계 번호 */}
                      <span className="absolute top-4 right-4 text-4xl font-bold text-white/10 select-none">
                        0{index + 1}
                      </span>

                      {/* 텍스트 내용 */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        {step.desc}
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

export default BusinessProgress;