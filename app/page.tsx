export default function Home() {
  return (
    <div className="container">
      <main>
        <h1>OnePager Team Fox 2.0</h1>
        <p>
          Dit project gebruikt nu <strong>SCSS</strong> in plaats van Tailwind CSS.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: 'transparent', border: '1px solid var(--foreground)', color: 'var(--foreground)' }}
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
