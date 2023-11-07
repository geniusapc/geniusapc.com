import { IHtmlTags } from "./types";

const HtmlTag = ({ op, ct, className, children }: IHtmlTags) => {
  return (
    <div className={`text-gray400  ml-2 md:ml-4 ${className} `}>
      <span className="html-tags"> {op} </span>

      <span className="text-white html-content pl-2 md:pl-8">{children}</span>
      <span className="html-tags"> {ct} </span>
    </div>
  );
};
export default HtmlTag;
