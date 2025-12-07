import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Package, Settings, Wrench, ArrowRight } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('piping');

  // 탭 메뉴 데이터
  const productTabs = [
    { id: 'piping', label: 'Materials', icon: Package },
    { id: 'instrument', label: 'Instrumentation', icon: Settings },
    { id: 'fabrication', label: 'Fabrication', icon: Wrench },
  ];

  // 제품 데이터
  const productsData = {
    piping: [
      { name: "VALVE", desc: "BALL / GATE / GLOBE / CHECK VALVE", img: "src/assets/item1.png" },
      { name: "VALVE", desc: "PNEUMATIC VALVE CONTROL VALVE", img: "src/assets/item2.png" },
      { name: "MOTOR", desc: "CENTRIFUGAL PUMP METERING PUMP MAGNETIC PUMP", img: "src/assets/item3.png" },
      { name: "PLATE", desc: "CARBON STEEL STAINLESS TITANIUM ALLOY", img: "src/assets/item4.png" },
    ],
    instrument: [
      { name: "Pressure Gauges", desc: "High precision pressure monitoring", img: "/assets/product_gauge.jpg" },
      { name: "Flow Meters", desc: "Electromagnetic, Vortex, Ultrasonic", img: "/assets/product_flow.jpg" },
      { name: "Transmitters", desc: "Pressure, Temperature, Level transmitters", img: "/assets/product_trans.jpg" },
    ],
    fabrication: [
      { name: "Spool Fabrication", desc: "Customized pipe spools for plants", img: "/assets/product_spool.jpg" },
      { name: "Skid Packages", desc: "Modular process skid units", img: "/assets/product_skid.jpg" },
      { name: "Welding Services", desc: "Certified welding for critical applications", img: "/assets/product_weld.jpg" },
    ]
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. 상단 헤더 섹션 */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('products.title')}</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            {t('products.description')}
          </div>
        </div>
      </div>

      {/* 2. 서브 탭 메뉴 */}
      <div className="sticky top-20 z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 md:space-x-12 overflow-x-auto">
            {productTabs.map((tab) => {
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

      {/* 3. 탭 컨텐츠 영역 (제품 그리드) */}
      <div className="container mx-auto px-4 py-16 min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {productsData[activeTab].map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              {/* 제품 이미지 영역 */}
              <div className="h-64 bg-gray-200 overflow-hidden relative">
                {/* 기본 아이콘 (이미지 로드 전이나 실패 시 보임) */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-gray-400">
                   <Package size={48} opacity={0.2} />
                </div>
                
                {/* 이미지 태그 수정: key를 추가하여 탭 변경 시 강제 리렌더링 유도 */}
                <img 
                  key={item.img} 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full relative z-10" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>

              {/* 제품 정보 영역 */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;