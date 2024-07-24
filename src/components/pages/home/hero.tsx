const Hero = () => {
   return (
      <section className="relative mb-7 overflow-hidden rounded-xl bg-white/50 p-5 py-10 backdrop-blur-sm md:bg-white/30 lg:p-14">
         <button className="group absolute right-0 top-0 flex h-16 w-16 items-center justify-center rounded-bl-xl bg-primary/5 transition duration-500 hover:bg-primary lg:h-20 lg:w-20">
            <div className="flex flex-col items-center justify-center gap-0.5">
               <svg
                  className="w-8 text-primary transition duration-500 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                     d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273M6.52042 8.03192C6.67826 8.01687 6.83823 8.00917 7 8.00917C8.12582 8.00917 9.16474 8.38194 10.0005 9.01101"
                     stroke="currentColor"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M12 21L12 13M12 21C11.2998 21 9.99153 19.0057 9.5 18.5M12 21C12.7002 21 14.0085 19.0057 14.5 18.5"
                     stroke="currentColor"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>

               <span className="block text-xs transition duration-500 group-hover:text-white">
                  Resume
               </span>
            </div>
         </button>

         <div className="relative max-w-xl">
            <div className="relative">
               <span className="mb-4 inline-flex items-center gap-2 rounded-md bg-green-400/20 px-3 py-2 text-xs">
                  <div className="relative size-2 rounded-full bg-green-400 before:absolute before:size-2 before:animate-ping before:rounded-full before:bg-green-400"></div>
                  Available for work
               </span>
               <h1 className="mb-5 text-3xl font-extrabold -tracking-tight lg:mb-2 lg:text-4.5xl">
                  Asep supian tsaori
               </h1>
               <h2 className="mb-5 font-extrabold lg:mb-7 lg:text-3xl">
                  Frontend Developer
               </h2>
               <p className="mb-3">
                  Hello, I am a Frontend Developer with 3+ years of experience,
                  focused on building and optimizing responsive and intuitive
                  user interfaces.
               </p>
               <p className="mb-7">
                  In my role as a Frontend Developer, I have contributed in
                  various projects, ranging from e-commerce websites to
                  interactive web applications. Always ready to learn and adapt
                  to new technologies, and committed to continuously improving
                  skills in frontend development.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
               <div className="flex flex-col gap-1">
                  <span className="text-3xl font-extrabold">5+</span>
                  <span className="text-sm">Year of Experience</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-3xl font-extrabold">20+</span>
                  <span className="text-sm">Project Completed</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-3xl font-extrabold">2</span>
                  <span className="text-sm">Work Company</span>
               </div>
            </div>
         </div>

         <div className="absolute bottom-2 right-2 flex items-center gap-3">
            <span className="text-sm">Scroll Down</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
               <svg
                  className="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  color="#000000"
                  fill="none">
                  <path
                     d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                     stroke="currentColor"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </span>
         </div>
      </section>
   );
};

export default Hero;
