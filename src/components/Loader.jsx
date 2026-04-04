import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const svgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "elastic(0.13, 0.5)",
      },
    });

    gsap.set(svgRef.current, { visibility: "visible" });

    tl.to("#box1", {
      rotation: "+=180",
      transformOrigin: "100% 0%",
    })
      .from(
        "#box5",
        {
          rotation: "-=180",
          transformOrigin: "0% 0%",
        },
        0
      )
      .to("#box1", { rotation: "+=90", transformOrigin: "0% 0%" })
      .to("#box1", { rotation: "+=90", transformOrigin: "0% 100%" })
      .to("#box1", { rotation: "+=90", transformOrigin: "100% 100%" })
      .to("#box1", { rotation: "+=180", transformOrigin: "100% 0%" })

      // BOX 2
      .to(
        "#box2",
        { rotation: "+=180", transformOrigin: "100% 0%" },
        "-=0.5"
      )
      .to("#box2", { rotation: "+=90", transformOrigin: "0% 0%" })
      .to("#box2", { rotation: "+=90", transformOrigin: "0% 100%" })
      .to("#box2", { rotation: "+=90", transformOrigin: "100% 100%" })
      .to("#box2", { rotation: "+=180", transformOrigin: "100% 0%" })

      // BOX 3
      .to(
        "#box3",
        { rotation: "+=180", transformOrigin: "100% 0%" },
        "-=0.5"
      )
      .to("#box3", { rotation: "+=90", transformOrigin: "0% 0%" })
      .to("#box3", { rotation: "+=90", transformOrigin: "0% 100%" })
      .to("#box3", { rotation: "+=90", transformOrigin: "100% 100%" })
      .to("#box3", { rotation: "+=180", transformOrigin: "100% 0%" })

      // BOX 4
      .to(
        "#box4",
        { rotation: "+=180", transformOrigin: "100% 0%" },
        "-=0.5"
      )
      .to("#box4", { rotation: "+=90", transformOrigin: "0% 0%" })
      .to("#box4", { rotation: "+=90", transformOrigin: "0% 100%" })
      .to("#box4", { rotation: "+=90", transformOrigin: "100% 100%" })
      .to("#box4", { rotation: "+=180", transformOrigin: "100% 0%" })

      // BOX 5
      .to(
        "#box5",
        { rotation: "+=180", transformOrigin: "100% 0%" },
        "-=0.5"
      )
      .to("#box5", { rotation: "+=90", transformOrigin: "0% 0%" })
      .to("#box5", { rotation: "+=90", transformOrigin: "0% 100%" })
      .to("#box5", { rotation: "+=90", transformOrigin: "100% 100%" })

      // whole movement
      .to(
        "#whole",
        {
          duration: 10,
          x: -(64 * 5),
          ease: "none",
        },
        0
      );
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#f6efe5] overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 400 400"
        className="w-1/2 h-1/2 invisible"
      >
        <g id="whole">
          <g id="box1">
            <rect x="40" y="200" width="34" height="34" fill="#FB8500" />
          </g>
          <g id="box2">
            <rect x="104" y="200" width="34" height="34" fill="#FFB703" />
          </g>
          <g id="box3">
            <rect x="168" y="200" width="34" height="34" fill="#023047" />
          </g>
          <g id="box4">
            <rect x="232" y="200" width="34" height="34" fill="#219EBC" />
          </g>
          <g id="box5">
            <rect x="296" y="200" width="34" height="34" fill="#8ECAE6" />
          </g>
        </g>
      </svg>
      <p className="absolute bottom-10 text-gray-600 text-sm">Fast. Secure Delivery You Can Trust</p>
    </div>
  );
}