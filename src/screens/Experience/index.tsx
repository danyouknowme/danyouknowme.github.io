import { Fragment } from 'react'
import { GiBriefcase } from 'react-icons/gi'
import { Article, ContentWrapper } from '../../styles/global'
import { toCapitalized } from '../../utils/string'
import {
  CompanyComponent,
  ContentSection,
  HorizontalLine,
  ImageContainer,
  TextContainer,
  WorkingContainer,
  WorkingItem,
  WorkingList,
} from './style'

const data = [
  {
    company: 'INOX',
    position: 'Software Engineer Intern, Backend',
    imageSource: 'https://inox.co.th/_nuxt/img/logo.b5fed64.png',
    jobs: [
      'Developed Text-to-Speech CMS for the news agency',
      'Contributed to design and implement payment service for video streaming platform',
      'React + Zustand + TailwindCSS',
      'NodeJS + Fastify + MongoDB',
      'June, 2023',
    ],
  },
  {
    company: 'agoda',
    position: 'QA Engineer Intern, Frontend Team',
    imageSource:
      'https://seeklogo.com/images/A/agoda-logo-8C565D040A-seeklogo.com.png',
    jobs: [
      'Optimize one of the test framework to execute end-to-end testing in steps',
      'C# + .NET Core',
      'SQL',
      'June, 2022',
    ],
  },
  {
    company: 'awayfromus',
    position: 'Frontend Developer Part-Time',
    imageSource:
      'https://awayfromus.dev/_next/image?url=%2Fassets%2Fafu_short_logo.png&w=2048&q=75',
    jobs: [
      'The organization is not registered as a company',
      'Create game scripts for FiveM which is an online mod of GTA V',
      'Contributor to the web application that sells the available game scripts',
      'React + NodeJS + Typescript',
      'HTML + CSS + Javascript + VueJS',
      'December, 2021',
    ],
  },
]

export default function Experience() {
  return (
    <Article>
      <ContentWrapper>
        <ContentSection>
          <WorkingContainer>
            <div className='working__title'>
              <GiBriefcase fontSize={32} />
              <h2>Working Experiences</h2>
            </div>
            <HorizontalLine />
            <WorkingList>
              {data.map((work, index) => (
                <Fragment key={index}>
                  {index !== 0 && <HorizontalLine />}
                  <WorkingItem>
                    <ImageContainer>
                      <img src={work.imageSource} alt={work.company} />
                    </ImageContainer>
                    <TextContainer>
                      <div className='working__text'>
                        <h3>{work.position}</h3>
                        <CompanyComponent>
                          @{toCapitalized(work.company)}
                        </CompanyComponent>
                      </div>
                      <ul>
                        {work.jobs.map((job, index) => (
                          <li key={index}>{job}</li>
                        ))}
                      </ul>
                    </TextContainer>
                  </WorkingItem>
                </Fragment>
              ))}
            </WorkingList>
          </WorkingContainer>
        </ContentSection>
      </ContentWrapper>
    </Article>
  )
}
