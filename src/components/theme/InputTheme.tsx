
type Props = {
    name: string,
  }

const InputTheme = ( props : Props) => {

    // Récupere la 1ere lettre et la met en Majuscule + récupère le nom sans la 1ere lettre
    const label = props.name.charAt(0).toUpperCase() + props.name.slice(1);

    
  return (
    <input
    type="radio"
    name="theme-dropdown"
    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
    aria-label={label}
    value={props.name} />
  )
}

export default InputTheme