import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles({
  root: {
    width: 500,

  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recientes" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favoritos" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Guardados" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}