import React from 'react';
import Name from './components/Name';

const Header = ({ allValues, toggleValues }) => {
  return (
    <div>
      <h2>Employee Responsilities</h2>
      {allValues.map((singleValue) => {
        return (
          <Name
            key={singleValue.id}
            toggleValues={toggleValues}
            singleValue={singleValue}
          />
        );
      })}
      {/* <h3>hello world</h3> */}
    </div>
  );
};

export default Header;
