import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaPhone, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = ["hero", "features", "properties", "blogs"];
    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
        sectionsRef.current[sectionId] = sectionElement;
      }
    });

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header
        className={"header sticky"}
        style={{ backgroundColor: "transparent" }}
      >
        <div className="logo">
          <img src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480338/_2_cpcou5.png" alt="Sethi Estate Agency" />
          <span>
            Sethi <span>Estate Agency</span>
          </span>
        </div>
        <nav className="nav">
          <ul>
            <li className={activeSection === "#hero" ? "active" : ""}>
              <Link href="">Home</Link>
            </li>
            <li className={activeSection === "#features" ? "active" : ""}>
              <Link href="">About Us</Link>
            </li>
            <li className={activeSection === "#properties" ? "active" : ""}>
              <div className="dropdown">
                <Link href="/properties/search">Properties</Link>
                {/* <div className="dropdown-content">
                  <Link href="/properties/search">All Properties</Link>
                  <Link href="/latest-properties">Latest Properties</Link>
                </div> */}
              </div>
            </li>
            {/* <li className={activeSection === "#blogs" ? "active" : ""}>
              <Link href="#blogs">Blogs</Link>
            </li> */}
          </ul>
        </nav>

        <div className="contact-btn" onClick={handleModalToggle}>
          <FaPhone className="phone-icon" />
          <span>Contact</span>
        </div>
      </header>

      {showModal && (
        <div className="modal-overlay" onClick={handleModalToggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalToggle}>
              <FaTimes />
            </button>
            <h2>Leave a message</h2>
            <form>
              <input type="email" placeholder="Your E-mail" />
              <input type="tel" placeholder="Phone" />
              <textarea placeholder="Your Message"></textarea>
              <div className="checkbox-container">
                <div>
                  <input type="checkbox" id="consent" />
                </div>
                <label htmlFor="consent">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
