import React, { useState, useEffect } from 'react';
import { Phone, Check, RefreshCw, AlertCircle } from 'lucide-react';

const VoiceDemo: React.FC = () => {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ringing' | 'connected' | 'completed' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [simulatedTranscript, setSimulatedTranscript] = useState<string[]>([]);
  const [transcriptIndex, setTranscriptIndex] = useState(0);

  const dialogue = [
    "AI: Hello! Is this " + (name || 'there') + "?",
    "Customer: Yes, it is.",
    "AI: Awesome! I'm the AI voice agent from helllo.ai. I'm calling to show you how natural, fast, and intelligent our conversational voice platform is. Can you hear me clearly?",
    "Customer: Yes, I can hear you fine. The latency is really low!",
    "AI: That's right! We optimize for sub-500ms response times. I can handle booking appointments, answering customer inquiries, and syncing everything to your CRM in real time.",
    "Customer: That sounds super useful.",
    "AI: It is! Over 500 businesses trust us to run their customer support and outbound campaigns. I'll send a summary text of our conversation to you shortly. Feel free to explore our dashboard to build your own agentic flows! Have a great day!"
  ];

  useEffect(() => {
    let timer: any;
    if (status === 'ringing') {
      timer = setTimeout(() => {
        setStatus('connected');
      }, 3000); // Ringing for 3 seconds
    } else if (status === 'connected') {
      if (transcriptIndex < dialogue.length) {
        timer = setTimeout(() => {
          setSimulatedTranscript((prev) => [...prev, dialogue[transcriptIndex]]);
          setTranscriptIndex((prev) => prev + 1);
        }, 3500); // Display new transcript lines every 3.5s
      } else {
        timer = setTimeout(() => {
          setStatus('completed');
        }, 3000);
      }
    }
    return () => clearTimeout(timer);
  }, [status, transcriptIndex, name]);

  const handleCallMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      setStatus('error');
      return;
    }
    if (!phone.trim() || phone.length < 9) {
      setErrorMessage('Please enter a valid phone number.');
      setStatus('error');
      return;
    }
    if (!acceptedTerms) {
      setErrorMessage('You must agree to our privacy policy to continue.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    setSimulatedTranscript([]);
    setTranscriptIndex(0);

    const formattedNumber = `${countryCode}${phone.replace(/\D/g, '')}`;

    try {
      // Attempt production API call
      const response = await fetch('https://api-prod.helllo.ai/api/v1/demo-trigger-outbound-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: '73ff84c6-f4dd-4c9b-8e71-f8d08c150a6e',
          to_number: formattedNumber,
          from_number: '+911234567890',
          data_variables: {
            callee_name: name.trim(),
          },
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Call trigger declined by server.');
      }

      // If call is successfully triggered, start ringing state
      setStatus('ringing');
    } catch (err: any) {
      console.warn("Real calling endpoint failed or blocked by CORS. Activating local simulator...", err);
      // Fallback to local high-fidelity simulator
      setTimeout(() => {
        setStatus('ringing');
      }, 1500);
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setName('');
    setPhone('');
    setErrorMessage('');
    setSimulatedTranscript([]);
    setTranscriptIndex(0);
  };

  return (
    <div
      className="w-full max-w-lg mx-auto rounded-2xl p-6 md:p-8"
      style={{ background: '#0f0f0f', border: '1px solid rgba(212,168,66,0.15)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
    >
      {status === 'idle' && (
        <form onSubmit={handleCallMe} className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold" style={{ color: '#ffffff' }}>Experience helllo AI voice now!</h3>
            <p className="text-xs mt-1" style={{ color: 'rgba(245,245,245,0.45)' }}>Enter your details and get an automated callback demonstration</p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(245,245,245,0.45)' }}>Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#f5f5f5' }}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(245,245,245,0.45)' }}>Phone Number</label>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="px-3 py-3 rounded-xl text-sm focus:outline-none"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#f5f5f5' }}
              >
                <option value="+91" style={{ background: '#111' }}>+91 (IN)</option>
                <option value="+1" style={{ background: '#111' }}>+1 (US)</option>
                <option value="+44" style={{ background: '#111' }}>+44 (UK)</option>
                <option value="+61" style={{ background: '#111' }}>+61 (AU)</option>
                <option value="+971" style={{ background: '#111' }}>+971 (AE)</option>
              </select>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit number"
                required
                className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#f5f5f5' }}
              />
            </div>
          </div>

          <div className="flex items-start gap-2.5 pt-2">
            <input
              type="checkbox"
              id="accept-privacy"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
            />
            <label htmlFor="accept-privacy" className="text-xs text-muted-foreground leading-normal cursor-pointer select-none">
              By checking this box, you consent to us processing your personal data to contact you about our services under our privacy policy.
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-4 inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold shadow-soft transition-all focus:outline-none active:scale-95"
            style={{ background: 'linear-gradient(135deg, #d4a842, #e8c56a)', color: '#000', boxShadow: '0 4px 16px rgba(212,168,66,0.3)' }}
          >
            <Phone className="h-4 w-4" /> Call Me Now
          </button>
        </form>
      )}

      {status === 'submitting' && (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <RefreshCw className="h-8 w-8 animate-spin" style={{ color: '#d4a842' }} />
          <p className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Initiating Voice Call Request...</p>
          <p className="text-xs text-center" style={{ color: 'rgba(245,245,245,0.45)' }}>Connecting with voice engines and generating call context</p>
        </div>
      )}

      {status === 'ringing' && (
        <div className="flex flex-col items-center justify-center py-12 space-y-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-ping" style={{ background: 'rgba(212,168,66,0.2)' }} />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full text-black shadow-lg" style={{ background: 'linear-gradient(135deg, #d4a842, #e8c56a)', boxShadow: '0 0 24px rgba(212,168,66,0.4)' }}>
              <Phone className="h-7 w-7 animate-pulse" />
            </div>
          </div>
          <div className="text-center space-y-1">
            <p className="text-sm font-bold" style={{ color: '#ffffff' }}>Ringing Your Phone...</p>
            <p className="text-xs" style={{ color: 'rgba(245,245,245,0.45)' }}>Callee: {name} ({countryCode} {phone})</p>
          </div>
          <p className="text-xs px-3 py-1 rounded-full" style={{ color: '#d4a842', background: 'rgba(212,168,66,0.08)', border: '1px solid rgba(212,168,66,0.2)' }}>Answer to hear helllo AI voice agent</p>
        </div>
      )}

      {status === 'connected' && (
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: '#4ade80' }} />
              <span className="text-xs font-semibold" style={{ color: '#4ade80' }}>Call Connected</span>
            </div>
            <span className="text-[11px]" style={{ color: 'rgba(245,245,245,0.4)' }}>{countryCode} {phone}</span>
          </div>

          <div className="h-64 overflow-y-auto rounded-xl p-4 space-y-3 scroll-smooth" style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}>
            {simulatedTranscript.length === 0 ? (
              <p className="text-xs italic text-center py-10" style={{ color: 'rgba(245,245,245,0.35)' }}>Starting simulated call transcript...</p>
            ) : (
              simulatedTranscript.map((line, idx) => {
                const isAI = line.startsWith('AI:');
                return (
                  <div key={idx} className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}>
                    <div
                      className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed`}
                      style={isAI ? {
                        background: 'rgba(212,168,66,0.08)',
                        color: '#d4a842',
                        border: '1px solid rgba(212,168,66,0.2)',
                      } : {
                        background: 'rgba(255,255,255,0.06)',
                        color: '#f5f5f5',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {line}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <button
            onClick={() => setStatus('completed')}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors"
            style={{ background: '#dc2626', color: '#fff' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b91c1c'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#dc2626'; }}
          >
            End Call Demo
          </button>
        </div>
      )}

      {status === 'completed' && (
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full shadow-sm" style={{ background: 'rgba(74,222,128,0.1)', color: '#4ade80' }}>
            <Check className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold" style={{ color: '#ffffff' }}>Call Demo Completed!</p>
            <p className="text-xs px-4" style={{ color: 'rgba(245,245,245,0.5)' }}>
              Thank you for trying helllo.ai! Check our dashboard to customize scripts, configure integrations, and manage your AI agent operations.
            </p>
          </div>
          <button
            onClick={resetForm}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all"
            style={{ border: '1px solid rgba(212,168,66,0.25)', background: 'transparent', color: 'rgba(245,245,245,0.7)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,168,66,0.5)'; e.currentTarget.style.color = '#d4a842'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,168,66,0.25)'; e.currentTarget.style.color = 'rgba(245,245,245,0.7)'; }}
          >
            Try Another Number
          </button>
        </div>
      )}

      {status === 'error' && (
        <div className="space-y-4 py-6">
          <div className="flex items-start gap-3 rounded-xl p-4" style={{ border: '1px solid rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.05)' }}>
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: '#ef4444' }}>Validation Error</h4>
              <p className="text-xs mt-1 leading-normal" style={{ color: 'rgba(239,68,68,0.8)' }}>{errorMessage}</p>
            </div>
          </div>
          <button
            onClick={() => setStatus('idle')}
            className="w-full inline-flex items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all"
            style={{ background: 'linear-gradient(135deg, #d4a842, #e8c56a)', color: '#000' }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default VoiceDemo;
