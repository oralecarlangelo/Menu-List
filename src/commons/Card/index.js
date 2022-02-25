import React from "react";

const Card = ({ menu }) => {
  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;

  return (
    <div className=" w-64 shadow-lg relative bg-white rounded-xl  h-48">
      <div className="overflow-hidden h-full w-full  rounded-xl  z-10 bg-white absolute p-3 hover:transition-all duration-300 hover:opacity-20 hover:-translate-x-10 hover:-translate-y-10">
        <h3 className="text-lg font-semibold text-center">
          {truncate(menu.title, 25, "...")}
        </h3>
        <p
          className="bg-center bg-no-repeat  rounded-xl z-0 w-full bg-cover h-[83%]"
          style={{
            backgroundImage: `url(${menu.imgUrl})`,
          }}
        ></p>
      </div>
      <div className="bg-center bg-no-repeat  rounded-xl z-0 w-full bg-cover h-full p-3">
        {menu.shortDescription}
      </div>
    </div>
  );
};

export default Card;
