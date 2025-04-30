import { useRouter } from 'next/router';

export default function SlugPage({ slug }) {
  const router = useRouter();

  return (
    <div className="container">
      <div className="content">
        <div className="logo">
          <img src="/kiwi.png" alt="Prismatik Logo" />
        </div>
        <h1>Cart secured!</h1>
        <p>Your transaction has been completed successfully.</p>
        <div className="spinner"></div>
        <p>Use Prismatik extension to complete checkout.</p>
      </div>

      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          flex-direction: column;
          text-align: center;
          background-color: #f8f9fa;
        }

        .content {
          max-width: 600px;
          padding: 2rem;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .logo img {
          max-width: 200px;
          height: auto;
        }

        h1 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: #4a5568;
          line-height: 1.5;
        }

        /* Spinner animation */
        .spinner {
          margin: 1.5rem auto;
          width: 60px;
          height: 60px;
          border: 5px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top-color: #38a169;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

// Se vuoi usare dati dinamici in base al `slug`, usa getServerSideProps per il rendering lato server
export async function getServerSideProps(context) {
  const { slug } = context.params;

  // Puoi fare qualcosa con il parametro `slug` qui, ad esempio chiamare un'API
  // Restituisci il parametro slug come prop
  return {
    props: {
      slug,
    },
  };
}
