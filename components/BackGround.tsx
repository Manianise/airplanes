"use client";

import Airplanes from "./Airplanes";

/**
 * BackGround Component
 *
 * Renders a dynamic background with animated visual elements including spinning wheels
 * and rotating 3D cube SVG graphics positioned at various locations on the page.
 *
 * @returns {JSX.Element} A container div with multiple animated background elements
 */
export default function BackGround() {

  return (
    <div className={"bg-container"}>
      <Airplanes />
    </div>
  );
}
