
import classNames from 'classnames'
import './buttons.css'

export const Buttons=({children,type,onClick,size='s'})=>{
const classes=classNames({
  'btn':true,
'btn-secondary':type==='secondary',
'btn-primary':type==='primary',
'btn-small':size==='s',
'btn-medium':size==='m'
})

  return (<button className={classes} onClick={onClick}>{children}</button>)
}