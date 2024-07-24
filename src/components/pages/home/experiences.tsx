import React from 'react';

const Experiences = () => {
   return (
      <section className="relative mb-7">
         <div className="mb-5 lg:mb-7">
            <h2 className="mb-1 text-2xl font-bold">Experiences</h2>
            <p>Here are the projects I have created</p>
         </div>
         <div className="relative">
            <div className="flex gap-x-3">
               <div className="relative before:absolute before:bottom-2.5 before:start-3.5 before:top-10 before:w-0.5 before:-translate-x-[0.5px] before:bg-primary last:before:hidden">
                  <div className="relative z-10 flex size-7 items-center justify-center">
                     <div className="size-3 rounded-full bg-primary before:absolute before:size-3 before:animate-ping before:rounded-full before:bg-primary"></div>
                  </div>
               </div>
               <div className="grow pb-7">
                  <h3 className="mb-2 text-xl font-semibold">
                     Frontend Developer
                  </h3>
                  <div className="flex items-center gap-2">
                     <span className="font-medium">Inovasi Karya Bersama</span>
                     <span className="text-xs italic">( Fulltime )</span>
                  </div>
                  <div className="mb-3">
                     <span className="text-xs">Nov 2022 - Dec 2023</span>
                  </div>
                  <p className="mb-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Cumque debitis voluptas eveniet explicabo voluptates sequi
                     delectus aut amet, sit voluptate obcaecati, doloribus optio
                     consequatur illo voluptatum. Voluptatum aspernatur sed
                     error.
                  </p>
                  <div>
                     <h4 className="mb-1 text-lg font-semibold">
                        Responsibility
                     </h4>
                     <ul className="list-inside list-disc">
                        <li>
                           Lorem ipsum, dolor sit amet consectetur adipisicing
                           elit.
                        </li>
                        <li>
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Adipisci.
                        </li>
                        <li>
                           Lorem ipsum dolor sit amet consectetur adipisicing.
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experiences;
