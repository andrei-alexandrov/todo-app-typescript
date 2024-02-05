import React from "react";
import "./GlowingText.css";

interface Props {
  title: string;
}

const GlowingText: React.FC<Props> = ({ title }) => {
  const auroraItems = Array(4).fill(null);

  return (
    <div className="content">
      <h1 className="title">
        {title}
        <div className="aurora">
          {auroraItems.map((_, index) => (
            <div key={index} className="aurora-item"></div>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default GlowingText;
