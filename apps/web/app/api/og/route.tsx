/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const imageData = (await fetch(new URL("./og.jpg", import.meta.url)).then(
    (res) => res.arrayBuffer()
  )) as string;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ objectFit: "cover" }}
          width="100%"
          height="100%"
          src={imageData}
          alt="vaella alt"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
