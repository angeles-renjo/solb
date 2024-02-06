import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ image, title, link }) => {
  return (
    <div>
      <Link href={link}>
        <div className="relative p-6">
          <Image
            src={image} // Path to your image
            alt={title} // Alt text for your image
            priority={true}
            width={400}
            height={300}
          />
          <h2 className="absolute bottom-0 bg-white bg-opacity-60 text-center text-black">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
