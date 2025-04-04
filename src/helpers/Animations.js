import { keyframes } from "@emotion/react";

export const blurAnimation = keyframes`
0% {
  filter: blur(10px);
}
100% {
  filter: blur(0);
}
`;
export const floatAnimation = keyframes`
0% {
  transform: translateY(0);
}
50% {
  transform: translateY(-10px);
}
100% {
  transform: translateY(0);
}
`;