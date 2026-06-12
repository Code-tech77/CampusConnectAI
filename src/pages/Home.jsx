import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CampusCard from '../components/CampusCard';

const campusData = [
  {
    id: 'strand',
    name: 'Strand Campus',
    location: 'Strand, London WC2R 2LS',
    description: 'The historic heart of King\'s. Explore the majestic Maughan Library and iconic spaces that blend classical architecture with modern learning.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    courses: ['Law', 'Arts & Humanities', 'Natural & Mathematical Sciences', 'Business']
  },
  {
    id: 'guys',
    name: 'Guy\'s Campus',
    location: 'London Bridge, London SE1 1UL',
    description: 'Where biomedical excellence meets historic quadrangles. Discover state-of-the-art life sciences and medical facilities nestled by the Shard.',
    image: 'https://images.unsplash.com/photo-1546415822-7af51000958e?q=80&w=800&auto=format&fit=crop',
    courses: ['Medicine', 'Dentistry', 'Life Sciences', 'Biomedical Engineering']
  },
  {
    id: 'waterloo',
    name: 'Waterloo Campus',
    location: 'Stamford St, London SE1 9NH',
    description: 'A major hub for health professions and societal impact. Located minutes away from London\'s vibrant South Bank cultural institutions.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
    courses: ['Nursing & Midwifery', 'Pharmacy', 'Nutritional Sciences', 'Education']
  },
  {
    id: 'st-thomas',
    name: 'St Thomas\' Campus',
    location: 'Westminster Bridge Rd, London SE1 7EH',
    description: 'Home to continuing medical and dental teaching, and a museum dedicated to Florence Nightingale, directly opposite the Houses of Parliament.',
    image: 'https://images.unsplash.com/photo-1572205336214-5231dfb85810?q=80&w=800&auto=format&fit=crop',
    courses: ['Medicine (Clinical)', 'Dental Institute', 'Cardiovascular Medicine']
  },
  {
    id: 'denmark-hill',
    name: 'Denmark Hill Campus',
    location: 'De Crespigny Park, London SE5 8AF',
    description: 'Home to the Institute of Psychiatry, Psychology & Neuroscience (IoPPN), Europe’s largest center for research in this area.',
    image: 'https://images.unsplash.com/photo-1503698007204-6351229cc46e?q=80&w=800&auto=format&fit=crop',
    courses: ['Psychiatry', 'Psychology', 'Neuroscience', 'Dental Clinical Practice']
  }
];

const Home = () => {
  return (
    <div style={{ background: 'var(--bg-deep-navy)' }}>
      <Navbar />
      <Hero />
      
      <section id="campuses" style={{
        padding: '8rem 2rem',
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="font-serif" style={{
            fontSize: '3.5rem',
            fontWeight: '400',
            marginBottom: '1rem',
            color: 'white',
            letterSpacing: '-1px'
          }}>Our <span style={{ color: 'var(--kcl-logo-red)', fontStyle: 'italic' }}>Campuses</span></h2>
          <div style={{
            width: '60px',
            height: '2px',
            background: 'var(--kcl-logo-red)',
            margin: '0 auto',
          }}></div>
          <p style={{
            color: 'var(--text-muted)',
            marginTop: '1.5rem',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '1.5rem auto 0 auto',
            fontWeight: '300'
          }}>
            Discover the unique atmosphere and specialized facilities across our central London locations.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem'
        }}>
          {campusData.map((campus, index) => (
            <CampusCard key={campus.id} {...campus} index={index} />
          ))}
        </div>
      </section>

      <section id="history" style={{ padding: '6rem 2rem', background: 'var(--bg-charcoal)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-serif" style={{ fontSize: '3rem', color: 'white', fontWeight: '400', marginBottom: '2rem' }}>
            Two Centuries of <span style={{ color: 'var(--text-gold)', fontStyle: 'italic' }}>History</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8', fontWeight: '300' }}>
            Founded in 1829 by King George IV and the Duke of Wellington, King's College London is one of the oldest university-level institutions in England. From the discovery of the structure of DNA by Rosalind Franklin to the literary works of Thomas Hardy, King's has been at the forefront of human knowledge for nearly 200 years.
          </p>
        </div>
      </section>

      <section id="collections" style={{ padding: '6rem 2rem', background: 'var(--bg-deep-navy)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-serif" style={{ fontSize: '3rem', color: 'white', fontWeight: '400', marginBottom: '2rem' }}>
            University <span style={{ color: 'var(--kcl-logo-red)', fontStyle: 'italic' }}>Collections</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8', fontWeight: '300' }}>
            Explore the vast archives held across our campuses. From the Florence Nightingale Museum at St Thomas' to the rare theological manuscripts in the Maughan Library, King's preserves the artifacts of medical, scientific, and cultural history for future generations of scholars.
          </p>
        </div>
      </section>

      <footer style={{
        padding: '6rem 2rem 3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginTop: '4rem',
        background: 'var(--bg-charcoal)',
        position: 'relative',
      }}>
        {/* Subtle top accent */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '100px', height: '2px',
          background: 'var(--kcl-logo-red)',
        }}></div>

        <div style={{ marginBottom: '3rem' }}>
          <h3 className="font-serif" style={{ color: 'white', fontSize: '2rem', fontWeight: '400', marginBottom: '0.5rem', letterSpacing: '1px' }}>
            KING'S <span style={{ fontStyle: 'italic', fontSize: '1.5rem' }}>College</span> LONDON
          </h3>
          <p style={{ color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', marginTop: '1rem' }}>
            Virtual Campus Exhibition
          </p>
        </div>

        <div style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '2px',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          fontWeight: '300',
          letterSpacing: '0.5px'
        }}>
          Hackathon Project of <strong style={{ color: 'white', fontWeight: '500' }}>Kaizen Collab Hackathon</strong>
        </div>

        <p style={{ marginTop: '4rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
          © 2026 Developed for Kaizen Collab Hackathon.
        </p>
      </footer>
    </div>
  );
};

export default Home;
