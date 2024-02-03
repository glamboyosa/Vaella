"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Room() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  console.log(isSmallDevice, "small device");
  return (
    <div className="sm:data-osa-true md:data-osa-false min-h-screen">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-svh rounded-lg border"
      >
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
