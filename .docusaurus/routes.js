import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '087'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c4a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '46e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '747'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9af'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '2c7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c3d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e47'),
    routes: [
      {
        path: '/docs/help',
        component: ComponentCreator('/docs/help', '781'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/suggestdiy',
        component: ComponentCreator('/docs/suggestdiy', '0d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/suggesthelper',
        component: ComponentCreator('/docs/suggesthelper', '8fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/suggestwrong',
        component: ComponentCreator('/docs/suggestwrong', 'd5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
