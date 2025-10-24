import { Splide, SplideSlide } from "@splidejs/react-splide";
import { workItems } from "../../constants/data";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useEffect, useRef } from "react";

export default function WorkSlider() {
    const splideRef = useRef(null);

    useEffect(() => {
        const el = splideRef.current?.splide?.root;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const autoScroll = splideRef.current?.splide?.Components?.AutoScroll;
                if (!autoScroll) return;

                if (entry.isIntersecting) {
                    autoScroll.play();
                } else {
                    autoScroll.pause();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Splide
            ref={splideRef}
            options={{
                type: "loop",
                drag: "free",
                speed: 6000,
                clones: 44,
                autoWidth: true,
                autoplay: false,
                perPage: "auto",
                easing: "linear",
                arrows: false,
                pagination: false,
                dragMinThreshold: { mouse: 5, touch: 10 },
                autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    speed: 1,
                    autoStart: true,
                },
                interval: 0,
            }}
            extensions={{ AutoScroll }}>
            {workItems.map((item, i) => (
                <SplideSlide
                    key={i}
                >
                    <div className="work-title gray uppercase mr-drag">
                        {item}
                    </div>
                </SplideSlide>
            ))}
        </Splide>
    )
}