import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-purple-900">
        <h1 tw="text-6xl text-center text-purple-200 mb-4 font-bold">
          {PROJECT_TITLE}
        </h1>
        <p tw="text-3xl text-purple-100 text-center max-w-[80%]">
          {PROJECT_DESCRIPTION}
        </p>
        <div tw="absolute bottom-8 text-xl text-purple-300">
          Built with 🌀 FlarbPower
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
