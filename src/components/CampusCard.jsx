import React, { useState } from 'react';
import { ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CampusCard = ({ id, name, location, description, image, index, courses }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="glass-panel-elegant animate-fade-in"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: '2px',
        transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 30px 60px rgba(0, 0, 0, 0.5)' : 'var(--glass-shadow)',
        animationDelay: `${index * 0.2}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        height: '240px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Elegant overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(9,11,16,0.95) 100%)',
          zIndex: 1,
        }} />
        
        <div 
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transformOrigin: 'center center',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 1.5s ease-out'
          }}
        />

        {/* Location Tag */}
        <div style={{
          position: 'absolute',
          bottom: '1.5rem', left: '2rem',
          color: 'var(--text-gold)',
          fontSize: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 2,
          fontWeight: '500',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          <MapPin size={14} /> {location}
        </div>
      </div>

      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
        <h3 className="font-serif" style={{
          fontSize: '1.8rem',
          fontWeight: '400',
          marginBottom: '1rem',
          color: 'white',
          letterSpacing: '0.5px'
        }}>{name}</h3>
        
        <div style={{ 
          width: isHovered ? '60px' : '40px', 
          height: '2px', 
          background: 'var(--kcl-logo-red)', 
          marginBottom: '1.5rem',
          transition: 'width 0.5s ease'
        }}></div>
        
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          marginBottom: '1.5rem',
          fontWeight: '300'
        }}>
          {description}
        </p>

        {/* Courses Section */}
        {courses && courses.length > 0 && (
          <div style={{
            marginBottom: '2rem',
            background: 'rgba(255,255,255,0.02)',
            padding: '1rem',
            borderRadius: '4px',
            borderLeft: '2px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>
              <GraduationCap size={16} /> Famous Courses
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {courses.map((course, i) => (
                <span key={i} style={{
                  background: 'rgba(215, 26, 33, 0.1)',
                  color: 'var(--text-main)',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.8rem',
                  borderRadius: '2px',
                  border: '1px solid rgba(215, 26, 33, 0.2)'
                }}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}

        <Link to={`/tour/${id}`} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          fontSize: '0.9rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginTop: 'auto',
          transition: 'color 0.3s ease'
        }}
        onMouseOver={(e) => { e.currentTarget.style.color = 'var(--text-gold)'; }}
        onMouseOut={(e) => { e.currentTarget.style.color = 'white'; }}
        >
          Explore Campus 
          <div style={{ transform: isHovered ? 'translateX(5px)' : 'translateX(0)', transition: 'transform 0.3s ease' }}>
            <ArrowRight size={18} color="var(--kcl-logo-red)" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CampusCard;
