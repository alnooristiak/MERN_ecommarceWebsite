import React from "react";

const TittleText = ({ tittle }) => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-green-600 text-lg">{tittle}</h1>
      </div>
    </>
  );
};

export default TittleText;
