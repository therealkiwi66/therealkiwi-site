export default function SlugPage() {
  return (
    <main style={{ textAlign: "center", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <img
        src="/prismatik-logo.png"
        alt="Prismatik Logo"
        style={{ maxWidth: "220px", marginBottom: "24px" }}
      />

      <h1>Cart secured!</h1>
      <p>Your transaction has been completed successfully.</p>
      <p>Use Prismatik extension to complete checkout.</p>
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
