import React from "react";

export const SkeletonLoader = ({ className, width, height, align, gap }) => {
  return (
    <>
      <style jsx="true">
        {`
          .skeleton-loader {
            position: relative;
            z-index: 1;
            display: inline-flex;
            overflow: hidden;
            border-radius: 0.375rem;
            width: 100%;
            max-width: ${width ? width : "100%"}%;
            // height: ${height ? height : "20"}px;
            margin: ${align === "center" ? "0 auto" : align === "right" ? "0 0 0 auto" : gap ? `${gap}px 0` : "0"};
            background: linear-gradient(to right, #ffffff1a, #ffffff4d, #ffffff1a);
            background-size: 200%;
            animation: skeleton-loader 1s infinite linear;
          }

          @keyframes skeleton-loader {
            0% {
              background-position: 200%;
            }
            50% {
              background-position: 100%;
            }
            100% {
              background-position: 0;
            }
          }
        `}
      </style>
      <div className={`skeleton-loader ${className ? className : "h-6"}`} />
    </>
  );
};
