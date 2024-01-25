import HomeNav from "@/components/nav/home-nav";
import { Input } from "@/components/ui/input";
import { SparklesCore } from "@/components/ui/sparkles";
import { silkScreen } from "@/lib/font";
import { cn } from "@/lib/utils";

function Page(): JSX.Element {
  async function joinWaitlist(formData: FormData) {
    "use server";

    const email = formData.get("email");

    // mutate data
    // revalidate cache
  }
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
      <form
        action={joinWaitlist}
        className="mt-3.5 w-3/4 space-y-2.5 *:cursor-pointer flex flex-col items-center justify-center cursor-pointer"
      >
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Enter Email"
          className="w-1/2 text-white   flex h-9   rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
        <button
          type="submit"
          className="w-1/2 px-3 py-1 rounded-md bg-white text-black"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
}
Page.theme = "dark";
export default Page;
