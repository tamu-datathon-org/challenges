import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'General Motors Challenge',
    imgUrl: '/img/gm_logo.png',
    description: (
      <>
        <p>
          🥇$200 purchase from Amazon per team member<br></br>
          🥈RC C8 Corvettes<br></br>
          🥉Nerf Gun pack
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/gm">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Goldman Sachs Challenge',
    imgUrl: "/img/goldman_sachs_logo.png",
    description: (
      <>
        <p>
          🥇Skullcandy Hesh Headphones (+ GS swag)<br></br>
          🥈Goldman Sachs Swag
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/goldman">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Bloomberg INDG Challenge',
    imgUrl: "/img/bloomberg.svg",
    description: (
      <>
        <p>
          🥇Nintendo Switch<br></br>
          🥈Eddie Bauer Softshell Jacket
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/bloomberg">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Celonis Challenge',
    imgUrl: "/img/celonis_logo.png",
    description: (
      <>
        <p>
          🥇$100 gift card to each team member (+ $25 raffle)
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/celonis">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'TD Data Synthesis Challenge',
    imgUrl: "/img/td_logo.svg",
    description: (
      <>
        <p>
          🥇Apple iPad<br></br>
          🥈Nintendo Switch Lite<br></br>
          🥉Apple AirPods
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/td_challenge">
            Learn more
        </Link>
      </>
    ),
  },
];

function Feature({imgUrl, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={useBaseUrl(imgUrl)} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={`row ${styles.featureListCont}`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
