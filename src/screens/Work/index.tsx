import { WorkArticle, WorkContentWrapper, ContentSection } from './style'

const works = [
  {
    name: 'ecommhuay',
    pictureSource:
      'https://user-images.githubusercontent.com/78087668/166332924-4c67da10-a58b-4184-8d00-67129de068c7.png',
    link: 'https://github.com/danyouknowme/ecommhuay-rn',
    isPublish: false,
  },
  {
    name: 'awayfromus',
    pictureSource:
      'https://media.discordapp.net/attachments/1051488364240572416/1053306309895802920/image.png?width=810&height=426',
    link: 'https://awayfromus.dev/',
    isPublish: true,
  },
  {
    name: 'github user search',
    pictureSource:
      'https://media.discordapp.net/attachments/1051488364240572416/1053309986157101117/image.png?width=810&height=430',
    link: 'https://github.com/danyouknowme/Github-User-Search-GraphQL',
    isPublish: false,
  },
  {
    name: 'kanban',
    pictureSource:
      'https://user-images.githubusercontent.com/78087668/186903754-fed0ad83-9634-47a9-b026-90d9491fb46f.png',
    link: 'https://github.com/danyouknowme/kanban',
    isPublish: false,
  },
  {
    name: 'entertainment homepage',
    pictureSource:
      'https://media.discordapp.net/attachments/1051488364240572416/1053316141629591592/image.png?width=810&height=433',
    link: 'https://entertainment-homepage.vercel.app/',
    isPublish: true,
  },
  {
    name: 'voter',
    pictureSource:
      'https://media.discordapp.net/attachments/1051488364240572416/1053306967285846096/image.png?width=810&height=433',
    link: 'https://voter.yak3bd.pro/',
    isPublish: true,
  },
  {
    name: 'kurester',
    pictureSource:
      'https://media.discordapp.net/attachments/1051488364240572416/1053333405259026583/Simulator_Screen_Shot_-_iPhone_14_-_2022-12-16_at_22.27.34.png?width=288&height=623',
    link: 'https://github.com/bounkbu/kurester',
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
