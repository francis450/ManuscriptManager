const ProgressBar = ({ value, size = "md", color = "blue" }) => {
  const progress = Math.min(Math.max(value, 0), 100); // Clamp value between 0 and 100

  return (
    <div className={`w-full h-${size}`}>
      <div
        className={`h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden`}
      >
        <div
          className={`w-${progress}% h-full rounded-full bg-${color}-600`}
          style={{ transition: "width 0.3s ease-in-out" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
