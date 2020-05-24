import React from "react";

export interface DjLogoProps {
  size: string;
  children?: React.ReactNode;
}

export const DjLogo = ({ size, children }: DjLogoProps) => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        backgroundColor: "rgb(0, 44, 144)",
        textAlign: "center",
        borderRadius: parseInt(size) / 10,
        paddingBottom: parseInt(size) / 4,
      }}
    >
      <img
        src='http://localhost:8000/djinndexLogo.svg'
        className='./djinndexLogo.svg'
        alt='djinndex-logo'
        // @ts-ignore
        style={{
          height: `${size}px`,

          margin: `${parseInt(size) / 4}px ${parseInt(size) / 4}px ${
            parseInt(size) / 10
          }px ${parseInt(size) / 3}px`,
        }}
      />
      {children}
    </div>
  );
};

export default DjLogo;
