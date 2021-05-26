import React , { useEffect , useState} from 'react'
import clsx from 'clsx'
import { Link , useLocation } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import useStyles from './styles'

function MenuItem({ label , Icon , path , onClick}) {
  const classes = useStyles()
  const [active, setActive] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if(path === '/sign-out'){
      setActive(true)
      return
    }
    setActive(location.pathname === path)
  },[location])

  return (
    <ListItem onClick={onClick} component={Link} to={path} button className={clsx(classes.menuItem, active && classes.menuItemActive)}>
      <ListItemIcon>
        <Icon style={{ fontSize: 25 , color: active ? '#1DDECE' : '#454545' }} className={classes.menuItemIcon} />
      </ListItemIcon>
      <ListItemText
        primary={label}
        classes={{ primary: active ? classes.isPrimary : classes.isWhite }}
        primaryTypographyProps={{ variant: "body2" }}
      />
    </ListItem>
  )
}

export default MenuItem