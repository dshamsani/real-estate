import type { FC } from "react";

export interface Feature {
  value: string;
  label: string;
}

export const FeaturesRow: FC<{ items: Feature[]; className?: string }> = ({ items, className }) => (
  <div className={`justify-content-between align-items-center ${className ?? ""}`} style={{ color: "white" }}>
    {items.map((f) => (
      <div key={f.label}>
        <h5 className="fw-bold fs-1">{f.value}</h5>
        <span className="gray-100">{f.label}</span>
      </div>
    ))}
  </div>
);
