import { ImageResponse } from "next/og";
import Image from "next/image";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "white",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={"/images/full-logo.png"}
          alt="Description of image"
          width={100}
          height={10}
          layout="responsive"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    ),
    { ...size }
  );
}
