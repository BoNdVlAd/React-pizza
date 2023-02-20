import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="138" cy="138" r="125" />
    <rect x="0" y="289" rx="9" ry="9" width="280" height="26" />
    <rect x="0" y="327" rx="0" ry="0" width="280" height="88" />
    <rect x="3" y="433" rx="8" ry="8" width="95" height="30" />
    <rect x="126" y="424" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
