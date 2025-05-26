import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { getSideBarData } from "./SideBarData";
import { Link } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sideBarItems = getSideBarData();

  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(true); // always open on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      {isMobile && isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Toggle button shown even when sidebar is closed on mobile */}
      {isMobile && !isOpen && (
        <button className="mobile-toggle" onClick={handleSidebarToggle}>
          ☰
        </button>
      )}

      <div
        className={`sidebar ${!isOpen ? "closed" : ""} ${
          isMobile ? "mobile" : ""
        }`}
      >
        <div className="sidebar-header">
          <button className="toggleBtn" onClick={handleSidebarToggle}>
            <div className={`arrow ${isOpen ? "left" : "right"}`} />
          </button>
        </div>

        <nav className="nav-menu">
          <ul>
            {sideBarItems.map((item, index) => (
              <React.Fragment key={index}>
                <li>
                  {item.subMenu ? (
                    <>
                      <div
                        className={`sidebar-link ${
                          openDropdown === index ? "open" : ""
                        }`}
                        onClick={() => handleToggle(index)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          {item.icon}
                          {isOpen && <span>{item.title}</span>}
                        </div>
                        {isOpen && (
                          <span
                            className={`arrow-icon ${
                              openDropdown === index ? "open" : ""
                            }`}
                          >
                            ▶
                          </span>
                        )}
                      </div>
                      {openDropdown === index && (
                        <ul className="submenu">
                          {item.subMenu.map((subItem, i) => (
                            <li key={i} className="sidebar-subitem">
                              <Link
                                to={subItem.path}
                                className="sidebar-link"
                                onClick={() => isMobile && setIsOpen(false)}
                              >
                                {subItem.icon}
                                {isOpen && <span>{subItem.title}</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.to || item.path}
                      className="sidebar-link"
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      {item.icon}
                      {isOpen && <span>{item.title}</span>}
                    </Link>
                  )}
                </li>

                {/* Divider line after Subscription details (index 5) */}
                {index === 5 && <hr className="sidebar-divider" />}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
