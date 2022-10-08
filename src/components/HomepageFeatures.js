import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'TBD',
    imgUrl: '/img/baker_hughes_logo.svg',
    description: (
      <>
        <p>
          TBD
        </p>
        {/* <Link
            className="button button--primary button--lg"
            to="/docs/baker_hughes1">
            Learn more
        </Link> */}
      </>
    ),
  },
  {
    title: 'Object Detection in Advanced Manufacturing',
    imgUrl: "/img/baker_hughes_logo.svg",
    description: (
      <>
        <p>
          🥇Miuzei Super Starter Kit & BH Notepads<br></br>
          🥈Power Banks & Water Bottles (may need to pick up at later date)<br></br>
          🥉5-in-1 Charging Cables & Tote Bags (may need to pick up at later date)
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/baker_hughes2">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Get in Line',
    imgUrl: "/img/cbre.png",
    description: (
      <>
        <p>
          🥇$125 Amazon gift card, each<br></br>
          🥈$75 Amazon gift card, each <br></br>
          🥉$50 Amazon gift card, each
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/cbre">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'TBD',
    imgUrl: "/img/celonis_logo.png",
    description: (
      <>
        <p>
          TBD
        </p>
        {/* <Link
            className="button button--primary button--lg"
            to="/docs/celonis">
            Learn more
        </Link> */}
      </>
    ),
  },
  {
    title: 'Bloomberg INDG Challenge',
    imgUrl: "/img/bloomberg.svg",
    description: (
      <>
        <p>
          🥇Bose Sport True Wireless Bluetooth Earbud<br></br>
          🥈RK ROYAL KLUDGE RK100 Wireless Mechanical Keyboard<br></br>
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
    title: 'Puzzle Solver',
    imgUrl: "/img/td_logo.webp",
    description: (
      <>
        <p>
          🥇iPad<br></br>
          🥈AirPods (3rd generation)<br></br>
          🥉$50 Gift Card
        </p>
        <Link
            className="button button--primary button--lg"
            to="/docs/td_challenge">
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
