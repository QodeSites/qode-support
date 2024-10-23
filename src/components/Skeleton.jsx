// components/Skeleton.js
import React from "react";
import Section from "./container/Section";

const Skeleton = () => {
  const skeletonStyle = {
    padding: "20px",
    margin: "20px 0",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
    animation: "shimmer 1.5s infinite linear",
  };

  const shimmerStyle = {
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
  };

  const skeletonTitleStyle = {
    ...shimmerStyle,
    width: "60%",
    height: "30px",
    marginBottom: "10px",
    borderRadius: "5px",
  };

  const skeletonDateStyle = {
    ...shimmerStyle,
    width: "30%",
    height: "20px",
    marginBottom: "15px",
    borderRadius: "5px",
  };

  const skeletonContentStyle = {
    ...shimmerStyle,
    width: "100%",
    height: "150px",
    borderRadius: "5px",
  };

  return (
    <Section className="mt-5">
      <div style={skeletonStyle}>
        <div style={skeletonTitleStyle}></div>
        <div style={skeletonDateStyle}></div>
        <div style={skeletonContentStyle}></div>
        <style jsx>{`
          @keyframes shimmer {
            0% {
              background-position: -100% 0;
            }
            100% {
              background-position: 100% 0;
            }
          }
        `}</style>
      </div>
    </Section>
  );
};

export default Skeleton;
