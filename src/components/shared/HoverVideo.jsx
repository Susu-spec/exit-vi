import { useEffect, useRef, useState } from "react";
import { useCursor } from "../../context/CursorProvider";


export default function HoverVideo({ src, poster }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { setView, setDefault } = useCursor();

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
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={isHovered}
        style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity .3s ease-in-out",
            borderRadius: ".5rem",
            cursor: "none"
        }}
      />
    </div>
  );
}
