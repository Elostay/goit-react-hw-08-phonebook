import { AnimatedBg, GradientBackground } from './Backgrounds.styled';

export const AnimatedBackground = () => {
  return (
    <AnimatedBg>
      {new Array(20).fill(0).map((item, index) => (
        <span key={index}></span>
      ))}
    </AnimatedBg>
  );
};
export const CommonBackground = () => {
  return <GradientBackground></GradientBackground>;
};
