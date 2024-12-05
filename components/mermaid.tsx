"use client";
import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

// Initialize mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: "default",
});

const Mermaid = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      try {
        mermaid
          .render("mermaid-" + Math.random().toString(36).substring(7), chart)
          .then(({ svg, bindFunctions }) => {
            if (ref.current) {
              ref.current.innerHTML = svg;
              if (bindFunctions) bindFunctions(ref.current);
            }
          })
          .catch((error) => {
            console.log("Mermaid render error:", error);
          });
      } catch (error) {
        console.log("Mermaid initialization error:", error);
        if (ref.current) {
          ref.current.innerHTML = `<pre>Error initializing Mermaid diagram </pre>`;
        }
      }
    }
  }, [chart]);

  return (
    <div
      ref={ref}
      className="mermaid-container bg-white py-2 rounded-md border"
    ></div>
  );
};

export default Mermaid;
