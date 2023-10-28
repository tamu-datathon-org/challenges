// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TAMU Datathon 2023 Challenges',
  tagline: 'Make a submission to a challenge and win prizes!',
  url: 'https://tamudatathon.com',
  baseUrl: '/challenges/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://tamudatathon.com/static/img/favicon.ico',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'TD 2023 Challenges',
          src: 'https://tamudatathon.com/static/img/logos/main-23.svg',
        },
        items: [
          {
            href: 'https://tamudatathon.com/',
            label: 'Home',
            position: 'left',
            target: '_self'
          },
          {
            href: 'https://tamudatathon.com/events',
            label: 'Events',
            position: 'left',
            target: '_self'
          },
          {
            href: 'https://tamudatathon.com/schedule',
            label: 'Schedule',
            position: 'left',
            target: '_self'
          },
          {
            href: '/',
            label: 'Challenges',
            position: 'left',
            target: '_self'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://tamudatathon.com/guild',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tamu-datathon-org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TAMU Datathon. Built with Docusaurus. Made with love in Aggieland.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
