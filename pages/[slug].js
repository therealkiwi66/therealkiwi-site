import { useRouter } from 'next/router';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '600px', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <img src="/kiwi.png" alt="Prismatik Logo" style={{ maxWidth: '200px', height: 'auto' }} />
        </div>
        
        <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>Cart secured!</h1>
        
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#4a5568', lineHeight: '1.5' }}>
          Your transaction has been completed successfully.
        </p>

        {/* Spinner animation */}
        <div style={{ margin: '1.5rem auto', width: '60px', height: '60px', border: '5px solid rgba(0, 0, 0, 0.1)', borderRadius: '50%', borderTopColor: '#38a169', animation: 'spin 1s ease-in-out infinite' }}></div>

        <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#38a169', fontWeight: '500' }}>
          Use Prismatik extension to complete checkout.
        </p>
      </div>
    </div>
  );
}

