import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <title key="title">Contact | Nico Galin</title>
        <meta
          name="description"
          content="Contact Nico via LinkedIn, Email, Instagram, Handshake, and more."
          key="desc"
        />
      </head>
      <div>{children}</div>
    </>
  );
}
