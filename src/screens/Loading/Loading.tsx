import { Loader } from '../../components'
import {
  SplitterScreen,
  LoaderContainer,
  LoadingScreenContainer,
} from './style'

const HiddenAnimation = {
  show: { opacity: 1 },
  hidden: { opacity: 0, zIndex: -1, transition: { duration: 3 } },
}

const LoaderAnimation = {
  show: { opacity: 1 },
  hidden: { opacity: 0, transition: { duration: 0.5 } },
}

const SwipeLeft = {
  open: { left: 0, opacity: 1 },
  closed: { left: '-50%', transition: { duration: 2 } },
}

const SwipeRight = {
  open: { right: 0, opacity: 1 },
  closed: { right: '-50%', transition: { duration: 2 } },
}

export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <LoadingScreenContainer
      animate={!isLoading ? 'show' : 'hidden'}
      variants={HiddenAnimation}
    >
      <SplitterScreen
        animate={!isLoading ? 'open' : 'closed'}
        variants={SwipeLeft}
      />
      <LoaderContainer
        animate={!isLoading ? 'show' : 'hidden'}
        variants={LoaderAnimation}
      >
        <Loader />
      </LoaderContainer>
      <SplitterScreen
        animate={!isLoading ? 'open' : 'closed'}
        variants={SwipeRight}
      />
    </LoadingScreenContainer>
  )
}
