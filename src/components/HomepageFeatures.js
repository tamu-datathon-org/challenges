import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Challenge #1',
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
    title: 'Challenge #2',
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
    title: 'Challenge #3',
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
    title: 'Challenge #4',
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
