import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Formation accessible',
    Svg: require('@site/static/img/undraw_working-together_r43a.svg').default,
    description: (
      <>
      Azicode 62 propose une formation claire, simple et bien structurée pour tout niveau, même sans aucune base en informatique.

      </>
    ),
  },
  {
    title: 'Objectif : Compétence réelle',
    Svg: require('@site/static/img/undraw_target_d6hf.svg').default,
    description: (
      <>
                Nous mettons l'accent sur la pratique, les projets concrets et la progression par étapes pour former de vrais développeurs professionnels.

      </>
    ),
  },
  {
    title: 'Full Stack Web & Mobile',
    Svg: require('@site/static/img/undraw_dev-productivity_5wps.svg').default,
    description: (
      <>
                Tu apprendras à créer des sites web, des applications mobiles et même à maîtriser les outils de développement modernes comme React et Node.js.

      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
