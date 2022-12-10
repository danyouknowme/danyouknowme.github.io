import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

interface ThemeTogglerProps {
  theme: string
  themeToggler: () => void
}

export default function ThemeToggleButton({
  theme,
  themeToggler,
}: ThemeTogglerProps) {
  const isDarkTheme = theme === 'dark'

  return (
    <ChakraProvider>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          style={{ display: 'inline-block' }}
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label='Toggle theme'
            colorScheme={isDarkTheme ? 'yellow' : 'purple'}
            icon={isDarkTheme ? <SunIcon /> : <MoonIcon />}
            onClick={themeToggler}
          ></IconButton>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  )
}
