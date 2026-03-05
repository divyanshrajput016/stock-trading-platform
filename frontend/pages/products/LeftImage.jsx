import React from "react";
import { Link } from "react-router-dom";

const LeftImage = ({product}) => {
  return (
    <div className="w-screen h-120 flex gap-4 px-52 pt-12 mb-18">
      <div className="w-2/3 flex items-center">
        <img src={product.img} alt="" />
      </div>
      <div className="w-1/3 flex flex-col justify-center gap-6">
        <h1 className="font-semibold text-2xl">{product.title}</h1>

        <p className="">
          {product.details}
        </p>

        <Link className="text-blue-400 mb-8 inline-block">
          Try Demo
          <img
            className="h-4 w-4 mt-1.5 ml-2 inline-block pb-2"
            src="https://img.icons8.com/?size=100&id=39777&format=png&color=228BE6"
            alt=""
          />
        </Link>

        <div className="flex ">
          <img src="images\googlePlayBadge.svg" alt="" className="mr-4"/>
          <img src="images\appstoreBadge.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftImage;
