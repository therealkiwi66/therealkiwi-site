import { useRouter } from 'next/router';

export default function SlugPage({ slug }) {
  const router = useRouter();

  return (
    <>
      <img src="/prismatik-logo.png" alt="Prismatik Logo" />
      <h1>Cart secured!</h1>
      <p>Your transaction has been completed successfully.</p>
      <p>Use Prismatik extension to complete checkout.</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const slugParam = context.params?.slug;

  const slug = Array.isArray(slugParam)
    ? slugParam.join('/')
    : slugParam || '';

  return {
    props: {
      slug,
    },
  };
}
