export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '3rem', color: '#2ecc71' }}>THE REAL KIWI</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Benvenuto nel sito ufficiale della Kiwi Corporation™
      </p>
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
        Vai alla pagina Kiwi
      </a>
    </div>
  );
}
