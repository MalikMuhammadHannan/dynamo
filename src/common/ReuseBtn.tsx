import Link from "next/link";
import { ReactNode } from "react";

const ReuseButton = ({
  text,
  textClass = "",
  iconClass = "",
  mainClass = "",
  icon,
  link,
  handleClick,
}: {
  text: string;
  textClass?: string;
  iconClass?: string;
  mainClass?: string;
  icon?: ReactNode;
  link?: any;
  handleClick?: () => void;
}) => {
  const allClass = "flex items-center cursor-pointer justify-center w-[100%]";
  const additionClass = `${allClass} ${mainClass}`;

  return link ? (
    <Link href={link} className={additionClass} onClick={handleClick}>
      <span className={textClass}>{text}</span>
      {icon}
    </Link>
  ) : (
    <button className={additionClass} onClick={handleClick}>
      <span className={textClass}>{text}</span>
      {icon}
    </button>
  );
};

export default ReuseButton;
