import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import Message from "./message";
const ten = Array(14).fill({});
const RoomChat = () => {
  return (
    <Card className="h-[70vh] w-11/12 min-w-[300px] overflow-y-scroll">
      <CardHeader>
        {" "}
        <CardTitle className="text-center text-2xl">Chat 👾</CardTitle>
      </CardHeader>
      <CardContent className="grid h-[45vh] w-full gap-2">
        <ScrollArea>
          {ten.map((_, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Message key={idx} />
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="grid w-full gap-2">
        <Textarea className="resize-none" placeholder="Join the conversation" />
        <Button>Send message</Button>
      </CardFooter>
    </Card>
  );
};

export default RoomChat;
