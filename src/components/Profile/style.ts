import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  @media (max-width: 424px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const ProfileTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  h1 {
    span {
      font-family: 'Oswald', sans-serif;
      font-size: 2.5rem;
      font-weight: 600;
    }
  }

  span {
    font-size: 1.2rem;
    font-weight: 300;
  }

  @media (max-width: 424px) {
    margin-top: 0.8rem;
    align-items: center;

    h1 {
      span {
        font-size: 2rem;
      }
    }
  }
`

export const ProfileImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`
