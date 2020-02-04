import React from 'react';
import Loading from 'react-loading-components';
import './Loader.scss';
 
const Load = (props) => (
  <div className="loader">
     <Loading type='bars' width={200} height={200} fill='#444545' />
  </div>
);
 
export default Load;