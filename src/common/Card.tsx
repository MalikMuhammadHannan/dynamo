import React from "react";

interface Props {
  item: { attribute: string; description: string };
  index: number;
}

const Card = ({ item, index }: Props) => {
  return (
    <div
      key={index}
      className=" p-5 shadow-xl rounded-[24px] hover:border-aqua 
    transform duration-500  transition-all
    break-words  border-2 border-aqua border-opacity-10"
    >
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-white">
        {item.attribute}
      </h5>
      <p className="mb-3 font-light text-sm text-[#d1cccc] break-words">
        {item.description}
      </p>
    </div>
  );
};

export default Card;
