import React from "react";
import { Link } from "react-router-dom";

const RightImage = ({product}) => {
  return (
    <div className="w-screen h-140 flex gap-10 px-64 ">
      <div className="w-1/3 flex flex-col justify-center gap-6">
        <h1 className="font-semibold text-2xl">{product.title}</h1>

        <p>
          {product.details}
        </p>

        <Link className="text-blue-400 mb-8 inline-block">
          Learn More
          <img
            className="h-4 w-4 mt-1.5 ml-2 inline-block pb-2"
            src="https://img.icons8.com/?size=100&id=39777&format=png&color=228BE6"
            alt=""
          />
        </Link>
      </div>

      <div className="w-2/3 flex-row-reverse" >
        <img src={product.img} alt="" />
      </div>
    </div>
  );
};

export default RightImage;
