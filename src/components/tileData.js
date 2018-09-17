import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import People from '@material-ui/icons/People';
import Category from '@material-ui/icons/Category';
import Casino from '@material-ui/icons/Casino';
import History from '@material-ui/icons/History';
import Dashboard from '@material-ui/icons/Dashboard';
import Crop from '@material-ui/icons/Crop';
import Email from '@material-ui/icons/Email';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Creches" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Category />
      </ListItemIcon>
      <ListItemText primary="Categorias" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Casino />
      </ListItemIcon>
      <ListItemText primary="Produtos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Crop />
      </ListItemIcon>
      <ListItemText primary="Pedidos" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <History />
      </ListItemIcon>
      <ListItemText primary="Histórico" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Email />
      </ListItemIcon>
      <ListItemText primary="Mensagens" />
    </ListItem>
  </div>
);