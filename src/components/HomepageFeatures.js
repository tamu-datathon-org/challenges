import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'General Motors Challenge',
    imgUrl: '/img/gm_new.gif',
    description: (
      <>
        <p>This is a short description for this challenge. Should hook people in and all that.</p>
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
        <p>This is a short description for this challenge. Should hook people in and all that.</p>
        <Link
            className="button button--primary button--lg"
            to="/docs/goldman">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Bloomberg Challenge',
    imgUrl: "/img/bloomberg.svg",
    description: (
      <>
        <p>Identifying Shifting Policy Priorities in the Federal Register.</p>
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
        <p>This is a short description for this challenge. Should hook people in and all that.</p>
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
        <p>Turn on your creative minds and gather as much data as you can about an interesting topic!</p>
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
