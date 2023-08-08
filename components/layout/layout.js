import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Botostart CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <Link href="/">CRM Project</Link>
        Next.js course | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
