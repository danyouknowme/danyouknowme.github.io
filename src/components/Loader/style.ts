import styled, { keyframes } from 'styled-components'

const bump = keyframes`
  0%,
	42%,
	46%,
	51%,
	55%,
	59%,
	63%,
	67%,
	71%,
	74%,
	78%,
	81%,
	85%,
	88%,
	92%,
	100% { transform: translate(0,0); }
	44% { transform: translate(1.33%,6.75%); }
	53% { transform: translate(-16.67%,-0.54%); }
	61% { transform: translate(3.66%,-2.46%); }
	69% { transform: translate(-0.59%,15.27%); }
	76% { transform: translate(-1.92%,-4.68%); }
	83% { transform: translate(9.38%,0.96%); }
	90% { transform: translate(-4.55%,1.98%); }
`

const worm = keyframes`
  0% { stroke-dashoffset: 10; }
  25% { stroke-dashoffset: 295; }
  100% { stroke-dashoffset: 1165; }
`

export const LoaderComponent = styled.svg`
  animation-name: ${bump};
  animation-timing-function: linear;
  width: 8em;
  height: 8em;
  animation-duration: 3s;
	animation-iteration-count: infinite;

  .pl__ring {
    stroke: hsla(223,10%,10%,0.1);
    transition: stroke 0.3s;
  }

  .pl__worm {
    animation-name: ${worm};
    animation-timing-function: cubic-bezier(0.42,0.17,0.75,0.83);
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  @media (prefers-color-scheme: dark) {
    .pl__ring {
      stroke: hsla(233,10%,90%,0.1);
    }
  }
`
