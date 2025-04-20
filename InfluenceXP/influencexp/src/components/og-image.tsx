import { ImageResponse } from 'next/og';

export const OgImage = async ({
  title = 'InfluenceXP - Gamified LinkedIn Growth Platform',
  description = 'Rack up XP, unlock badges, and watch your LinkedIn reach explode.',
}) => {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A', // Dark blue background
          backgroundImage: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
          padding: '40px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(99, 102, 241, 0.15) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(14, 165, 233, 0.15) 2px, transparent 0)',
            backgroundSize: '100px 100px',
            zIndex: 1,
            opacity: 0.4,
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            textAlign: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="6" stroke="#6366F1" strokeWidth="2" />
            </svg>
            <span style={{ color: 'white', fontSize: 48, fontWeight: 700, marginLeft: '16px' }}>
              InfluenceXP
            </span>
          </div>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              backgroundImage: 'linear-gradient(90deg, #6366F1, #0EA5E9)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              marginBottom: '20px',
              maxWidth: '1000px',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: 32,
              color: '#CBD5E1',
              margin: 0,
              maxWidth: '800px',
            }}
          >
            {description}
          </p>
          <div
            style={{
              display: 'flex',
              marginTop: '40px',
              padding: '16px 32px',
              backgroundColor: '#6366F1',
              color: 'white',
              fontSize: 24,
              fontWeight: 600,
              borderRadius: '9999px',
            }}
          >
            Join the Waitlist
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}; 