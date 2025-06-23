import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        direction: 'rtl',
      }}
    >
      <div
        className="logo-container"
        style={{
          padding: '0.5rem 1rem',
          background: '#eef1f5', 
          borderRadius: '10px',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          color: '#0a3d62',
        }}
      >
        A&A
      </div>

      <nav style={{ display: 'flex', gap: '2rem', fontWeight: 'bold' }}>
        <Link to="info" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
          معلومات عنا
        </Link>
        <Link to="services" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
          خدماتنا
        </Link>
        <Link to="contact" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
          تواصل معنا
        </Link>
        <Link to="about" smooth={true} duration={800}>عن المكتب</Link>

      </nav>
    </header>
  );
}
