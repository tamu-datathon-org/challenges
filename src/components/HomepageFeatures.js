import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'TD Hospital Exploration',
    imgUrl: '/img/main-23.svg',
    description: (
      <>
        <p>
          🥇Echo Dot<br></br>
          🥈Anker Soundcore 2 Portable Bluetooth Speaker<br></br>
          🥉$25 Gift Card
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/TDHospitalExploration">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Pictionary Plunge',
    imgUrl: '/img/main-23.svg',
    description: (
      <>
        <p>
          🥇iPad 9th Generation<br></br>
          🥈Bokigibi Drone with 1080P HD FPV Camera<br></br>
          🥉$50 Gift Card
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/PictionaryPlunge">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Build Your Own',
    imgUrl: '/img/main-23.svg',
    description: (
      <>
        <p>
          🥇RK ROYAL KLUDGE RK61 60% Mechanical Keyboard with Coiled Cable<br></br>
          🥈JBL Tune 660NC Headphones<br></br>
          🥉$50 Gift Card
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/BuildYourOwn">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Bots Race',
    imgUrl: '/img/main-23.svg',
    description: (
      <>
        <p>
          🥇MNN Portable Monitor 15.6inch FHD 1080P<br></br>
          🥈Logitech G502 HERO Gaming Mouse<br></br>
          🥉$50 Gift Card
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/BotsRace">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'MLH Challenges',
    imgUrl: "/img/mlh_logo.svg",
    description: (
      <>
        <p>
          Prizes may vary!
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/mlh_challenges">
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
