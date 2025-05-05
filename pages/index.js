export default function Home() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a
        href="https://x.com/therealkiwi66"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '2.5rem',
          color: '#2ecc71',
          textDecoration: 'none',
          fontWeight: 'bold',
          border: '2px solid #2ecc71',
          padding: '12px 24px',
          borderRadius: '999px',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#2ecc71';
          e.currentTarget.style.color = '#fff';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#2ecc71';
        }}
      >
        @therealkiwi
      </a>
    </div>
  );
}
