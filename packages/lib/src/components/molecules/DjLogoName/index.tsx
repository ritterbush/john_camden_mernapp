import React from "react";
import DjLogo from "../../atoms/DjLogo/index";

export interface DjLogoNameProps {
  size: string;
  text: string;
}

export const DjLogoName = ({ size, text }: DjLogoNameProps) => {
  return (
    <div style={{ display: "inline", margin: "3px" }}>
      <DjLogo size={size}>
        <span
          style={{
            margin: `${parseInt(size) / 10} ${parseInt(size) / 4} 0 ${
              parseInt(size) / 3
            }`,
            fontSize: `${parseInt(size) / 4}px`,
            fontWeight: "bold",
            color: "rgb(255,193,7)",
          }}
        >
          {text}
        </span>
      </DjLogo>
    </div>
  );
};

export default DjLogoName;
