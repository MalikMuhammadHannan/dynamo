import React from "react";

interface Props {
  data: {}[];
  mainHeading: string;
  subpara: string;
}

const Privacy = ({ data, mainHeading, subpara }: Props) => {
  return (
    <div>
      <div className="md:text-center text-start flex flex-col gap-5">
        <h2 className="md:text-5xl text-4xl font-bold ">{mainHeading}</h2>
        <p className="text-base font-normal mb-12">{subpara}</p>
      </div>
      <div className="flex flex-col gap-10">
        {data?.map((item: any, index: number) => {
          return (
            <div key={index} className="flex italic flex-col gap-3">
              <h1 className="font-bold text-xl border-b border-aqua ">
                <span>{index < 9 && "0"}</span>
                {index + 1}: {item?.heading}
              </h1>
              <h1 className="font-medium">{item?.paragraph}</h1>
              <ul className="list-disc">
                {item?.subTitle?.map((item: any, index: number) => (
                  <li className="font-extralight" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Privacy;
