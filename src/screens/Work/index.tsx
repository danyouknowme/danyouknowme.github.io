import { WorkArticle, WorkContentWrapper, ContentSection } from './style'

const works = [
  {
    name: 'ecommhuay',
    pictureSource: '/assets/ecommhuay.png',
    link: 'https://github.com/danyouknowme/ecommhuay-rn',
    isPublish: false,
  },
  {
    name: 'awayfromus',
    pictureSource: '/assets/afu.png',
    link: 'https://awayfromus.dev',
    isPublish: true,
  },
  {
    name: 'crowdfunding platform',
    pictureSource: '/assets/fundo.png',
    link: 'https://github.com/crowdfunding-using-smart-contract',
    isPublish: false,
  },
  {
    name: 'kanban',
    pictureSource: '/assets/kanban.png',
    link: 'https://github.com/danyouknowme/kanban',
    isPublish: false,
  },
  {
    name: 'entertainment homepage',
    pictureSource: '/assets/entertainment-homepage.png',
    link: 'https://entertainment-homepage.vercel.app/',
    isPublish: true,
  },
  {
    name: 'sunnyside agency landing page',
    pictureSource: '/assets/sunnyside-agency.jpg',
    link: 'https://sunnyside-agency-fronendmentor.netlify.app',
    isPublish: true,
  },
  {
    name: 'chomromku',
    pictureSource: '/assets/chomromku.png',
    link: 'https://github.com/hackathon-ku/hackathon-2023-team',
    isPublish: false,
  },
]

export default function Work({ theme }: { theme: string }) {
  function navigateToWorkLink(url: string) {
    window.open(url, '_blank')
  }

  return (
    <WorkArticle>
      <WorkContentWrapper>
        <ContentSection selectedTheme={theme}>
          {works.map((work, index) => (
            <div className='card-work__container' key={index}>
              <div className='link-source'>
                <div
                  className='link-source__content'
                  onClick={() => navigateToWorkLink(work.link)}
                >
                  View {work.isPublish ? 'Website' : 'Source'}
                </div>
              </div>
              <div className='work-image__container'>
                <img src={work.pictureSource} alt={work.name} />
              </div>
            </div>
          ))}
        </ContentSection>
      </WorkContentWrapper>
    </WorkArticle>
  )
}
