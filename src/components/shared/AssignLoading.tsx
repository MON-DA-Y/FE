"use client";

import Lottie from "lottie-react";
import loadingAnimation from "../../../public/lotties/assignLoading.json";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <div style={{ width: 200, height: 200 }}>
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
}
