import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, List, Image as ImageIcon } from 'lucide-react';
import supplyEn from '../../public/json/supply-en.json';
import supplyKo from '../../public/json/supply-ko.json';

const Supply = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('summary');
  const [summaryRecords, setSummaryRecords] = useState([]);

  useEffect(() => {
    // 언어 설정에 따라 데이터 소스 선택
    const data = i18n.language === 'ko' ? supplyKo : supplyEn;
    setSummaryRecords([...data].reverse()); // 최신순 정렬
  }, [i18n.language]);

  // 탭 메뉴 데이터
  const supplyTabs = [
    { id: 'summary', label: t('supply.tabs.summary'), icon: List },
    { id: '2025', label: '2025', icon: Calendar },
    { id: '2024', label: '2024', icon: Calendar },
    { id: '2023', label: '2023', icon: Calendar },
    { id: '2022', label: '2022', icon: Calendar },
    { id: 'before', label: 'before', icon: Calendar },
  ];

  // 사진 대지 데이터 (연도별)
  const photoRecords = {
    2025: [
      // Morocco 공급 실적
      { name: "Morocco", desc: "DIAPHRAGM Valve", img: "/assets/supply/2025/morocco/item1.png" },
      { name: "Morocco", desc: "DIAPHRAGM Valve", img: "/assets/supply/2025/morocco/item2.png" },
      { name: "Morocco", desc: "DIAPHRAGM Valve", img: "/assets/supply/2025/morocco/item3.png" },
      { name: "Morocco", desc: "DIAPHRAGM Valve", img: "/assets/supply/2025/morocco/item4.png" },
      { name: "Morocco", desc: "Butterfly Valve", img: "/assets/supply/2025/morocco/item5.png" },
      { name: "Morocco", desc: "Butterfly Valve", img: "/assets/supply/2025/morocco/item6.png" },
      { name: "Morocco", desc: "Butterfly Valve", img: "/assets/supply/2025/morocco/item7.png" },
      { name: "Morocco", desc: "Butterfly Valve", img: "/assets/supply/2025/morocco/item8.png" },
      // taiwan 공급 실적
      { name: "Taiwan", desc: "Diaphragm Valve", img: "/assets/supply/2025/taiwan/item1.png" },
      { name: "Taiwan", desc: "Forged Valve", img: "/assets/supply/2025/taiwan/item2.png" },
      { name: "Taiwan", desc: "Check Valve", img: "/assets/supply/2025/taiwan/item3.png" },
      { name: "Taiwan", desc: "Check Valve", img: "/assets/supply/2025/taiwan/item4.png" },
      // bucheon 공급 실적
      { name: "Bucheon, Korea", desc: "Pneumatic Valve", img: "/assets/supply/2025/bucheon/item1.png" },
      { name: "Bucheon, Korea", desc: "Pneumatic Valve", img: "/assets/supply/2025/bucheon/item2.png" },
      { name: "Bucheon, Korea", desc: "Pneumatic Valve", img: "/assets/supply/2025/bucheon/item3.png" },
      { name: "Bucheon, Korea", desc: "Pneumatic Valve", img: "/assets/supply/2025/bucheon/item4.png" },
      // icheon Hynix 공급 실적
      { name: "Icheon Hynix", desc: "Pipe", img: "/assets/supply/2025/hynix/item1.png" },
      { name: "Icheon Hynix", desc: "배관자재 입고", img: "/assets/supply/2025/hynix/item2.png" },
      { name: "Icheon Hynix", desc: "Fitting", img: "/assets/supply/2025/hynix/item3.png", rotate: true },
      { name: "Icheon Hynix", desc: "배관자재 입고", img: "/assets/supply/2025/hynix/item4.png" },
    ],
    2024: [
      // Vietnam 공급 실적
      { name: "Vietnam", desc: "Forged Valve", img: "/assets/supply/2024/vietnam/item1.png" },
      { name: "Vietnam", desc: "Butterfly Valve", img: "/assets/supply/2024/vietnam/item2.png" },
      { name: "Vietnam", desc: "Pneumatic Valves", img: "/assets/supply/2024/vietnam/item3.png" },
      { name: "Vietnam", desc: "Safety Valve", img: "/assets/supply/2024/vietnam/item4.png" },
      // Saudi
      { name: "Saudi", desc: "Lateral Pipe", img: "/assets/supply/2024/saudi/item1.png" },
      { name: "Saudi", desc: "Lateral Pipe", img: "/assets/supply/2024/saudi/item2.png" },
    ],
    2023: [
      { name: "Yeungnam, Korea", desc: "Diaphragm Valve", img: "/assets/supply/2023/item1.png" },
      { name: "Incheon, Korea", desc: "Pneumatic Valve", img: "/assets/supply/2023/item2.png" },
    ],
    2022: [
      // Taiwan 
      { name: "Taiwan", desc: "Forged Valve ", img: "/assets/supply/2022/taiwan/item1.png" },
      { name: "Taiwan", desc: "Forged Valve", img: "/assets/supply/2022/taiwan/item2.png" },
      { name: "Taiwan", desc: "Diaphragm Valve", img: "/assets/supply/2022/taiwan/item3.png" },
      { name: "Taiwan", desc: "Ball Valve", img: "/assets/supply/2022/taiwan/item4.png" },
      { name: "Taiwan", desc: "Diaphragm Valve", img: "/assets/supply/2022/taiwan/item5.png" },
      { name: "Taiwan", desc: "Diaphragm Valve", img: "/assets/supply/2022/taiwan/item6.png" },
      // saudi
      { name: "Saudi", desc: "Diaphragm Valve", img: "/assets/supply/2022/saudi/item1.png" },
      { name: "Saudi", desc: "Diaphragm Valve", img: "/assets/supply/2022/saudi/item2.png" },
      // hynix
      { name: "Icheon Hynix", desc: "STS PIPE", img: "/assets/supply/2022/hynix/item1.png" },
      { name: "Icheon Hynix", desc: "HDPE PIPE", img: "/assets/supply/2022/hynix/item2.png" },
      { name: "Icheon Hynix", desc: "FLANGE", img: "/assets/supply/2022/hynix/item3.png" },
      { name: "Icheon Hynix", desc: "Cable Tray", img: "/assets/supply/2022/hynix/item4.png" },
      { name: "Icheon Hynix", desc: "Valve", img: "/assets/supply/2022/hynix/item5.png" },
      { name: "Icheon Hynix", desc: "etc", img: "/assets/supply/2022/hynix/item6.png" },
      { name: "Icheon Hynix", desc: "etc", img: "/assets/supply/2022/hynix/item7.png" },
      { name: "Icheon Hynix", desc: "E-Jector", img: "/assets/supply/2022/hynix/item8.png" },
      // hynix ACF
      { name: "Icheon Hynix", desc: "ACF", img: "/assets/supply/2022/hynix/item9.png", rotate: true },
      { name: "Icheon Hynix", desc: "ACF", img: "/assets/supply/2022/hynix/item10.png", rotate: true },
      { name: "Icheon Hynix", desc: "ACF", img: "/assets/supply/2022/hynix/item11.png" },
      { name: "Icheon Hynix", desc: "ACF", img: "/assets/supply/2022/hynix/item12.png", rotate: true },
      { name: "Icheon Hynix", desc: "ACF", img: "/assets/supply/2022/hynix/item13.png" },
      { name: "Icheon Hynix", desc: "ACF", img: "/assets/supply/2022/hynix/item14.png" },
      { name: "Icheon Hynix", desc: "ACF", img: "/assets/supply/2022/hynix/item15.png" },
      { name: "Icheon Hynix", desc: "ACF", img: "/assets/supply/2022/hynix/item16.png" },
    ],
    before: [
      // 2021 여주
      { name: "Yeoju, Korea", desc: "Ball V/V", img: "/assets/supply/old/item1.png" },
      { name: "Yeoju, Korea", desc: "Ball V/V", img: "/assets/supply/old/item1_2.png" },
      // 2020 Taiwan
      { name: "Taiwan", desc: "Diaphragm Valve", img: "/assets/supply/old/item2.png" },
      { name: "Taiwan", desc: "Diaphragm Valve", img: "/assets/supply/old/item3.png" },
      { name: "Taiwan", desc: "Diaphragm Valve", img: "/assets/supply/old/item4.png" },
      { name: "Taiwan", desc: "Diaphragm Valve", img: "/assets/supply/old/item5.png" },
      // 2020 고성
      { name: "Goseong, Korea", desc: "Diaphragm V/v", img: "/assets/supply/old/item6.png" },
      { name: "Goseong, Korea", desc: "Diaphragm V/v", img: "/assets/supply/old/item7.png" },
      // 2020 하이닉스
      { name: "Icheon Hynix", desc: "Butterfly V/V", img: "/assets/supply/old/item8.png" },
      { name: "Icheon Hynix", desc: "PIPE", img: "/assets/supply/old/item8_2.png" },
      { name: "Icheon Hynix", desc: "Fitting", img: "/assets/supply/old/item9.png" },
      { name: "Icheon Hynix", desc: "PE Spool", img: "/assets/supply/old/item10.png", rotate: true },
      // Saudi
      { name: "Saudi", desc: "Valve", img: "/assets/supply/old/item11.png" },
      { name: "Saudi", desc: "Valve", img: "/assets/supply/old/item12.png" },
      // 2019 고성
      { name: "Goseong, Korea", desc: "Ball V/V", img: "/assets/supply/old/item13.png" },
      { name: "Goseong, Korea", desc: "Ceramic Ball V/V", img: "/assets/supply/old/item13_2.png" },
      { name: "Goseong, Korea", desc: "Ceramic Ball V/V", img: "/assets/supply/old/item13_3.png" },
      { name: "Goseong, Korea", desc: "Pneumatic Control V/V", img: "/assets/supply/old/item13_4.png" },
      { name: "Goseong, Korea", desc: "Ball V/V", img: "/assets/supply/old/item14.png" },
      { name: "Goseong, Korea", desc: "Ball V/V", img: "/assets/supply/old/item14_2.png" },
      // 2019 Saudi MARAFIQ
      { name: "Saudi", desc: "Diaphragm V/V", img: "/assets/supply/old/item15.png" },
      { name: "Saudi", desc: "Diaphragm V/V", img: "/assets/supply/old/item15_2.png" },
      // 2019 Ulsan
      { name: "Ulsan, Korea", desc: "Pneumatic Valve", img: "/assets/supply/old/item16.png" },
      { name: "Ulsan, Korea", desc: "Pneumatic Valve", img: "/assets/supply/old/item16_2.png" },
      { name: "Ulsan, Korea", desc: "Casting Valve", img: "/assets/supply/old/item17.png" },
      { name: "Ulsan, Korea", desc: "Casting Valve", img: "/assets/supply/old/item17_2.png" },
      // 2019 Turkmenistan 
      { name: "Turkmenistan", desc: "Butterfly Valve", img: "/assets/supply/old/item18.png" },
      { name: "Turkmenistan", desc: "Butterfly Valve", img: "/assets/supply/old/item18_2.png" },
      // 2018 OMAN
      { name: "OMAN", desc: "Diaphragm Valve", img: "/assets/supply/old/item21.png" },
      { name: "OMAN", desc: "Diaphragm Valve", img: "/assets/supply/old/item22.png" },
      // 2018 울진 신한울
      { name: "Uljin, Korea", desc: "Pneumatic Valve", img: "/assets/supply/old/item19.png", rotate: true },
      { name: "Uljin, Korea", desc: "Pneumatic Valve", img: "/assets/supply/old/item19_2.png", rotate: true },
      // 2018 신고리
      { name: "Shin-Kori, Korea", desc: "Pneumatic Valve", img: "/assets/supply/old/item23.png" },
      { name: "Shin-Kori, Korea", desc: "Pneumatic Valve", img: "/assets/supply/old/item24.png" },
      { name: "Shin-Kori, Korea", desc: "Strainer", img: "/assets/supply/old/item25.png" },
      { name: "Shin-Kori, Korea", desc: "Strainer", img: "/assets/supply/old/item26.png" },
      // 2017 포천
      { name: "Pocheon, Korea", desc: "Pneumatic V/V", img: "/assets/supply/old/item27.png" },
      { name: "Pocheon, Korea", desc: "Pneumatic V/V", img: "/assets/supply/old/item28.png" },
      { name: "Pocheon, Korea", desc: "Pneumatic V/V", img: "/assets/supply/old/item29.png" },
      { name: "Pocheon, Korea", desc: "Pneumatic V/V", img: "/assets/supply/old/item30.png" },
      // 2017 울산
      { name: "Ulsan, Korea", desc: "Diaphragm Valve", img: "/assets/supply/old/item31.png" },
      { name: "Ulsan, Korea", desc: "Diaphragm Valve", img: "/assets/supply/old/item32.png" },
      // 2017 Uzbekistan
      { name: "Uzbekistan", desc: "Valve", img: "/assets/supply/old/item33.png" },
      { name: "Uzbekistan", desc: "Valve", img: "/assets/supply/old/item34.png" },
    ],
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. 상단 헤더 섹션 */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('supply.title')}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            {t('supply.description')}
          </p>
        </div>
      </div>

      {/* 2. 서브 탭 메뉴 */}
      <div className="sticky top-20 z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 md:space-x-12 overflow-x-auto z-10">
            {supplyTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
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

      {/* 3. 컨텐츠 영역 */}
      <div className="container mx-auto px-4 py-16 min-h-[600px]">
        {activeTab === 'summary' ? (
          /* 종합 실적 표 */
          <div className="animate-fade-in overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-24">{t('supply.table.year')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-48">{t('supply.table.client')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('supply.table.project')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('supply.table.item')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {summaryRecords.map((record, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600">{record.year}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{record.client}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{record.project}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{record.item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* 연도별 사진 대지 (공급처별 그룹화) */
          <div className="animate-fade-in space-y-16">
            {Object.entries(
              (photoRecords[activeTab] || []).reduce((acc, item) => {
                // 'Korea'가 포함된 명칭은 'Korea'로 통합 그룹화
                const groupName = item.name.includes('Korea') ? 'Korea' : item.name;
                if (!acc[groupName]) acc[groupName] = [];
                acc[groupName].push(item);
                return acc;
              }, {})
            ).map(([clientName, items]) => (
              <div key={clientName} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-bold text-gray-900">{clientName}</h3>
                  <div className="h-px flex-1 bg-gray-200"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((item, index) => (
                    <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="h-48 bg-gray-200 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-gray-400">
                           <ImageIcon size={32} opacity={0.2} />
                        </div>
                        <img 
                          src={item.img} 
                          alt={item.desc} 
                          loading="lazy"
                          className={`w-full h-full relative z-auto transition-transform duration-500 group-hover:scale-110 ${
                            item.rotate 
                            ? 'rotate-[270deg] scale-[1.4] object-contain' 
                            : 'object-cover'
                          }`} 
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-gray-700 line-clamp-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Supply