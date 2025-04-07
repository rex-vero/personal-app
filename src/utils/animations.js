import { keyframes } from "@emotion/react";

export const blurAnimation = keyframes`
0% {
  filter: blur(20px);
  opacity: 0;
}
100% {
  filter: blur(0);
  opacity: 1;
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
export const modal = keyframes`
from {
   opacity: 0;
}
to {
  opacity: 1;
}
`;