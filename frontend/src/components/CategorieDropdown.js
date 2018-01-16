import React from 'react'
import { Link } from 'react-router-dom'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

export default function CategorieDropdown ({categories}) {
  const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
  };

  return(
    <Paper style={style} className="category-dropdown">
      <Menu>
        <MenuItem><Link to="/">All</Link></MenuItem>
        {categories.map(category => (
          <MenuItem key={category.name}><Link to={`/${category.name}`} >{category.name}</Link></MenuItem>
        ))}
      </Menu>
    </Paper>
  )
}
