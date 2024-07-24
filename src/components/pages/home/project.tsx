import Link from 'next/link';
import Image from 'next/image';

function Project() {
   return (
      <section className="mb-7">
         <div className="mb-5 lg:mb-7">
            <h2 className="mb-1 text-2xl font-bold">Featured Projects</h2>
            <p>Here are the projects I have created</p>
         </div>
         <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-5">
            <div className="group relative overflow-hidden rounded-2xl">
               <Image
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-125"
                  src="/1.jpg"
                  alt=""
                  width={500}
                  height={500}
               />
               <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/70">
                  <div className="flex h-full flex-col justify-between">
                     <div className="flex self-end p-5">
                        <div className="flex gap-2">
                           <Link href={'#'}>
                              <svg
                                 className="w-5 text-white"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 fill="none">
                                 <path
                                    d="M11.0991 3.00012C7.45013 3.00669 5.53932 3.09629 4.31817 4.31764C3.00034 5.63568 3.00034 7.75704 3.00034 11.9997C3.00034 16.2424 3.00034 18.3638 4.31817 19.6818C5.63599 20.9999 7.75701 20.9999 11.9991 20.9999C16.241 20.9999 18.3621 20.9999 19.6799 19.6818C20.901 18.4605 20.9906 16.5493 20.9972 12.8998"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                 />
                                 <path
                                    d="M20.556 3.49612L11.0487 13.0586M20.556 3.49612C20.062 3.00151 16.7343 3.04761 16.0308 3.05762M20.556 3.49612C21.05 3.99074 21.0039 7.32273 20.9939 8.02714"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                 />
                              </svg>
                           </Link>

                           <Link href={'#'}>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 width="24"
                                 height="24"
                                 color="#000000"
                                 fill="none">
                                 <path
                                    d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                 />
                                 <path
                                    d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                 />
                              </svg>
                           </Link>
                        </div>
                     </div>
                     <div className="p-5">
                        <h3 className="text-lg font-semibold text-white">
                           Test and Review
                        </h3>
                        <p className="mb-2 text-sm text-white">
                           Landing page contest design.
                        </p>

                        <div className="flex flex-wrap gap-2">
                           <span className="rounded-full bg-primary px-3 py-0.5 text-xs text-white">
                              ReactJs
                           </span>
                           <span className="rounded-full bg-primary px-3 py-0.5 text-xs text-white">
                              TailwindCSS
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <Image
                  className="h-full w-full object-cover"
                  src="/1.jpg"
                  alt=""
                  width={500}
                  height={500}
               />
            </div>
         </div>
      </section>
   );
}

export default Project;
