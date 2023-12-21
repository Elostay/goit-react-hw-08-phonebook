import '../GlobalPagesStyles.css';

export const AnimatedBackground = () => {
  return (
    <div className="background">
      {new Array(20).fill(0).map((item, index) => (
        <span key={index}></span>
      ))}
    </div>
  );
};
export const CommonBackground = () => {
  return <div className="gradient-background"></div>;
};
