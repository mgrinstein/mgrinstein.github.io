import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        - website created by{" "}
        <a
          href="https://github.com/mgrinstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          mgrinstein
        </a>{" "}
        using <i>create-react-app</i> -
      </p>
    </footer>
  );
}
