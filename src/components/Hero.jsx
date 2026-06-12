import React from 'react';

const Hero = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Cinematic Background Image */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      
      {/* Elegant Gradients */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(9,11,16,0.3) 0%, rgba(9,11,16,0.8) 60%, rgba(9,11,16,1) 100%)',
        zIndex: 1
      }}></div>
      
      {/* Subtle Red Accent Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(215, 26, 33, 0.15) 0%, rgba(0,0,0,0) 60%)',
        borderRadius: '50%',
        filter: 'blur(20px)',
        zIndex: 1
      }}></div>

      <div
        className="animate-fade-in"
        style={{ zIndex: 2, textAlign: 'center', maxWidth: '1000px', padding: '0 2rem' }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <h1 className="font-serif" style={{
            fontSize: 'clamp(4rem, 8vw, 7rem)',
            fontWeight: '400',
            lineHeight: '1.1',
            color: 'white',
            letterSpacing: '-1px'
          }}>
            Explore The <br/>
            <span style={{ 
              color: 'var(--kcl-logo-red)', 
              fontStyle: 'italic',
              fontWeight: '600'
            }}>
              Heritage
            </span>
          </h1>
        </div>
        
        <p 
          className="animate-fade-in animate-delay-1"
          style={{
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            marginBottom: '4rem',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto 4rem auto',
            fontWeight: '300'
          }}
        >
          Step into a virtual journey through King's College London. Discover our historic spaces, 
          world-class teaching environments, and vibrant campus life.
        </p>

        <div
          className="animate-fade-in animate-delay-2"
          style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}
        >
          <a href="#campuses" className="elegant-button" style={{ textDecoration: 'none' }}>
            Begin The Tour
          </a>
          <a href="#history" className="elegant-button elegant-button-outline" style={{ textDecoration: 'none', padding: '1rem 2.5rem', borderRadius: '2px' }}>
            Discover Our History
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div
        className="animate-fade-in animate-delay-3"
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          zIndex: 2,
          color: 'var(--text-muted)',
          fontSize: '0.8rem',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}
      >
        <span>Scroll to Explore</span>
        <div 
          style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--kcl-logo-red), transparent)' }}
        />
      </div>
    </div>
  );
};

export default Hero;
