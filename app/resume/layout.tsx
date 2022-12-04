import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <title key="title">Resume | Nico Galin</title>
        <meta
          name="description"
          content="View Nico's formatted resume."
          key="desc"
        />
      </head>
      <div>{children}</div>
    </>
  );
}
