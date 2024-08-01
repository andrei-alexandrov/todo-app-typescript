import {type  ReactNode } from "react";
import "./InfoBox.css";

type InfoBoxProps = {
    mode: "hint";
    children: ReactNode;
  };
  
 type WarningBoxProps = {
    mode: "warning";
    severity: "low" | "medium" | "high";
    children: ReactNode;
  };

const InforBox = (props: InfoBoxProps | WarningBoxProps) => {
  const { children, mode } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InforBox;
