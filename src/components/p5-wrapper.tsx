"use client";
// src/P5Wrapper.js
import { useEffect, useRef } from "react";
import p5 from "p5";
import { sketch } from "../scripts/sketch";
import { SelectedSearch } from "@/utils/types";

interface P5WrapperProps {
  search: SelectedSearch;
}

export function P5Wrapper({ search }: P5WrapperProps) {
  const sketchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const s = (p: p5) => sketch(p, search);
    const canvas = sketchRef.current ? new p5(s, sketchRef.current) : null;

    return () => {
      canvas?.remove(); // Cleanup the sketch when the component is unmounted
    };
  }, [search]);

  return <div ref={sketchRef}></div>;
}
