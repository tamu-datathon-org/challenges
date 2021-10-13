import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'General Motors Challenge',
    Svg: require('../../static/img/gm_logo.svg').default,
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
    title: 'Goldman Sachs',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>This is a short description for this challenge. Should hook people in and all that.</p>
        <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Bloomberg Challenge',
    Svg: require('../../static/img/bloomberg.svg').default,
    description: (
      <>
        <p>This is a short description for this challenge. Should hook people in and all that.</p>
        <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Kaggle Challenge',
    Svg: require('../../static/img/td-logo.svg').default,
    description: (
      <>
        <p>The world is filled with data that can be collected. Turn on your creative minds and gather as much data as you can about an interesting topic!</p>
        <Link
            className="button button--primary button--lg"
            to="/docs/kaggle">
            Learn more
        </Link>
      </>
    ),
  },
  {
    title: 'Color Filler Challenge',
    Svg: require('../../static/img/td-logo.svg').default,
    description: (
      <>
        <p>This is a short description for this challenge. Should hook people in and all that.</p>
        <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Learn more
        </Link>
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
