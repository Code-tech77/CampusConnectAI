import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

// --- KCL Knowledge Engine ---
const knowledgeBase = [
  {
    keywords: ['history', 'founded', 'old', 'origin'],
    response: "King's College London was founded in 1829 by King George IV and the Duke of Wellington. It is one of the oldest university-level institutions in England."
  },
  {
    keywords: ['strand', 'arts', 'law', 'business'],
    response: "The Strand Campus is the historic heart of King's, built on land granted to the university next to Somerset House. It primarily houses Arts & Humanities, Law, Business, and Natural & Mathematical Sciences. The closest tube stations are Temple and Charing Cross."
  },
  {
    keywords: ['guy', 'guys', 'medicine', 'dentistry', 'life sciences'],
    response: "Guy's Campus is located next to London Bridge and the Shard. It is home to the Faculty of Life Sciences & Medicine and the Dental Institute. You can easily reach it via London Bridge station."
  },
  {
    keywords: ['waterloo', 'nursing', 'midwifery', 'pharmacy'],
    response: "Waterloo Campus is situated just across Waterloo Bridge from the Strand. It houses the Florence Nightingale Faculty of Nursing, Midwifery & Palliative Care. To get there from Strand, it's a beautiful 10-minute walk across the river."
  },
  {
    keywords: ['st thomas', 'thomas', 'florence nightingale'],
    response: "St Thomas' Campus is located opposite the Houses of Parliament. It hosts continuing medical and dental teaching and the Florence Nightingale Museum. Closest tube is Westminster."
  },
  {
    keywords: ['denmark hill', 'ioppn', 'psychiatry', 'psychology', 'neuroscience'],
    response: "Denmark Hill Campus in South London is home to the Institute of Psychiatry, Psychology & Neuroscience (IoPPN). It is easily accessible via the Denmark Hill Overground station from London Bridge."
  },
  {
    keywords: ['transport', 'move', 'between', 'navigate', 'get to'],
    response: "Moving between KCL campuses is quite easy! Strand and Waterloo are a 10-minute walk apart across Waterloo Bridge. Guy's is a quick bus or tube ride (Jubilee Line from Waterloo) to London Bridge. St Thomas' is a short walk from Waterloo. Denmark Hill requires a train ride from London Bridge or Victoria."
  },
  {
    keywords: ['famous', 'alumni', 'notable'],
    response: "King's has many famous alumni and staff, including Florence Nightingale, Rosalind Franklin (who played a crucial role in discovering the structure of DNA here), and Desmond Tutu. We have numerous Nobel Laureates associated with the university."
  },
  {
    keywords: ['course', 'study', 'degree', 'programme'],
    response: "King's offers hundreds of courses! Major strengths include Medicine at Guy's, Law at Strand, Nursing at Waterloo, and Psychiatry at Denmark Hill. Which area of study are you interested in?"
  }
];

const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase();
  
  // Find the best matching knowledge base entry based on keyword hits
  let bestMatch = null;
  let maxHits = 0;

  for (const entry of knowledgeBase) {
    let hits = 0;
    for (const keyword of entry.keywords) {
      if (lowerInput.includes(keyword)) {
        hits++;
      }
    }
    if (hits > maxHits) {
      maxHits = hits;
      bestMatch = entry;
    }
  }

  if (bestMatch) {
    return bestMatch.response;
  }

  // Fallback response
  return "I'm your KCL Virtual Concierge. I specialize in answering questions about our campuses, history, transport, and famous courses. Could you rephrase your question?";
};
// ----------------------------

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Welcome to King's College London. I am your Virtual Concierge. I can tell you about our history, campus locations, specific courses, and how to travel between them. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking delay before Concierge response
    setTimeout(() => {
      const response = getBotResponse(userText);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 seconds delay
  };

  return (
    <>
      {/* Elegant Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '2.5rem',
          right: '2.5rem',
          width: '65px',
          height: '65px',
          borderRadius: '50%',
          background: 'var(--kcl-logo-red)',
          border: 'none',
          color: 'white',
          display: isOpen ? 'none' : 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
          zIndex: 9999,
          transition: 'transform 0.2s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(215, 26, 33, 0.4)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)'; }}
      >
        <MessageCircle size={28} />
      </button>

      {/* Elegant Chat Window */}
      {isOpen && (
        <div
          className="glass-panel-elegant animate-fade-in"
          style={{
            position: 'fixed',
            bottom: '2.5rem',
            right: '2.5rem',
            width: '400px',
            height: '600px',
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(18, 21, 28, 0.95)',
            borderRadius: '4px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          {/* Header */}
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              <h3 className="font-serif" style={{ color: 'white', margin: 0, fontSize: '1.4rem', fontWeight: '400' }}>Virtual Concierge</h3>
              <p style={{ color: 'var(--text-gold)', margin: 0, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.2rem' }}>Knowledge Engine Active</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <X size={24} />
            </button>
          </div>

          {/* Chat Area */}
          <div style={{
            flex: 1,
            padding: '1.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            scrollbarWidth: 'thin'
          }}>
            {messages.map((msg, idx) => (
              <div 
                className="animate-fade-in"
                key={idx} 
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.role === 'user' ? 'rgba(215, 26, 33, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${msg.role === 'user' ? 'rgba(215, 26, 33, 0.3)' : 'rgba(255,255,255,0.05)'}`,
                  padding: '1rem',
                  borderRadius: '2px',
                  maxWidth: '85%',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  fontWeight: '300'
                }}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div 
                className="animate-fade-in"
                style={{
                  alignSelf: 'flex-start',
                  padding: '0.5rem 1rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic'
                }}
              >
                Concierge is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} style={{
            padding: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            gap: '1rem'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about campuses, history, courses..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                padding: '0.5rem 0',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderBottomColor = 'var(--kcl-logo-red)'}
              onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.2)'}
            />
            <button
              type="submit"
              style={{
                background: 'transparent',
                color: 'var(--kcl-logo-red)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 0.5rem',
                transition: 'transform 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
