interface ThemeTogglerProps {
  themeToggler: () => void
}

export default function ThemeTogglerButton({
  themeToggler,
}: ThemeTogglerProps) {
  return (
    <label
      htmlFor='checkbox'
      className='switch'
      style={{ background: 'red', marginTop: '100px' }}
    >
      <input
        id='checkbox'
        type='checkbox'
        onClick={themeToggler}
        onChange={() => false}
        checked={window.localStorage.getItem('theme') === 'light'}
      />
    </label>
  )
}
