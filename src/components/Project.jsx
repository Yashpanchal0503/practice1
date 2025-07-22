import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({ title, description, subDescription, href, image, tags,setPreview }) => {
    const[isHidden,setIsHidden]=useState(false);
  return (
    <>
      <div 
        className="flex flex-wrap items-center justify-between py-10 space-y-14 sm:space-y-0"
        onMouseEnter={()=>setPreview(image)}
        onmouseleave={()=>setPreview(null)}
        
    >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag, index) => (
              <span key={tag.id || index}>{tag.name || tag}</span>
            ))}
          </div>
        </div>
        <button onClick={()=> setIsHidden(true)} className="flex items-center gap-1 cursor-pointer hover-animation">
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="arrow right" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      { isHidden && (<ProjectDetails
        title={title}
        description={description}
        subDescription={subDescription}
        href={href}
        image={image}
        tags={tags}
        closeModal={()=>setIsHidden(false)}
      />)}
    </>
  );
};

export default Project;
