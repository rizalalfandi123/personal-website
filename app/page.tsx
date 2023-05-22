import { Button } from "@/components";
import { cn } from "@/utils";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full gap-6 flex flex-col items-center relative md:items-start md:flex-row-reverse">
        <div className="relative self-center my-6 w-52 h-56 sm:w-80 sm:h-80 md:flex-1 md:h-[560px] lg:flex-[0.6]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => {
            return <div key={el} className={cn("tilt-hover-point")} />;
          })}
          <Image src="/1212.png" alt="me" fill className="tilt-image object-cover rounded-xl" />
        </div>

        <div className="flex flex-col h-full gap-3 md:flex-1 md:justify-center md:h-[620px]">
          <h2 className="font-semibold text-center md:text-2xl md:text-left">INTRODUCTION</h2>

          <p className="text-3xl font-semibold text-center md:text-left md:text-5xl lg:text-[4.25rem] lg:leading-[4.5rem]">
            I'm Rizal Alfandi <br />
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-3xl font-semibold text-center md:text-left md:text-5xl lg:text-[4.25rem] lg:leading-[4.5rem]">
            Fullstack Web Developer
          </p>

          <p className="text-center md:text-left md:max-w-[90%] xl:max-w-[80%]">
            I develop software using modern stacks to create best product. I have more than 2 years of experience in web
            development and can work according to targets. Programming is my passion, and I am highly motivated to do
            it.
          </p>

          <Button className="mt-8 md:mt-4 md:h-12 md:w-44 lg:h-14 lg:w-52 lg:text-xl">Contact me</Button>
        </div>
      </section>
    </>
  );
}
