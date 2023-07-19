import { lazy } from 'react';

export const Home = lazy(() => import('./index/index.router'));
export const Portfolio = lazy(() => import('./portfolio/portfolio.router'));
