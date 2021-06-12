import React from 'react';
import Name from './components/Name';

const Header = ({ names }) => {
  return (
    <div>
      {names.map((name) => {
        return <Name name={name} />;
      })}
      {/* <h3>hello world</h3> */}
    </div>
  );
};

export default Header;
