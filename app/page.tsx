import { Button, ExpressIcon, Icons, NextIcon } from "@/components";
import { cn } from "@/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-24">
      <section className="w-full gap-6 flex flex-col items-center relative md:items-start md:flex-row-reverse">
        <div className="relative self-center my-6 w-52 h-56 sm:w-80 sm:h-80 md:flex-1 md:h-[560px] lg:flex-[0.6]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => {
            return <div key={el} className={cn("tilt-hover-point")} />;
          })}
          <Image src="/1212.png" alt="me" fill className="tilt-image object-cover rounded-xl" />
        </div>

        <div className="flex flex-col h-full gap-3 md:flex-1 md:gap-5 md:justify-center md:h-[620px]">
          <h2 className="font-semibold text-center md:text-2xl md:text-left">INTRODUCTION</h2>

          <p className="text-3xl font-semibold text-center md:text-left md:text-5xl lg:text-[4.25rem] lg:leading-[4.5rem]">
            {`I'm Rizal Alfandi`}
          </p>

          <p className="text-3xl font-semibold text-center text-transparent my-2 bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 md:my-0 md:text-left md:text-5xl lg:text-[4.25rem] lg:leading-[4.5rem]">
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

      <section className="w-full flex gap-6 flex-col items-center">
        <div className="text-center">
          <h1 className="text-2xl mb-1 font-semibold sm:text-3xl md:text-4xl md:mb-2">Modern stack and modern tools</h1>

          <p>I develop software using modern stacks and tools to create best product.</p>
        </div>

        <div className="mx-auto w-full max-w-screen-md">
          <div className="my-3 aspect-square relative">
            <Icons.react className="absolute left-[7.36%] top-[28.97%] bottom-[33.65%] right-[48.95%] h-[42%] w-[42%] stack-icon" />
            <Icons.tailwind className="absolute left-[18.16%] top-[83.65%] bottom-[9.85%] right-[70.75%] h-[15%] w-[15%] stack-icon" />
            <Icons.css className="absolute left-[0%] top-[44.26%] bottom-[48.76%] right-[93.88%] h-[8%] w-[8%] stack-icon" />
            <Icons.typescript className="absolute top-[26%] right-[37%] h-[19%] w-[19%] stack-icon" />
            <Icons.vite className="absolute left-[3.06%] top-[30.11%] bottom-[58.8%] right-[85.95%] h-[14%] w-[14%] stack-icon" />
            <Icons.vscode className="absolute left-[9.56%] top-[19%] h-[10%] w-[10%] stack-icon" />
            <NextIcon className="absolute left-[21.7%] top-[5%] bottom-[75.24%] right-[56.41%] h-[25%] w-[25%] stack-icon" />
            <ExpressIcon className="absolute left-[1.43%] top-[54.6%] bottom-[36.62%] right-[86.71%] h-[13%] w-[13%] stack-icon" />
            <Icons.vue className="absolute left-[5.45%] top-[68.07%] bottom-[15.2%] right-[74.76%] h-[24%] w-[24%] stack-icon" />
            <Icons.cy className="absolute left-[32%] bottom-[19.5%] h-[17%] w-[17%] stack-icon" />
            <Icons.postgres className="absolute left-[33%] bottom-[0%] h-[24%] w-[24%] stack-icon" />
            <Icons.html className="absolute left-[57%] bottom-[2%] h-[10%] w-[10%] stack-icon" />
            <Icons.svelte className="absolute right-[9%] bottom-[11%] h-[32%] w-[32%] stack-icon" />
            <Icons.mongo className="absolute right-[43%] bottom-[32%] h-[13%] w-[13%] stack-icon" />
            <Icons.node className="absolute right-[30%] top-[2%] h-[22%] w-[22%] stack-icon" />
            <Icons.jest className="absolute right-[1.5%] top-[55%] h-[10%] w-[10%] stack-icon" />
            <Icons.router className="absolute right-[27%] bottom-[40%] h-[16%] w-[16%] stack-icon" />
            <Icons.go className="absolute right-[0%] bottom-[37%] h-[30%] w-[30%] stack-icon" />
            <Icons.javascript className="absolute right-[21%] top-[31%] h-[11%] w-[11%] stack-icon" />
            <Icons.git className="absolute right-[5%] top-[27%] h-[14%] w-[14%] stack-icon" />
            <Icons.figma className="absolute right-[14%] top-[14%] h-[16%] w-[16%] stack-icon" />
          </div>
        </div>
      </section>
    </div>
  );
}
