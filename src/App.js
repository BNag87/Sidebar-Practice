import './App.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useState } from 'react';


function App() {
  const [ToggleBar, setToggleBar] = useState(false);

  return (
    
    <div className="App">
      
        <div className = "container">
          <button type = "button">Button 1</button>
          <button type = "button">Button 2</button>
          <button type = "button">Button 3</button>
          <button type = "button">Button 4</button>
          <button type = "button">Button 5</button>
      </div>

      <ProSidebar>
        <Menu iconShape="circle">
          <MenuItem>Dashboard</MenuItem>
            <SubMenu title="Components">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
        </Menu>
        </ProSidebar>

      
    </div>
  )
}

export default App;
