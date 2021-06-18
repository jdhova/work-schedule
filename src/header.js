import React from 'react';
import Name from './components/Name';

const Header = ({ allValues }) => {
  return (
    <div>
      {allValues.map((singleValue) => {
        return <Name key={singleValue} singleValue={singleValue} />;
      })}
      {/* <h3>hello world</h3> */}
    </div>
  );
};

export default Header;
