import React from 'react'
import "./Navbar.css"
import { getCurrentWindow } from '@tauri-apps/api/window'
const Navbar = () => {
    
    const appWindow = getCurrentWindow();
  
    return (
    <nav>
        <div>
            <div data-tauri-drag-region>
                drag
            </div>
            <div>
                <div onClick={() => appWindow.minimize()}>-</div>
                                <div onClick={() => appWindow.toggleMaximize()}>[]</div>
                <div onClick={() => appWindow.close()}>x</div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar