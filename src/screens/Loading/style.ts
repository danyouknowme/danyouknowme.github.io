import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LoadingScreenContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
`

export const SplitterScreen = styled(motion.div)`
  position: absolute;
  background-color: #f5f5f5;
  width: 50%;
  height: 100%;
  right: 0;
  z-index: 5;

  &:first-child {
    left: 0;
  }
`

export const LoaderContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`
