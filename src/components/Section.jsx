
const Section = ({
  className,
  id,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 ${crosses ? "lg:py-32" : ""} ${className || ""}`
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
