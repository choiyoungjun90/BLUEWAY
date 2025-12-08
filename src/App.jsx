import { useState, useEffect } from 'react'; // useEffect 추가 필수
import { Globe, Menu, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Ceo from './components/Ceo.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// 네비게이션 바 컴포넌트
const Navbar = ({ setActiveTab }) => {
  const { i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 px-8 py-6 flex justify-between items-center text-black bg-white">
      {/* 로고 영역 */}
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={() => setActiveTab('home')}
      >
        {/* 이미지는 public/logo/logo.png 에 있어야 함 */}
        <img src="/assets/logo/logo.png" alt="Logo" className="h-14 w-14 bg-white rounded-full" />
        <h1 className="text-2xl font-bold tracking-wide">BLUEWAY</h1>
      </div>

      {/* 메뉴 링크 (데스크탑) */}
      <div className="hidden md:flex gap-8 text-xl font-medium tracking-wide text-gray-800">
        <button onClick={() => setActiveTab('home')} className="hover:text-gray-400 transition">Home</button>
        <button onClick={() => setActiveTab('about')} className="hover:text-gray-400 transition">About</button>
        <button onClick={() => setActiveTab('products')} className="hover:text-gray-400 transition">Products</button>
        <button onClick={() => setActiveTab('contact')} className="hover:text-gray-400 transition">Contact Us</button>
      </div>

      {/* 우측 아이콘 (언어 설정) */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 hover:text-lime-400 transition focus:outline-none"
          >
            <Globe size={20} />
            <span className="uppercase text-sm font-semibold">{i18n.language === 'ko' ? 'KO' : 'EN'}</span>
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 text-gray-800 z-50 overflow-hidden">
              <button
                onClick={() => changeLanguage('ko')}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-lime-50 transition ${i18n.language === 'ko' ? 'font-bold text-lime-600' : ''}`}
              >
                한국어
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-lime-50 transition ${i18n.language === 'en' ? 'font-bold text-lime-600' : ''}`}
              >
                English
              </button>
            </div>
          )}
        </div>

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

// 메인 히어로 섹션 컴포넌트 (수정됨)
const HeroSection = () => {
  // 사용할 배경 이미지 목록 (public/assets 폴더에 해당 파일들이 있어야 함)
  const heroImages = [
    "/assets/background1.jpg",   // 기존 이미지
    "/assets/background2.jpg",  // 추가 이미지 1
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // 5000ms = 5초

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <section className="relative h-[85vh] w-full bg-gray-900 flex items-center overflow-hidden">
      {/* 배경 이미지 슬라이더 */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt={`background-${index}`}
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        ))}
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 md:px-16">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
           BLUEWAY
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-light mb-8 max-w-lg">
            We are planning to grow as a global corporation that maximize customer satisfaction with best prices, highest quality, on-time delivery, and strong supply chain establishment. 
          </p>
        </div>
      </div>

    </section>
  );
};

// [누락되었던 StatsSection 복구]
const StatsSection = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Global Network</h3>
        <p className="text-gray-600">Connecting businesses worldwide with trust and quality.</p>
      </div>
    </section>
  );
};

// 메인 앱 컴포넌트
export default function AgroLinkPage() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HeroSection />
            <Ceo />
            <StatsSection />
            <Footer />
          </>
        );
      case 'about':
        return (
          <div className="pt-24">
            <About />
            <Footer />
          </div>
        );
      case 'products':
        return (
          <div className="pt-24">
            <Products />
            <Footer />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-24">
            <Contact />
            <Footer />
          </div>
        );
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Navbar는 항상 위에 고정, setActiveTab 함수 전달 */}
      <Navbar setActiveTab={setActiveTab} />
      
      {/* 메인 컨텐츠 영역 */}
      <main>
        {renderContent()}
      </main>
    </div>
  );
}