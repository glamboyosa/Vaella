import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//type MessageProps = {};

const Message = () => {
  return (
    <div className="grid w-11/12 justify-start gap-2 p-1">
      <div className="flex w-full items-center gap-2">
        <Avatar className="size-6">
          <AvatarImage src="https://github.com/glamboyosa.png" alt="@shadcn" />
          <AvatarFallback>Glamboyosa</AvatarFallback>
        </Avatar>
        <p className="text-base">glamboyosa</p>
        <p className="ml-auto text-slate-200 text-sm">1 min ago</p>
      </div>
      <div className="text-xl">Hey, i just met you</div>
    </div>
  );
};

export default Message;
