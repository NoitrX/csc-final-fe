import Link from "next/link";
import React from "react";

interface Content {
  title: string;
  img: string;
  url: string;
}

interface ContentProps {
  contents: Content[];
}

const ContactComponent: React.FC<ContentProps> = ({ contents }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-white font-bold gap-10 md:gap-0">
      {/* Form */}
      {contents.map((content, index) => (
        <div key={index} className="flex flex-col justify-center items-center ">
          <img src={content.img} className="h-1/2 w-1/2 object-cover" alt="" />
          <h2>{content.title}</h2>
          <Link className="border border-gray-900 px-12 py-2 bg-[#071952] mt-3 rounded-lg hover:bg-blue-400 transition-all duration-200" href={content.url}>
            Click Here
          </Link>
        </div>
      ))}

      {/* Social Media */}
    </div>
  );
};

export default ContactComponent;
