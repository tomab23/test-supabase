import ThemeDropdwon from "../theme/ThemeDropdwon"

const Footer = () => {
  return (
<footer className="footer sm:footer-horizontal bg-base-300 items-center p-2 px-5
max-sm:text-sm max-sm:flex max-sm:justify-between">
  <aside className="grid-flow-col items-center ">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <ThemeDropdwon />
  </nav>
</footer>
  )
}

export default Footer