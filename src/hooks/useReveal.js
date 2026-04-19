"use client";
import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    });

    if (ref.current) observer.observe(ref.current);
  }, []);

  return [ref, show];
}