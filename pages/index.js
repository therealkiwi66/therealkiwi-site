export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '40px' }}>
      <a
        href="https://x.com/therealkiwi66"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <h1 style={{ fontSize: '3rem', color: '#2ecc71', marginBottom: '1rem' }}>therealkiwi</h1>
      </a>
      <a
        href="/kiwi"
        style={{
          backgroundColor: '#2ecc71',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1rem',
        }}
      >
        Checkout example
      </a>
    </div>
  );
}
