import { useEffect } from "react";
import gsap from "gsap";

/**
 * Custom hook to run standard page animations.
 * Automatically runs floating pill animations and entry transitions for elements with:
 * - .anim-title (fades up primary heading)
 * - .anim-fade-up (fades up target element)
 * - .anim-stagger (staggers children or matched items)
 * - .anim-slide-left (slides in from left)
 * - .anim-slide-right (slides in from right)
 */
export function usePageAnimations(containerRef: React.RefObject<HTMLElement | null>) {
    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // 1. Floating Pills Animation
            if (document.querySelector(".floating-pill")) {
                gsap.to(".floating-pill", {
                    y: "random(-12, 12)",
                    x: "random(-8, 8)",
                    rotation: "random(-12, 12)",
                    duration: "random(4, 6)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }

            // 2. Title Animation
            if (document.querySelector(".anim-title")) {
                gsap.fromTo(
                    ".anim-title",
                    { y: 60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.1, ease: "power4.out" }
                );
            }

            // 3. Simple Fade Up Elements
            if (document.querySelector(".anim-fade-up")) {
                gsap.fromTo(
                    ".anim-fade-up",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
                );
            }

            // 4. Stagger Items
            if (document.querySelector(".anim-stagger")) {
                gsap.fromTo(
                    ".anim-stagger",
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        delay: 0.4,
                        ease: "power3.out",
                    }
                );
            }

            // 5. Slide Left Elements
            if (document.querySelector(".anim-slide-left")) {
                gsap.fromTo(
                    ".anim-slide-left",
                    { x: -30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
                );
            }

            // 6. Slide Right Elements
            if (document.querySelector(".anim-slide-right")) {
                gsap.fromTo(
                    ".anim-slide-right",
                    { x: 30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef]);
}
