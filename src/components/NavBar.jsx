import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // Close menu on backdrop click or Escape key
    React.useEffect(() => {
        if (!menuOpen) return;
        const handleKey = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [menuOpen]);
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-transparent py-2" role="navigation" aria-label="Main Navigation">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#home">Portfolio</a>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="main-navbar"
                    onClick={() => setMenuOpen(!menuOpen)}
                    onKeyDown={e => (e.key === "Enter" || e.key === " ") && setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
                <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="main-navbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#education" className="nav-link" onClick={() => setMenuOpen(false)}>Education</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Project</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;