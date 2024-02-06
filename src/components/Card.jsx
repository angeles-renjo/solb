import React from "react";
import Link from "next/link";

const Card = ({ image, title, link }) => {
  return (
    <Link href={link}>
      <div className="w-[350px] h-[350px] relative">
        <img className="w-full h-full object-cover" src={image} alt={title} />
        <h2 className="absolute bottom-0 bg-white bg-opacity-60 w-full text-center text-black">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
