import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Train, Users, History, Building, BookOpen, Info } from 'lucide-react';

const tourData = {
  strand: {
    name: "Strand Campus",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-0.1190%2C51.5093%2C-0.1140%2C51.5133&layer=mapnik&marker=51.5113%2C-0.1160",
    quickFacts: {
      established: "1829",
      nearestTube: "Temple, Charing Cross",
      focus: "Arts, Law, Business, Sciences"
    },
    stops: [
      {
        id: "great-hall",
        title: "The Great Hall",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
        academicFocus: "Exams & Major Events",
        history: "Originally built in the 19th century, it survived the Blitz in WWII.",
        description: "The Great Hall is the grandest space on the Strand Campus. Used primarily for examinations, graduation ceremonies, and major university banquets, it represents the classical academic heritage of King's. The wood-paneled walls and high ceilings give it a distinctively historic academic atmosphere."
      },
      {
        id: "maughan",
        title: "The Maughan Library",
        image: "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?q=80&w=800&auto=format&fit=crop",
        academicFocus: "Main Research Library",
        history: "Former headquarters of the Public Record Office. Featured in The Da Vinci Code.",
        description: "A breathtaking 19th-century neo-Gothic building. Its iconic round reading room was frequently used by scholars researching the British Empire. Today, it houses millions of books and journals, providing a silent, majestic study space for students."
      },
      {
        id: "somerset",
        title: "Somerset House East Wing",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
        academicFocus: "Dickson Poon School of Law",
        history: "Acquired by KCL in 2009, returning to the university's original roots.",
        description: "Blending Palladian elegance with ultra-modern lecture theatres, the East Wing is home to one of the most prestigious law schools in the world. It features state-of-the-art moot courts where students practice legal arguments."
      }
    ]
  },
  guys: {
    name: "Guy's Campus",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-0.0910%2C51.5025%2C-0.0850%2C51.5065&layer=mapnik&marker=51.5045%2C-0.0880",
    quickFacts: {
      established: "1721 (Guy's Hospital)",
      nearestTube: "London Bridge",
      focus: "Medicine, Dentistry, Life Sciences"
    },
    stops: [
      {
        id: "colonnade",
        title: "The Historic Colonnade",
        image: "https://images.unsplash.com/photo-1546415822-7af51000958e?q=80&w=800&auto=format&fit=crop",
        academicFocus: "Campus Hub",
        history: "Built around a statue of Thomas Guy, the hospital's founder.",
        description: "The beautiful central quadrangle is where medical and dental students gather between classes. It perfectly encapsulates the centuries-old tradition of medical teaching that King's is famous for, surrounded by modern medical facilities."
      },
      {
        id: "new-hunts",
        title: "New Hunt's House",
        image: "https://images.unsplash.com/photo-1572205336214-5231dfb85810?q=80&w=800&auto=format&fit=crop",
        academicFocus: "Biomedical Sciences",
        history: "Opened in 1999 to modernize medical education.",
        description: "A massive, modern library and teaching block dedicated purely to life sciences and medicine. It houses some of the most advanced medical research laboratories in the UK."
      }
    ]
  },
  waterloo: {
    name: "Waterloo Campus",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-0.1148%2C51.5035%2C-0.1088%2C51.5075&layer=mapnik&marker=51.5055%2C-0.1118",
    quickFacts: {
      established: "1980s (Incorporated)",
      nearestTube: "Waterloo",
      focus: "Nursing, Pharmacy, Education"
    },
    stops: [
      {
        id: "franklin-wilkins",
        title: "Franklin-Wilkins Building",
        image: "https://images.unsplash.com/photo-1503698007204-6351229cc46e?q=80&w=800&auto=format&fit=crop",
        academicFocus: "Health Professions",
        history: "Named after DNA pioneers Rosalind Franklin and Maurice Wilkins.",
        description: "One of London's largest university buildings. It features extensive simulation wards where nursing and midwifery students practice complex clinical scenarios before working in real hospitals."
      }
    ]
  },
  "denmark-hill": {
    name: "Denmark Hill Campus",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-0.0928%2C51.4658%2C-0.0868%2C51.4698&layer=mapnik&marker=51.4678%2C-0.0898",
    quickFacts: {
      established: "1924 (IoPPN)",
      nearestTube: "Denmark Hill (Overground)",
      focus: "Psychiatry, Psychology, Neuroscience"
    },
    stops: [
      {
        id: "ioppn",
        title: "Institute of Psychiatry, Psychology & Neuroscience",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
        academicFocus: "Brain Research",
        history: "Europe's largest centre for mental health and neuroscience research.",
        description: "Located alongside the Maudsley Hospital, this campus is dedicated to understanding the human brain. Students here work alongside world-leading researchers tackling diseases like Alzheimer's and schizophrenia."
      }
    ]
  },
  "st-thomas": {
    name: "St Thomas' Campus",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-0.1219%2C51.4975%2C-0.1159%2C51.5015&layer=mapnik&marker=51.4995%2C-0.1189",
    quickFacts: {
      established: "1173 (Hospital)",
      nearestTube: "Westminster",
      focus: "Clinical Medicine"
    },
    stops: [
      {
        id: "florence",
        title: "Medical Teaching Centre",
        image: "https://images.unsplash.com/photo-1546415822-7af51000958e?q=80&w=800&auto=format&fit=crop",
        academicFocus: "Clinical Practice",
        history: "The site where Florence Nightingale established her famous nursing school.",
        description: "Situated directly opposite the Houses of Parliament, medical students here learn in a working hospital environment, blending historical legacy with modern clinical demands."
      }
    ]
  }
};

