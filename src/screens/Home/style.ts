import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;

  .footer__text {
    font-size: 0.875rem;
    opacity: 0.4;
    margin: 0 auto 1rem;

    @media (max-width: 425px) {
      font-size: 0.75rem;
    }
  }
`

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;

  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 0.5rem;
  }

  p {
    text-indent: 1em;
    hyphens: auto;

    a {
      color: #805ad5;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .learning__list {
    display: flex;
    margin: 1.5rem 0;
    padding: 0 0.8rem;

    div {
      border: 1.5px solid ${({ theme }) => theme.text};
      min-width: 150px;
      width: max-content;
      padding: 0.7rem;
      margin: 0 0.5rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;

      img {
        width: 20px;
        margin-right: 1rem;
      }
    }

    @media (max-width: 425px) {
      padding: 0;
    }
  }

  .contact__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0.8rem 1rem;

    button {
      margin: 0.1rem 0;
      padding: 0.6rem 0.7rem;
      border-radius: 0.5rem;
      transition: all 0.4s;

      &:hover {
        color: white;
        background: #65b6b4;
      }
    }
  }
`

export const ResumeContent = styled.div`
  margin: 2rem auto;

  button {
    border-radius: 5px;
    background-color: #319795;
    padding: 0.5rem 1.3rem;
    color: #fff;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
      background-color: #267a79;
    }
  }
`
