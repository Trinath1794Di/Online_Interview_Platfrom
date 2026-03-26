import React from "react";
import Bgvideo from "../assets/videos/bgvid.mp4";

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={Bgvideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

    </div>
  );
}