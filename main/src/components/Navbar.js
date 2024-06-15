import * as React from 'react';
import './Nav.css';

import { useNavigate } from 'react-router-dom';

const pages = ['About', 'Blog', 'Project'];

function ResponsiveAppBar() {
  const [menutoggle, setMenuToggle] = React.useState(null);
  const navigate = useNavigate();

  const OpenNavMenu = (event) => {
    setMenuToggle(event.currentTarget);
  };

  const CloseNavMenu = () => {
    setMenuToggle(null);
  };

  return (
    <div className='header'>
       <div className='logo-nav'>
        <a className='left-logo' href='/' onClick={() => {CloseNavMenu(); navigate('/')}}>McInnes</a>
       </div>
        <div className='right-navigations'>

            <div className={menutoggle? "nav-options active" : "nav-options"}>
                <a onClick={()=>{CloseNavMenu();navigate('/')}}>Home</a>
                <a onClick={()=>{CloseNavMenu();navigate('/about')}}>About</a>
                <a onClick={()=>{CloseNavMenu();navigate('/projects')}}>Projects</a>
                <a onClick={()=>{CloseNavMenu();navigate('/blogs')}}>Blogs</a>
                <a onClick={()=>{CloseNavMenu();navigate('/contact')}}>Contact</a>
            </div>
        </div>
    </div>

  );
}
export default ResponsiveAppBar;