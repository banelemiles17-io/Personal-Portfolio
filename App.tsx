import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                if (domRef.current) {
                    observer.unobserve(domRef.current);
                }
            }
        });
        if (domRef.current) {
            observer.observe(domRef.current);
        }
        return () => observer.disconnect();
    }, []);
    return (
        <div ref={domRef} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};


const App: React.FC = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

  return (
    <div className="bg-[#18181b]/50 font-sans leading-relaxed text-slate-300 selection:bg-teal-500/30"
         style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.1), transparent 80%)`
         }}
    >
      <Header />
      <main className="pt-16">
        <Hero />
        <div className="container mx-auto max-w-screen-xl px-6 pb-20 md:px-12 lg:px-8">
            <FadeIn><About /></FadeIn>
            <FadeIn><Experience /></FadeIn>
            <FadeIn><Skills /></FadeIn>
            <FadeIn><Projects /></FadeIn>
            <FadeIn><Certificates /></FadeIn>
            <FadeIn><Contact /></FadeIn>
            <FadeIn><Footer /></FadeIn>
        </div>
      </main>
    </div>
  );
};

export default App;