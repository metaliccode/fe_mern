import React from "react";

// fungsi biasa
// function StatelessComp() {
//   return (<div>StatelessComp</div>);
// }

// arrow function / rafce
const StatelessComp = (props) => {
  return (
    // <> </> adalah React.Fragment
    <>
      <div className="container text-center mt-5">
        <h1>Stateless Component</h1>
      </div>
    </>
  );
};

export default StatelessComp;
