import React from "react";
import './searchForm.css'

const Sidebar = ({setPage}) => {
    // create state to change page
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="sidebar">
            <button className="sidebar_button" onClick={() => setIsOpen(!isOpen)}>
                🟰
            </button>
        {isOpen && (
        <div className="sidebar">
            <button onClick={() => { setPage('home'); setIsOpen(false); }}>Home🏠</button>
            <button onClick={() => { setPage('watched'); setIsOpen(false); }}>✅Watched</button>
            <button onClick={() => { setPage('liked'), setIsOpen(false); }}>❤️Liked</button>
        </div>
        )}
        </div>
        )
}
export default Sidebar;