const CampusTour = () => {
  const { campusId } = useParams();
  const campus = tourData[campusId] || tourData.strand;
  
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const currentStop = campus.stops[currentStopIndex];

  const nextStop = () => {
    setCurrentStopIndex((prev) => (prev + 1) % campus.stops.length);
  };

  const prevStop = () => {
    setCurrentStopIndex((prev) => (prev === 0 ? campus.stops.length - 1 : prev - 1));
  };

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative', background: 'var(--bg-deep-navy)' }}>
      {/* Background Image - Changes based on current stop */}
      <div 
        key={currentStop.id} // Forces re-render for CSS animation
        className="animate-fade-in"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${currentStop.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
          zIndex: 0
        }}
      />

      {/* Header Navigation */}
      <div 
        className="animate-fade-in"
        style={{
          position: 'absolute',
          top: '2.5rem',
          left: '3rem',
          right: '3rem',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link to="/" className="elegant-button elegant-button-outline" style={{ textDecoration: 'none', padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>
          <ArrowLeft size={16} /> Exit Tour
        </Link>
        
        <div style={{ textAlign: 'center', background: 'rgba(9,11,16,0.6)', padding: '0.5rem 2rem', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>
          <h1 className="font-serif" style={{
            color: 'white', fontSize: '1.8rem', fontWeight: '400', margin: 0, letterSpacing: '1px'
          }}>
            {campus.name}
          </h1>
        </div>

        <div style={{ width: '120px' }}></div> {/* Spacer for flex centering */}
      </div>

      <div style={{
        position: 'absolute',
        top: '120px',
        bottom: '3rem',
        left: '3rem',
        right: '3rem',
        display: 'flex',
        gap: '3rem',
        zIndex: 10
      }}>
        
        {/* Left Panel: Quick Facts */}
        <div className="glass-panel-elegant animate-fade-in animate-delay-1" style={{
          width: '320px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          borderTop: '3px solid var(--kcl-logo-red)',
          borderRadius: '2px'
        }}>
          <div>
            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Info size={18} color="var(--kcl-logo-red)" /> Campus Context
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><History size={14}/> Established</div>
                <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: '500' }}>{campus.quickFacts.established}</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Train size={14}/> Transit</div>
                <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: '500' }}>{campus.quickFacts.nearestTube}</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen size={14}/> Academic Focus</div>
                <div style={{ color: 'var(--text-gold)', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4' }}>{campus.quickFacts.focus}</div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Embedded Static Map */}
            <div style={{
              width: '100%',
              height: '180px',
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src={campus.mapUrl} 
                style={{ border: 'none' }}
                title={`${campus.name} Map`}
              ></iframe>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center' }}>
                Stop {currentStopIndex + 1} of {campus.stops.length}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Current Stop Details */}
        <div className="glass-panel-elegant animate-fade-in animate-delay-2" key={currentStop.id + "content"} style={{
          flex: 1,
          padding: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: '2px',
          background: 'linear-gradient(to right, rgba(9,11,16,0.9) 0%, rgba(9,11,16,0.4) 100%)'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.4rem 1rem',
            background: 'var(--kcl-logo-red)',
            color: 'white',
            fontSize: '0.8rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1.5rem',
            alignSelf: 'flex-start'
          }}>
            Tour Stop {currentStopIndex + 1}
          </div>
          
          <h2 className="font-serif" style={{ color: 'white', fontSize: '4.5rem', fontWeight: '400', lineHeight: '1', marginBottom: '2rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            {currentStop.title}
          </h2>
          
          <div style={{ display: 'flex', gap: '3rem', marginBottom: '2.5rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'var(--text-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Building size={16}/> Inside This Building</div>
              <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: '300' }}>{currentStop.academicFocus}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'var(--text-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><History size={16}/> Historical Note</div>
              <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: '300' }}>{currentStop.history}</div>
            </div>
          </div>
          
          <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.2)', marginBottom: '2.5rem' }}></div>
          
          <p style={{ color: 'var(--text-main)', fontSize: '1.25rem', lineHeight: '1.8', fontWeight: '300', maxWidth: '800px', marginBottom: '4rem' }}>
            {currentStop.description}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
            <button onClick={prevStop} className="elegant-button elegant-button-outline" style={{ padding: '1rem 2rem' }}>
              <ArrowLeft size={18} /> Previous Stop
            </button>
            <button onClick={nextStop} className="elegant-button" style={{ padding: '1rem 3rem' }}>
              Walk to Next Stop <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CampusTour;
