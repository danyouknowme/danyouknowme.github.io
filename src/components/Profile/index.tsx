/*
	Many thanks for text animation from @nicenicegame
	source: https://github.com/nicenicegame/nicenicegame.github.io
*/

import { motion } from 'framer-motion'
import {
  ProfileContainer,
  ProfileImageContainer,
  ProfileTextContainer,
} from './style'

const heroAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.9],
      when: 'beforeChildren',
      delay: 0.4,
    },
  },
}

const heroTextContainer = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const heroTextAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
}

const heroSubTextAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
}

export default function Profile() {
  return (
    <ProfileContainer>
      <motion.div variants={heroAnimation} initial='hidden' animate='show'>
        <ProfileTextContainer
          variants={heroTextContainer}
          style={{ display: 'flex', flexDirection: 'column' }}
          className=''
        >
          <motion.h1 variants={heroTextAnimation} style={{ fontFamily: '' }}>
            <AnimatedText text='Thanathip' />{' '}
            <AnimatedText text='Suwannakhot' reversed />
          </motion.h1>
          <motion.p variants={heroSubTextAnimation}>
            Software Engineering Student
          </motion.p>
        </ProfileTextContainer>
      </motion.div>
      <ProfileImageContainer>
        <img
          src='https://avatars.githubusercontent.com/u/78087668?v=4'
          alt='profile'
        />
      </ProfileImageContainer>
    </ProfileContainer>
  )
}

const letters = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const reversedLetters = {
  show: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const letterAnimation = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
}

function AnimatedText({
  text,
  reversed,
}: {
  text: string
  reversed?: boolean
}) {
  return (
    <motion.span
      variants={reversed ? reversedLetters : letters}
      className='animated-text'
    >
      {text.split('').map((letter, index) => (
        <motion.span
          style={{ display: 'inline-block' }}
          key={index}
          variants={letterAnimation}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
