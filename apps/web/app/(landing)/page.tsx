import HomeNav from "@/components/nav/home-nav";
import { SubmitWaitlistButton } from "@/components/submit-button";
import { SparklesCore } from "@/components/ui/sparkles";
import WaitlistForm from "@/components/waitlist-form";
import { silkScreen } from "@/lib/font";
import { cn } from "@/lib/utils";

export default async function Page() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <HomeNav />
      <div className="relative z-20 flex flex-col gap-6">
        <h1
          className={cn(
            "text-balance text-center font-bold text-3xl text-white lg:text-6xl md:text-7xl",
            silkScreen.className
          )}
        >
          For when screaming into the void isn't enough,
        </h1>
        <h2 className="text-pretty text-center text-2xl text-white lg:text-4xl md:text-5xl">
          <p>
            {" "}
            Introducing Vaella , open-source, private by default, audio
            rant-rooms.
          </p>
          <p>
            {" "}
            Set your agenda, create a room, invite your friends, bare your soul.
          </p>
        </h2>
      </div>
      <WaitlistForm>
        <SubmitWaitlistButton />
      </WaitlistForm>
    </div>
  );
}
