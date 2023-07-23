import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="flex h-[100px] flex-col items-center justify-evenly border-t-2 border-solid border-y-primary  bg-white/50    dark:bg-black/50 ">
      <p>Igreja Alcançados Pela Graça</p>

      <Socials className="cor" />
    </footer>
  )
}
