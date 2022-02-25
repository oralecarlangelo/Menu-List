import React from "react";
import Card from "../../commons/Card";

const All = ({ menuList }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-5">
      {menuList.map((menu) => (
        <Card menu={menu} />
      ))}
    </div>
  );
};

export default All;
