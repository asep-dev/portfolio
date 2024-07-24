import Image from 'next/image';

export default function Skill() {
   return (
      <section className="mb-7">
         <div className="mb-5 lg:mb-7">
            <h2 className="mb-1 text-2xl font-bold">Tech and tools</h2>
            <p>Here are the technologies and tools I use</p>
         </div>
         <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-5">
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../html.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">HTML</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../css.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">CSS3</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../javascript.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">Javascript</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../php.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">PHP</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../scss.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">SAAS</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../bootstrap.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">Bootstrap</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../tailwindcss.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">Tailwind</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../jquery.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">Jquery</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../react.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">React</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../vite.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">Vite</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../next-js.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">NextJs</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../codeigniter.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">Codeigniter</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../firebase.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">Firebase</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../git.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">GIT</h3>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/30 p-3 py-5 backdrop-blur-sm">
               <Image
                  className="h-12 w-12"
                  width={80}
                  height={80}
                  src="../github.svg"
                  alt=""
                  loading="lazy"
               />
               <h3 className="font-semibold">Github</h3>
            </div>
         </div>
      </section>
   );
}
