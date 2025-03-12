
type Props = {
    name: string,
  }

const InputTheme = ( props : Props) => {
  return (
    <input
    type="radio"
    name="theme-dropdown"
    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
    aria-label={props.name}
    value={props.name} />
  )
}

export default InputTheme