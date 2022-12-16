import styled from 'styled-components'

export const WorkArticle = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  @media (max-width:1024px) {
    max-width: 768px;
  }

  @media (max-width:600px) {
    max-width: 350px;
  }
`

export const WorkContentWrapper = styled.div`
  padding-top: 80px;

  @media (max-width: 767px) {
    padding-top: 72px;
  }
`
export const ContentSection = styled.div<{ selectedTheme: string }>`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(3, 330px);
  grid-template-columns: repeat(3, 1fr);

  .card-work__container {
    opacity: 0.8;
    position: relative;
    overflow: hidden;

    .link-source {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
      opacity: 0;
      background-color: rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;

      .link-source__content {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background-color: ${({ selectedTheme }) => selectedTheme === 'light' ? '#805AD5' : '#ECC94B'};
        font-size: 0.9rem;
        font-weight: bold;
        color: ${({ selectedTheme }) => selectedTheme === 'light' ? '#FFFFFF' : '#1A202C'};
        display: grid;
        place-items: center;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ selectedTheme }) => selectedTheme === 'light' ? '#6B46C1' : '#D69E2E'};
        }
      }
    }

    .work-image__container {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 0;
      }
    }

    &:first-child {
      background: green;
      grid-row: 1 / span 2;
    }

    &:last-child {
      background: blue;
      grid-row: 2 / span 2;
      grid-column: 3;
    }

    &:hover {
      opacity: 1;

      .link-source {
        opacity: 1;
      }

      .work-image__container {
        transform: scale(1.1);
        transition: all 0.3s;
      }
    }
  }

  @media (max-width:1024px) {
    grid-template-rows: repeat(5, 290px);
    grid-template-columns: repeat(2, 1fr);

    .card-work__container {

      &:first-child {
        background: blue;
        grid-row: 1 / span 2;
      }
      
      &:last-child {
        background: green;
        grid-row: 4 / span 2;
        grid-column: 2;
      }
    }
  }

  @media (max-width:600px) {
    grid-template-rows: repeat(9, 230px);
    grid-template-columns: repeat(1, 1fr);

    .card-work__container {
      &:last-child {
        background: green;
        grid-row: 8 / span 2;
        grid-column: unset;
      }
    }
  }
`