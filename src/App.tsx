import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  MessageCircle, CheckCircle2, BookOpen, Video, Users, 
  Brain, Target, Calendar, Clock, Mic2, 
  PlayCircle, ChevronRight, ChevronLeft, ArrowDown, ChevronDown,
  ShieldCheck, Zap, Sparkles, Timer
} from 'lucide-react';

const WHATSAPP_LINK = "https://chat.whatsapp.com/JDKCuEGFgabLxoHjfga1NV";

// --- REUSABLE COMPONENTS ---

interface CTAButtonProps {
  className?: string;
  text?: string;
  icon?: boolean;
}

function CTAButton({ className = '', text = 'JOIN FREE COMMUNITY', icon = true }: CTAButtonProps) {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0, 255, 102, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden inline-flex items-center justify-center px-6 py-4 text-sm sm:text-base md:text-lg font-bold text-black bg-gradient-to-r from-[#00FF66] to-[#00cc52] rounded-full shadow-[0_0_20px_rgba(0,255,102,0.3)] transition-all duration-300 w-full sm:w-auto ${className} group`}
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      {icon && <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 animate-pulse text-black relative z-10" />}
      <span className="relative z-10">{text}</span>
    </motion.a>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#00FF66] origin-left z-[100] shadow-[0_0_10px_rgba(0,255,102,0.5)]"
      style={{ scaleX }}
    />
  );
}

function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020202]">
      {/* Premium subtle gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#00FF66]/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00FF66]/5 rounded-full blur-[120px]"></div>
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]"></div>
      
      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020202]/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-[#00FF66] to-blue-500 shadow-[0_0_15px_rgba(0,255,102,0.2)]">
            <img 
              src="https://iili.io/CYGhM8P.png" 
              alt="Alok Rawat" 
              className="w-full h-full rounded-full border border-black object-cover"
            />
          </div>
          <span className="font-bold text-white tracking-wide text-base sm:text-lg">Alok Rawat</span>
        </div>
        <a 
          href={WHATSAPP_LINK} 
          className="px-4 py-2 bg-white/5 hover:bg-[#00FF66] hover:text-black text-white text-xs sm:text-sm font-bold rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-[#00FF66] shadow-lg"
        >
          Join Free
        </a>
      </div>
    </header>
  );
}

// --- SECTIONS ---

function Hero() {
  const badges = [
    'Free WhatsApp Community',
    'Free Mega Live Webinar',
    'Beginner Friendly',
    'Step By Step Roadmap',
  ];

  return (
    <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 min-h-[90vh] justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 text-gray-300 text-[10px] sm:text-xs mb-4 border border-white/10 backdrop-blur-md shadow-2xl"
      >
        <span className="flex h-2 w-2 relative mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        For Students, Job Holders, Housewives & Beginners
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6 max-w-5xl drop-shadow-2xl px-2"
      >
        Learn High-Income Digital Skills & <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-emerald-400 drop-shadow-[0_0_30px_rgba(0,255,102,0.3)]">
          Build An Online Income Source From Home
        </span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 w-full max-w-4xl"
      >
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
            <ShieldCheck className="w-5 h-5 text-[#00FF66] shrink-0" />
            <span className="text-gray-200 font-medium text-sm sm:text-base">{badge}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full sm:w-auto flex flex-col items-center gap-4"
      >
        <CTAButton text="JOIN FREE WHATSAPP COMMUNITY" className="w-full sm:px-12 py-5 sm:text-xl" />
        
        <a 
          href="#proof" 
          className="inline-flex items-center justify-center px-8 py-3 mt-4 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          See Success Stories <ArrowDown className="w-4 h-4 ml-2 animate-bounce text-[#00FF66]" />
        </a>
        <a 
          href="#webinar" 
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          See Webinar Details <ArrowDown className="w-4 h-4 ml-2 animate-bounce text-[#00FF66]" />
        </a>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 relative z-10 border-t border-white/5 bg-[#050505]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12 flex justify-center"
          >
            {/* Premium Glowing Avatar */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00FF66] to-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[#00FF66]/50 bg-[#111]">
                <img 
                  src="https://iili.io/CYGhM8P.png" 
                  alt="Alok Rawat" 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-7/12 text-center md:text-left space-y-6"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-[#00FF66]/10 text-[#00FF66] rounded-full text-xs font-semibold border border-[#00FF66]/20 uppercase tracking-wider">
              Meet Your Mentor
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Hi, I'm Alok Rawat <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              <p>
                I help students, job holders, housewives, and beginners learn practical digital skills and understand modern online opportunities.
              </p>
              <p>
                Inside the community, I regularly share updates, learning resources, webinar information, and step-by-step growth strategies.
              </p>
              <div className="pt-4">
                <p className="font-medium text-[#00FF66] bg-[#00FF66]/5 inline-flex items-center px-5 py-3 rounded-xl border border-[#00FF66]/20">
                  <Sparkles className="w-5 h-5 mr-2 shrink-0" />
                  Agar aap genuinely seekhna chahte hain — main aapko result tak le jaaunga.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Proof() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const youtubeLinks = [
    "https://www.youtube.com/embed/68kWLRrBgBk?rel=0",
    "https://www.youtube.com/embed/boghv2bp2IQ?rel=0",
    "https://www.youtube.com/embed/W75vge8uEDw?rel=0",
    "https://www.youtube.com/embed/PvgBZBlplKo?rel=0",
    "https://www.youtube.com/embed/Yo6No4MIn2Q?rel=0",
    "https://www.youtube.com/embed/jih_7RyzLss?rel=0",
    "https://www.youtube.com/embed/tCPsnNiySn4?rel=0"
  ];

  const VideoCard: React.FC<{ src: string, index: number }> = ({ src, index }) => (
    <div className="snap-center shrink-0 w-[80vw] sm:w-[300px] aspect-[9/16] bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden relative flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] group hover:border-[#00FF66]/40 transition-colors">
      <iframe 
        src={src}
        title={`Success Story ${index + 1}`}
        className="w-full h-full border-0 z-10 relative"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
      <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm text-white text-xs py-2.5 font-medium text-center rounded-b-3xl z-20 pointer-events-none border-t border-white/10">
        Community Member
      </div>
    </div>
  );

  return (
    <section id="proof" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#020202] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/20 uppercase tracking-wider mb-6">
            Social Proof
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Real People. <span className="text-[#00FF66]">Real Progress.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            See how others are taking action and growing inside the community.
          </p>
        </div>

        <div className="relative max-w-[100vw] sm:max-w-full -mx-4 sm:mx-0">
          <button 
            onClick={() => slide('left')}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 bg-black/80 backdrop-blur-md p-3 sm:p-4 rounded-full border border-white/20 text-white hover:text-[#00FF66] hover:border-[#00FF66] transition-all shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button 
            onClick={() => slide('right')}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 bg-black/80 backdrop-blur-md p-3 sm:p-4 rounded-full border border-white/20 text-white hover:text-[#00FF66] hover:border-[#00FF66] transition-all shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-8 hide-scrollbar px-4 sm:px-2 pt-4"
          >
            {youtubeLinks.map((link, idx) => (
              <VideoCard key={idx} src={link} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefitsList = [
    { icon: <Zap className="w-6 h-6 text-[#00FF66]" />, title: "High Income Skills" },
    { icon: <Video className="w-6 h-6 text-[#00FF66]" />, title: "Weekly Live Webinar" },
    { icon: <Target className="w-6 h-6 text-[#00FF66]" />, title: "Clear Roadmap" },
    { icon: <Users className="w-6 h-6 text-[#00FF66]" />, title: "Community Support" },
    { icon: <Calendar className="w-6 h-6 text-[#00FF66]" />, title: "Daily Learning" },
    { icon: <Brain className="w-6 h-6 text-[#00FF66]" />, title: "Free Mentorship" }
  ];

  return (
    <section className="py-20 bg-[#020202] border-t border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Get Inside <span className="text-[#00FF66]">The Community</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Everything you need to start your digital journey.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mb-12">
          {benefitsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-[#00FF66]/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col sm:flex-row items-center sm:text-left text-center gap-3 sm:gap-4 group"
            >
              <div className="bg-[#00FF66]/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-200">{item.title}</h3>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <CTAButton text="GET ACCESS NOW" className="px-10" />
        </div>
      </div>
    </section>
  );
}

function WhyJoinToday() {
  const points = [
    "WhatsApp Community Access",
    "Live Webinar Access",
    "Beginner Roadmap",
    "Daily Learning",
    "Lifetime Access"
  ];

  return (
    <section className="py-20 relative z-10 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF66]/5 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why Join Today?</h2>
              <p className="text-gray-400 mb-8 md:mb-0">Aaj Join Karne Par Aapko Milega:</p>
            </div>
            
            <div className="w-full md:w-1/2 space-y-4">
              {points.map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center space-x-3 bg-white/5 p-3 sm:p-4 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00FF66] shrink-0" />
                  <span className="text-gray-200 font-medium text-sm sm:text-base">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Webinar() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [status, setStatus] = useState<'LIVE' | 'TODAY' | 'UPCOMING'>('UPCOMING');
  const [statusText, setStatusText] = useState('');

  useEffect(() => {
    const calculateWebinarTime = () => {
      const now = new Date();
      // Calculate IST time (UTC + 5:30)
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istNow = new Date(utc + (3600000 * 5.5));
      
      const currentHour = istNow.getHours();
      const currentMinute = istNow.getMinutes();

      // Live from 7:00 PM (19) to 8:30 PM
      if (currentHour === 19 || (currentHour === 20 && currentMinute <= 30)) {
        setStatus('LIVE');
        return;
      }

      // Today before 7 PM
      if (currentHour < 19) {
        setStatus('TODAY');
        setStatusText("Today, Evening 7:00 PM");
        
        const target = new Date(istNow);
        target.setHours(19, 0, 0, 0);
        
        const diff = target.getTime() - istNow.getTime();
        updateTimeLeft(diff);
        return;
      }

      // Upcoming day (Tomorrow)
      setStatus('UPCOMING');
      setStatusText("Tomorrow, Evening 7:00 PM");
      
      const target = new Date(istNow);
      target.setDate(istNow.getDate() + 1);
      target.setHours(19, 0, 0, 0);
      
      const diff = target.getTime() - istNow.getTime();
      updateTimeLeft(diff);
    };

    const updateTimeLeft = (diffMs: number) => {
      const totalSeconds = Math.floor(diffMs / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      
      setTimeLeft({ days: 0, hours, minutes, seconds });
    };

    calculateWebinarTime();
    const interval = setInterval(calculateWebinarTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="webinar" className="py-24 relative z-10 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 bg-red-500/10 text-red-400 rounded-full text-xs font-semibold border border-red-500/20 uppercase tracking-wider mb-6">
            Exclusive Access
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            FREE LIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-[#00b347]">MEGA WEBINAR</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto items-stretch">
          {/* Left Col - Date Time info (Screenshot 2 style) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4">
            <div className="bg-[#111] border border-white/5 rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5">
              <div className="bg-[#00FF66]/10 p-3 rounded-xl shrink-0">
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-[#00FF66]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Schedule</p>
                <p className="text-white font-bold text-base sm:text-lg">Every Day</p>
              </div>
            </div>

            <div className="bg-[#111] border border-white/5 rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5">
              <div className="bg-[#00FF66]/10 p-3 rounded-xl shrink-0">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#00FF66]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Time</p>
                <p className="text-white font-bold text-base sm:text-lg">7:00 PM</p>
              </div>
            </div>

            <div className="bg-[#111] border border-white/5 rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5">
              <div className="bg-[#00FF66]/10 p-3 rounded-xl shrink-0">
                <Mic2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#00FF66]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Hosted By Founder</p>
                <p className="text-white font-bold text-base sm:text-lg">Yash Kulshrestha <span className="text-gray-500 text-xs sm:text-sm font-normal">(Hindi)</span></p>
              </div>
            </div>

            <div className="bg-[#111] border border-white/5 rounded-2xl p-4 flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-gray-300 mt-2">
              <span className="flex items-center"><span className="text-[#00FF66] mr-1.5">✓</span> No experience</span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center"><span className="text-[#00FF66] mr-1.5">✓</span> No tech background</span>
            </div>
          </div>

          {/* Right Col - Timer Card (Screenshot 1 style) */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#111] border border-white/5 rounded-[2rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              
              <div className="inline-flex self-start items-center px-4 py-1.5 bg-red-500/10 text-red-500 rounded-full text-xs font-semibold border border-red-500/20 tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                Next Webinar
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                Free Live Webinar — Learn How to Build an Online Business from Home
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mb-6">
                Join Our Live Webinar – Daily at 7:00 PM
              </p>

              {status === 'LIVE' ? (
                <p className="text-gray-400 text-xs sm:text-sm font-medium mb-4">
                  Status: <span className="text-[#00FF66] font-bold">LIVE RIGHT NOW</span>
                </p>
              ) : (
                <p className="text-gray-400 text-xs sm:text-sm font-medium mb-4">
                  Next Webinar: <span className="text-[#00FF66]">{statusText}</span>
                </p>
              )}

              {status === 'LIVE' ? (
                 <div className="flex flex-col py-2">
                    <div className="w-full border border-[#00FF66]/20 bg-[#00FF66]/5 rounded-xl py-4 px-2 text-center mb-6">
                      <p className="text-[#00FF66] font-medium text-sm sm:text-base">Webinar is LIVE right now — Join Now!</p>
                    </div>
                    <CTAButton text="JOIN LIVE WEBINAR NOW" className="w-full py-3.5 sm:py-4 text-sm sm:text-base mb-6 border-none bg-[#00FF66] text-black font-bold hover:bg-[#00cc52]" icon={false} />
                 </div>
              ) : (
                <>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                    {[
                      { value: timeLeft.hours, label: 'HOURS' },
                      { value: timeLeft.minutes, label: 'MINUTES' },
                      { value: timeLeft.seconds, label: 'SECONDS' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl flex flex-col items-center justify-center aspect-square border border-white/5 shadow-inner">
                        <div className="text-3xl sm:text-4xl font-bold text-[#00FF66] mb-1">
                          {String(item.value).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-medium">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <CTAButton 
                    text="RESERVE YOUR SEAT — FREE" 
                    className="w-full mt-auto py-3.5 sm:py-4 text-xs sm:text-sm mb-2 border-none bg-[#00FF66] text-black font-bold" 
                    icon={false} 
                  />
                </>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "Kya ye community free hai?", a: "Haan, 100% free hai. Community join karna free, webinar attend karna free hai." },
    { q: "Mujhe koi experience chahiye seekhne ke liye?", a: "Bilkul nahi. Ye community specifically un logon ke liye hai jo zero se shuru karna chahte hain. Koi bhi background ho." },
    { q: "Webinar miss ho gayi toh kya hoga?", a: "Webinar har din community mein share ki jaati hai. Aap jis din attend na kar sako to next day attend kar sakte ho." },
    { q: "Kya main sirf phone se join kar sakta hun?", a: "Haan, Mobile se poora kaam chalega." },
    { q: "Ye community kab se hai aur kaun chalata hai?", a: "Ye community Alok Rawat chalate hain. Yahan real learning hoti hai — koi spam nahi, koi unnecessary messages nahi." },
    { q: "Ye webinar Hindi language mai hoga?", a: "Haan, ye full webinar hindi mai hi hoga." }
  ];

  return (
    <section className="py-20 relative z-10 bg-[#050505] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Frequently Asked <span className="text-[#00FF66]">Questions</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white/[0.02] border ${openIdx === idx ? 'border-[#00FF66]/30' : 'border-white/5'} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className={`font-semibold text-sm sm:text-base ${openIdx === idx ? 'text-[#00FF66]' : 'text-gray-200'}`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 shrink-0 ${openIdx === idx ? 'rotate-180 text-[#00FF66]' : 'text-gray-500'}`} />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-400 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 relative z-10 border-t border-white/5 bg-[#020202]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-gradient-to-b from-[#111] to-[#050505] border border-white/10 rounded-[3rem] p-10 sm:p-14 shadow-[0_0_80px_rgba(0,255,102,0.05)] relative overflow-hidden">
          
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 relative z-10 leading-tight text-white tracking-tight">
            Your Future Won't Change By <span className="text-gray-600 line-through decoration-2">Scrolling</span>.
          </h2>
          <p className="text-lg sm:text-xl text-[#00FF66] mb-10 font-medium relative z-10">
            Seekhna shuru karo. Aaj. Abhi. Yahan se.
          </p>
          
          <div className="relative z-10 flex flex-col items-center">
            <CTAButton text="START YOUR JOURNEY TODAY" className="w-full sm:w-auto py-5 px-10 text-lg" icon={false} />
            <p className="mt-8 text-gray-400 text-sm flex items-center font-medium">
              <ShieldCheck className="w-4 h-4 mr-2 text-[#00FF66]" />
              No Experience Needed. No Risk. Just Show Up & Learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTimeout = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        
        scrollTimeout.current = setTimeout(() => {
          setIsVisible(false);
        }, 2500);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-0 right-0 sm:hidden z-50 flex justify-center px-6 pointer-events-none"
        >
          <div className="pointer-events-auto w-full max-w-[280px]">
            <a
              href={WHATSAPP_LINK}
              className="flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-[#00FF66] to-[#00cc52] text-black font-bold text-sm rounded-full shadow-[0_10px_30px_rgba(0,255,102,0.3)] active:scale-95 transition-transform border border-white/20"
            >
              <MessageCircle className="w-4 h-4 mr-2 animate-pulse" />
              JOIN COMMUNITY NOW
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ActionCards() {
  const cards = [
    { title: "Daily Live Webinar", desc: "Learn directly from the experts.", icon: <Video className="w-5 h-5 text-[#00FF66]" /> },
    { title: "Step By Step Roadmap", desc: "Clear path from beginner to pro.", icon: <Target className="w-5 h-5 text-[#00FF66]" /> },
    { title: "24/7 Community Support", desc: "Get answers to your queries.", icon: <Users className="w-5 h-5 text-[#00FF66]" /> },
  ];

  return (
    <section className="py-10 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:border-[#00FF66]/30 transition-all flex flex-col items-center text-center gap-2"
            >
              <div className="bg-[#00FF66]/10 p-3 rounded-full">
                {card.icon}
              </div>
              <h3 className="text-sm font-bold text-white">{card.title}</h3>
              <p className="text-xs text-gray-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#020202] font-sans overflow-x-hidden selection:bg-[#00FF66]/30 selection:text-[#00FF66] text-gray-300 relative pb-10 sm:pb-0">
      <ProgressBar />
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <ActionCards />
        <Proof />
        <Benefits />
        <WhyJoinToday />
        <Webinar />
        <FAQ />
        <FinalCTA />
      </main>
      <FloatingCTA />
    </div>
  );
}
