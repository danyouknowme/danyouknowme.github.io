import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContentSection = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`

export const WorkingContainer = styled(motion.div)`
  margin: 1.4rem 0;

  .working__title {
    display: flex;
    align-items: center;

    h2 {
      font-size: 1.6rem;
      font-weight: 600;
      margin-left: 0.4rem;
    }
  }
`

export const WorkingList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`

export const WorkingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: calc(100% / 3);

  img {
    max-width: 200px;
    max-height: 120px;
    margin: 20px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  .working__text {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    h3 {
      font-size: 1.3rem;
      font-weight: 500;

      @media (max-width: 768px) {
        margin-bottom: 0.3rem;
      }
    }

    @media (max-width: 500px) {
      flex-direction: column;
      margin-bottom: 1.5rem;
    }
  }

  ul {
    margin: 0 2.5rem;

    li {
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      margin: 0 1rem;
    }
  }
`

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text};
  opacity: 0.2;
  margin: 1rem 0;
`

export const CompanyComponent = styled.div`
  margin-left: 0.5rem;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
`
