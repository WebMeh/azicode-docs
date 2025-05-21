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

  const allowedPasswords = ['azicode62', 'dev2025']; // À adapter

  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn');
    if (logged === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (allowedPasswords.includes(password)) {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    } else {
      setError('Mot de passe incorrect.');
    }
  };

  if (!isLoggedIn) {
    return (
      <Layout title="Connexion requise">
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <h1>🔒 Accès à la documentation</h1>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', fontSize: '16px' }}
          />
          <br />
          <button
            onClick={handleLogin}
            style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}
          >
            Se connecter
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
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
