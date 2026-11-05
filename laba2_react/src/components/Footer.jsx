import { useEffect, useState } from 'react';

function Footer() {
  const [info, setInfo] = useState({ userAgent: '', platform: '' });

  useEffect(() => {
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    setInfo({
      userAgent: localStorage.getItem('userAgent'),
      platform: localStorage.getItem('platform'),
    });
  }, []);

  return (
    <footer>
      <p>&copy; 2026 Andrii Levin</p>
      <h3>System info</h3>
      <ul id="system-info">
        <li>userAgent: {info.userAgent}</li>
        <li>platform: {info.platform}</li>
      </ul>
    </footer>
  );
}

export default Footer;