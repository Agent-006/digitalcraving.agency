const labels = ["RESEARCH", "DIGITAL MARKETING", "DESIGNING", "DEVELOPMENT"];

export function VerticalLabels() {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-16">
      {labels.map((label) => (
        <div
          key={label}
          className="vertical-text text-xs font-medium tracking-widest text-white/60"
        >
          {label}
        </div>
      ))}
    </div>
  );
}