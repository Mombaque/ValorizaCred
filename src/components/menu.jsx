import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdPerson, MdAttachMoney } from "react-icons/md";

export default function MenuLateral(props) {

  const list = () => (
    <Box
      sx={'auto'}
      role="presentation">
      <List>
        {['Produtos', 'Quem somos'].map((text, index) => (
          <ListItem key={text} disablePadding 
            onClick={() => {
              props.setMenuLateral(false);
              return props.mudarPagina(index);
            }}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <MdAttachMoney /> : <MdPerson />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <>
          <Drawer
          variant="persistent"
            anchor='right'
            open={props.menuLateralAberto}
            onClose={() => props.setMenuLateral(false)}>
            {list()}
          </Drawer>
        </>
    </div>
  );
}
