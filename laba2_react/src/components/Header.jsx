function Header({ theme, onToggleTheme }) {
  return (
    <header className="header-section">
      <button type="button" className="theme-toggle" onClick={onToggleTheme}>
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </button>

      <h1>Andrii Levin</h1>
      <p>Cybersecurity Student | SOC Analyst</p>

      <address>
        <p>Email: <a href="mailto:levinandrey33@gmail.com">levinandrey33@gmail.com</a></p>
        <p>Phone: <a href="tel:+380682439345">+380682439345</a></p>
        <p>Location: Lviv, Ukraine</p>
      </address>

      <nav>
        <ul className="nav-links">
          <li><a href="https://www.linkedin.com/in/andrii-levin-746b03359/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          <li><a href="https://github.com/snappixd" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://t.me/rxmblw" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          <li><a href="https://tryhackme.com/p/rxmbl" target="_blank" rel="noopener noreferrer">TryHackMe</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;