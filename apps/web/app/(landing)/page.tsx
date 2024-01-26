import HomeNav from "@/components/nav/home-nav";
import { SparklesCore } from "@/components/ui/sparkles";
import { silkScreen } from "@/lib/font";
import { cn } from "@/lib/utils";
import WaitlistForm from "@/components/waitlist-form";
import { SubmitWaitlistButton } from "@/components/submit-button";

export default function Page() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <HomeNav />
      <div className="flex flex-col gap-6 relative z-20">
        <h1
          className={cn(
            "md:text-7xl text-balance text-3xl lg:text-6xl font-bold text-center text-white",
            silkScreen.className
          )}
        >
          For when screaming into the void isn't enough,
        </h1>
        <h2 className="md:text-5xl text-pretty text-2xl lg:text-4xl  text-center text-white">
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
