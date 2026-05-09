'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { heroSlides } from '@/index';

/* ─────────────────────────────────────────────
   DESIGN SYSTEM
   - Font: Syne (display) + DM Sans (body) via next/font or CDN
   - Palette: #03080F base, #00EEFF cyan, #0047FF electric blue
   - Motion: CSS keyframes + JS opacity crossfade
   - Layout: full-screen split, asymmetric grid
───────────────────────────────────────────── */

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const SLIDE_DURATION = 8000;

  const goToSlide = (index) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
      return;
    }

    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (100 / (SLIDE_DURATION / 50)), 100));
    }, 50);

    intervalRef.current = setInterval(() => {
      setProgress(0);
      setPrevSlide((s) => s);
      setCurrentSlide((prev) => {
        const next = (prev + 1) % heroSlides.length;
        setPrevSlide(prev);
        return next;
      });
    }, SLIDE_DURATION);

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, [isPlaying, currentSlide]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Kawsar.pdf';
    link.download = 'Kawsar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const slide = heroSlides[currentSlide];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --cyan: #00EEFF;
          --blue: #0047FF;
          --bg: #03080F;
          --surface: #070E18;
          --glass: rgba(0,238,255,0.06);
          --border: rgba(0,238,255,0.12);
          --text-dim: rgba(180,200,220,0.65);
        }

        .hero-root {
          position: relative;
          min-height: 100svh;
          background: var(--bg);
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          padding-top: 80px;
        }

        /* Atmospheric background */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 70% 20%, rgba(0,71,255,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 30% 80%, rgba(0,238,255,0.08) 0%, transparent 55%);
          pointer-events: none;
        }

        /* Grid noise texture */
        .hero-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,238,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,238,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
        }

        /* ── LAYOUT ── */
        .hero-inner {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
          min-height: calc(100svh - 80px);
        }

        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            text-align: center;
            gap: 32px;
            padding-top: 40px;
            padding-bottom: 100px;
          }
          .hero-text { order: 2; }
          .hero-visual { order: 1; }
          .hero-actions { justify-content: center !important; }
          .hero-tags { justify-content: center !important; }
          .label-line { justify-content: center !important; }
        }

        /* ── TEXT PANEL ── */
        .hero-text { display: flex; flex-direction: column; gap: 28px; }

        .label-line {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .label-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 12px var(--cyan);
          flex-shrink: 0;
        }

        .label-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--cyan);
          opacity: 0.85;
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0;
        }

        .hero-name .gradient-name {
          background: linear-gradient(135deg, var(--cyan) 0%, #60A5FF 50%, var(--cyan) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .hero-slide-title {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.4rem, 2.8vw, 2.1rem);
          font-weight: 600;
          color: rgba(255,255,255,0.88);
          margin-top: 6px;
        }

        .hero-subtitle {
          display: block;
          font-size: clamp(0.8rem, 1.4vw, 0.95rem);
          font-weight: 400;
          color: var(--text-dim);
          margin-top: 4px;
          letter-spacing: 0.02em;
        }

        .hero-desc {
          font-size: clamp(0.875rem, 1.3vw, 1rem);
          color: var(--text-dim);
          line-height: 1.75;
          max-width: 460px;
          margin: 0;
        }

        @media (max-width: 900px) {
          .hero-desc { max-width: 100%; }
        }

        /* ── TAGS ── */
        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          padding: 5px 14px;
          border-radius: 100px;
          background: var(--glass);
          border: 1px solid var(--border);
          color: var(--cyan);
          transition: all 0.25s;
          cursor: default;
        }

        .tag:hover {
          background: rgba(0,238,255,0.15);
          border-color: rgba(0,238,255,0.4);
          transform: translateY(-1px);
        }

        /* ── ACTIONS ── */
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: var(--cyan);
          color: #000;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
          text-decoration: none;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.3), transparent);
          opacity: 0;
          transition: opacity 0.25s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0,238,255,0.35);
        }

        .btn-primary:hover::after { opacity: 1; }

        .btn-primary:active { transform: translateY(0); }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: transparent;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.18);
          cursor: pointer;
          transition: all 0.25s;
          text-decoration: none;
          white-space: nowrap;
        }

        .btn-outline:hover {
          border-color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.05);
          transform: translateY(-2px);
        }

        /* ── VISUAL PANEL ── */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        /* Rings */
        .ring-container {
          position: relative;
          width: clamp(260px, 35vw, 420px);
          height: clamp(260px, 35vw, 420px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid transparent;
        }

        .ring-1 {
          inset: 0;
          border-color: rgba(0,238,255,0.12);
          animation: rotateRing 20s linear infinite;
        }

        .ring-1::before {
          content: '';
          position: absolute;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 16px var(--cyan);
          top: 50%; left: -4px;
          transform: translateY(-50%);
        }

        .ring-2 {
          inset: 16px;
          border-color: rgba(0,71,255,0.15);
          animation: rotateRing 30s linear infinite reverse;
        }

        .ring-2::before {
          content: '';
          position: absolute;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #60A5FF;
          box-shadow: 0 0 12px #60A5FF;
          bottom: 10%; right: -3px;
        }

        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Avatar */
        .avatar-frame {
          position: relative;
          z-index: 2;
          width: clamp(180px, 22vw, 280px);
          height: clamp(180px, 22vw, 280px);
          border-radius: 50%;
          animation: floatAvatar 5s ease-in-out infinite;
        }

        @keyframes floatAvatar {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }

        .avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(0,238,255,0.3);
          position: relative;
          background: var(--surface);
        }

        .avatar-inner::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow: inset 0 0 40px rgba(0,238,255,0.1);
        }

        .avatar-glow {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,238,255,0.18) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Slide transition */
        .slide-enter {
          animation: slideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── BOTTOM CONTROLS ── */
        .hero-controls {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 20px;
          z-index: 20;
        }

        .progress-dots {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dot-wrap {
          position: relative;
          width: 32px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.12);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .dot-wrap:hover { transform: scaleY(1.5); }

        .dot-fill {
          position: absolute;
          inset: 0;
          border-radius: 2px;
          background: var(--cyan);
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 0.05s linear;
        }

        .dot-fill.active-dot { }

        .dot-wrap.is-current .dot-fill {
          background: var(--cyan);
        }

        .dot-wrap.is-past .dot-fill {
          transform: scaleX(1);
          background: rgba(0,238,255,0.45);
        }

        /* Play/Pause */
        .play-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(0,238,255,0.08);
          border: 1px solid rgba(0,238,255,0.2);
          color: var(--cyan);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 16px;
          flex-shrink: 0;
        }

        .play-btn:hover {
          background: rgba(0,238,255,0.18);
          border-color: rgba(0,238,255,0.5);
        }

        /* ── SIDE NUMBER ── */
        .slide-number {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 20;
        }

        .num-current {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--cyan);
          line-height: 1;
        }

        .num-divider {
          width: 1px;
          height: 32px;
          background: rgba(0,238,255,0.25);
        }

        .num-total {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.25);
        }

        @media (max-width: 900px) {
          .slide-number { display: none; }
        }

        /* ── CORNER DECORATION ── */
        .corner-tl, .corner-br {
          position: absolute;
          width: 60px; height: 60px;
          pointer-events: none;
          z-index: 5;
        }

        .corner-tl {
          top: 120px; left: 24px;
          border-top: 1px solid rgba(0,238,255,0.2);
          border-left: 1px solid rgba(0,238,255,0.2);
        }

        .corner-br {
          bottom: 80px; right: 24px;
          border-bottom: 1px solid rgba(0,238,255,0.2);
          border-right: 1px solid rgba(0,238,255,0.2);
        }

        /* Social/stat strip */
        .stat-strip {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }

        .stat-label {
          font-size: 11px;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .stat-sep {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.1);
        }

        /* Download icon */
        .dl-icon {
          width: 18px; height: 18px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          flex-shrink: 0;
        }

        /* Arrow icon */
        .arrow-icon {
          width: 16px; height: 16px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: transform 0.2s;
          flex-shrink: 0;
        }

        .btn-outline:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* Availability badge */
        .avail-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(0,255,120,0.06);
          border: 1px solid rgba(0,255,120,0.18);
          font-size: 11px;
          color: #5effa0;
          letter-spacing: 0.04em;
          width: fit-content;
        }

        .avail-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #5effa0;
          box-shadow: 0 0 8px #5effa0;
          animation: pulseDot 2s ease-in-out infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
      `}</style>

      <section className="hero-root">
        {/* Corner decorations */}
        <div className="corner-tl" />
        <div className="corner-br" />

        <div className="hero-inner">

          {/* ── TEXT ── */}
          <div className="hero-text">
            <div className="label-line">
              <span className="label-dot" />
              <span className="label-text">Portfolio · {new Date().getFullYear()}</span>
            </div>

            <div className="avail-badge">
              <span className="avail-dot" />
              Available for freelance work
            </div>

            <div key={currentSlide} className="slide-enter">
              <h1 className="hero-name">
                <span className="gradient-name">Hi, I'm Kawsar</span>
                <span className="hero-slide-title">{slide.title}</span>
                <span className="hero-subtitle">{slide.subtitle}</span>
              </h1>
            </div>

            <p className="hero-desc" key={`desc-${currentSlide}`} style={{ animation: 'slideIn 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both' }}>
              {slide.description}
            </p>

            <div className="hero-tags" key={`tags-${currentSlide}`} style={{ animation: 'slideIn 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both' }}>
              {slide.tech.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>

            <div className="hero-actions">
              <button className="btn-primary" onClick={downloadResume}>
                <svg className="dl-icon" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </button>

              <a href="#about" className="btn-outline">
                About Me
                <svg className="arrow-icon" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

            <div className="stat-strip">
              <div className="stat-item">
                <span className="stat-num">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-sep" />
              <div className="stat-item">
                <span className="stat-num">3+</span>
                <span className="stat-label">Years exp</span>
              </div>
              <div className="stat-sep" />
              <div className="stat-item">
                <span className="stat-num">30+</span>
                <span className="stat-label">Happy clients</span>
              </div>
            </div>
          </div>

          {/* ── VISUAL ── */}
          <div className="hero-visual">
            <div className="ring-container">
              <div className="ring ring-1" />
              <div className="ring ring-2" />

              <div className="avatar-frame" key={`img-${currentSlide}`}
                style={{ animation: 'slideIn 0.9s cubic-bezier(0.22,1,0.36,1) both' }}>
                <div className="avatar-glow" />
                <div className="avatar-inner">
                  <Image
                    src={slide.image}
                    alt="Kawsar"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── SLIDE NUMBER ── */}
        <div className="slide-number" style={{ right: '32px' }}>
          <span className="num-current">0{currentSlide + 1}</span>
          <span className="num-divider" />
          <span className="num-total">0{heroSlides.length}</span>
        </div>

        {/* ── CONTROLS ── */}
        <div className="hero-controls">
          <button
            className="play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1"/>
                <rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            )}
          </button>

          <div className="progress-dots">
            {heroSlides.map((_, index) => (
              <div
                key={index}
                className={`dot-wrap ${index === currentSlide ? 'is-current' : ''} ${index < currentSlide ? 'is-past' : ''}`}
                onClick={() => goToSlide(index)}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className="dot-fill"
                  style={{
                    transform: index === currentSlide
                      ? `scaleX(${progress / 100})`
                      : index < currentSlide
                        ? 'scaleX(1)'
                        : 'scaleX(0)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;