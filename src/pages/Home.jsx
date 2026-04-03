import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const professions = [
    'AI Enthusiast',
    'Developer',
  ]

  const quickLinks = [
    { img: '/github.png', title: 'GitHub', link: 'https://github.com/shiva' },
    { img: '/linkedin.png', title: 'LinkedIn', link: 'https://www.linkedin.com/in/shiva/' },
    { img: '/gmail.png', title: 'Email', link: 'mailto:shiva@example.com' },

  ]

  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '3rem',
        alignItems: 'center',
        padding: '3rem 2rem 1rem',
        background: 'radial-gradient(circle at 30% 30%, rgba(0,255,200,0.08), transparent 80%)',
        color: '#fff',
      }}
    >
      {/* Typing Animation CSS */}
      <style>
        {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes blink {
            50% { border-color: transparent; }
          }
          .typing-effect {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: .15em solid var(--accent);
            width: 0;
            animation: typing 3.5s steps(40, end) forwards, blink .8s infinite;
          }
        `}
      </style>

      {/* -------------------- TOP SECTION -------------------- */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
          maxWidth: '1250px',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* ----------- Animated Photo ------------ */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'relative',
            flex: '0 0 380px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '330px',
              height: '330px',
              borderRadius: '50%',
              border: '2px dashed var(--accent)',
              opacity: 0.3,
            }}
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'relative',
              borderRadius: '50%',
              overflow: 'hidden',
              width: '300px',
              height: '300px',
              boxShadow: '0 0 45px rgba(0,255,200,0.25)',
              border: '3px solid var(--accent)',
              zIndex: 1,
            }}
          >
            <motion.img
              src="/photo2.jpg"
              alt="Profile"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '60%',
              }}
            />
          </motion.div>
        </motion.div>

        {/* ----------- Right Info Section ------------ */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            flex: 1,
            minWidth: '360px',
            maxWidth: '700px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '0.4rem',
            }}
          >
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{
                background:
                  'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent))',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200%',
              }}
            >
              Shiva Teja
            </motion.span>
          </h1>

          <p
            className="typing-effect"
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.85)',
              marginTop: '0.4rem',
              maxWidth: '95%',
            }}
          >
            Ai Engineer | Data Analyst | Tech Explorer
          </p>

          {/* Profession Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
              marginTop: '1.4rem',
            }}
          >
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background: 'linear-gradient(90deg,var(--accent),var(--accent-2))',
                }}
                transition={{ type: 'spring', stiffness: 200 }}
                style={{
                  border: '1px solid var(--accent)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.85)',
                  cursor: 'default',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1.6rem',
              flexWrap: 'wrap',
            }}
          >
            {quickLinks.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  border: '1px solid var(--accent)',
                  textDecoration: 'none',
                  color: 'white',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                <img
                  src={info.img}
                  alt={info.title}
                  style={{ width: '24px', height: '24px' }}
                />
                {info.title}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
