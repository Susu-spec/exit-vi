import { Splide, SplideSlide } from "@splidejs/react-splide";
import { workItems } from "../../constants/data";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function WorkSlider() {
    return (
        <Splide
            options={{
                type: "loop",
                drag: "free",
                speed: 6000,
                clones: 22,
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