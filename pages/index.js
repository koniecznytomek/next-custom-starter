import React from 'react';
import withData from '../lib/apollo';
import Home from '../components/Home';

export default withData(() => {
  return <Home />;
});
