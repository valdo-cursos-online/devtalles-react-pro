import { lazy, LazyExoticComponent } from 'react';
import { NoLasy } from '../01-lazyload/pages/NoLasy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyLayout" */ '../01-lazyload/layouts/Lazy.layout'
    )
);

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'LazyLayout - Dash',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLasy,
    name: 'No Lasy',
  },
];
