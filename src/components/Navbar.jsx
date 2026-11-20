
function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="logo">
        VIGNESH<span> J</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="social-links">
        <a href="https://github.com/vignesh060" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a
  href="https://mail.google.com/mail/u/0/?fs=1&to=vignesh.j0606@gmail.com&tf=cm"
  target="_blank"
  rel="noopener noreferrer"
>
  Email
</a>
      </div>

    </nav>
  );
}

export default Navbar;
