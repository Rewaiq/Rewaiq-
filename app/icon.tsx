import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#0A1B3C",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D9A93A",
          borderRadius: "8px",
          fontWeight: 900,
          fontFamily: "sans-serif",
          border: "1px solid #D9A93A",
        }}
      >
        R
      </div>
    ),
    {
      ...size,
    }
  );
}