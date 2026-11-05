import { useEffect, useState } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('feedbackClosed')) return;
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('feedbackClosed', '1');
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Зворотний зв'язок</h2>
        <form action="https://formspree.io/f/xrpenldo" method="POST">
          <label>Ім'я <input type="text" name="name" required /></label>
          <label>Email <input type="email" name="email" required /></label>
          <label>Телефон <input type="tel" name="phone" required /></label>
          <label>Повідомлення <textarea name="message" rows="4" required /></label>
          <div className="modal-actions">
            <button type="submit">Надіслати</button>
            <button type="button" onClick={handleClose}>Закрити</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;