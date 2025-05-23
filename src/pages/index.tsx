import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, { useState, useEffect } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Commencer la documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const allowedPasswords = ['azicode62', 'dev2025']; // Replace with yours
  const SESSION_DURATION_MS = 60 * 60 * 1000; // 1 hour

  useEffect(() => {
    const loginTime = localStorage.getItem('loginTime');
    const now = Date.now();

    if (loginTime && now - parseInt(loginTime, 10) < SESSION_DURATION_MS) {
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginTime');
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogin = () => {
    if (allowedPasswords.includes(password)) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loginTime', Date.now().toString());
      setIsLoggedIn(true);
    } else {
      setError('Mot de passe incorrect.');
    }
  };

  if (!isLoggedIn) {
    return (
      <Layout title="Connexion requise">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            padding: '2rem',
            gap: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Illustration */}
          <img
            src="/img/login-illustration.jpg"
            alt="Login Illustration"
            style={{ maxWidth: '400px', width: '100%' }}
          />

          {/* Formulaire */}
          <div
            style={{
              border: '1px solid #ccc',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '400px',
              width: '100%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '1rem' }}>🔐 Connexion requise</h2>
            <p style={{ marginBottom: '1rem', color: '#666' }}>
              Entrez le mot de passe pour accéder aux formations
            </p>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                fontSize: '16px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                marginBottom: '1rem',
              }}
            />
            <button
              onClick={handleLogin}
              style={{
                backgroundColor: '#3366ff',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '16px',
                width: '100%',
              }}
            >
              Se connecter
            </button>
            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`Bienvenue sur ${siteConfig.title}`} description="Page d’accueil sécurisée">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
