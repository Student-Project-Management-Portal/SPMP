import React from "react";
import {tempData} from "./data";
import ProjectCardComp from "@/Components/ProjectCardComp";
import Heading from "@/Components/Heading";
import Details from "@/Components/Details";
import Certification from "./Certification";


const layout = () => {
  console.log(tempData)
  return (
    <section className="flex flex-col lg:flex-row bg-gray-100">
      {/* left side area */}
      <div className="w-screen lg:w-1/4">
          <Details/>
      </div>
      {/* right side area */}
      <div className=" w-screen lg:w-3/4 py-6  min-h-full lg:min-h-screen ">
     {/* projects */}
      <Heading name="Projects"/>
     <div className="flex flex-col space-y-8">
       {
         tempData.map((e,i)=>(
           <ProjectCardComp  
             key={i}
             projectName={e.projectName}
             githubLink={e.githubLink}
             deployLink={e.deployLink}
             tech={e.tech}
             teamMate={e.teamMate}
             material = {e.material}
           />
         ))
       }
     </div>

     {/* <hr className="border-2 my-5 w-3/4 mx-auto" /> */}
     <Heading name="Certifications"/>
       <div className="flex flex-col space-y-8">
          <Certification/>
       </div>
     </div>
    </section>
    
  );
};

export default layout;
