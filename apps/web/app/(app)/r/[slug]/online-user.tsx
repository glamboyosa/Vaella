import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const OnlineUser = () => {
  return (
    <div className="flex h-52 w-52 flex-col items-center justify-center gap-3 rounded-md p-5 hover:ring-2 hover:ring-yellow-50 hover:ring-inset">
      <Avatar className="size-14">
        <AvatarImage src="https://github.com/glamboyosa.png" alt="@shadcn" />
        <AvatarFallback>glamboyosa</AvatarFallback>
      </Avatar>
      <p className="rounded-sm px-2 py-1 text-xl shadow-md">Glamboyosa</p>
    </div>
  );
};

export default OnlineUser;
