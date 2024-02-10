"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Toolbar } from "@/components/ui/toolbar";
import { useMediaQuery } from "@uidotdev/usehooks";
import OnlineUser from "./online-user";
import RoomChat from "./room-chat";
const ten = Array(10).fill({});
export default function Room() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  console.log(isSmallDevice, "small device");
  return (
    <div className="min-h-screen">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-svh rounded-lg border"
      >
        <ResizablePanel defaultSize={70}>
          <div className="grid grid-cols-2 items-center justify-center gap-2 p-6 md:grid-cols-autofit">
            {ten.map((_, idx) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <OnlineUser key={idx} />
            ))}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30}>
          <div className="mt-10 flex flex-col items-center justify-center gap-12">
            <RoomChat />
            <Toolbar />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
