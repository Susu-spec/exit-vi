import { useEffect, useRef, useState } from "react";
import { useCursor } from "../../context/CursorProvider";
import { useBreakpoint, useBreakpointValue } from "@chakra-ui/react";


export default function HoverVideo({ src, poster, className }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { setView, setDefault } = useCursor();
  const responsiveHovered = useBreakpointValue({
    base: true,
    lg: isHovered
  })

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
        video.currentTime = 0;
        video.play().catch(() => {});
    } else {
        video.pause();
        video.currentTime = 0;
    }
    }, [isHovered]);

  return (
    <div
      onMouseEnter={() => {
        setView()
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setDefault();
        setIsHovered(false)
    }}
    className="relative overflow-hidden"
    >
      <video
        preload="metadata"
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={responsiveHovered}
        className={`inner-video ${className}`}
        style={{
            objectFit: "cover",
            transition: "opacity .3s ease-in-out",
            borderRadius: ".5rem",
            cursor: "none"
        }}
      />
    </div>
  );
}
