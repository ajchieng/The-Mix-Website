export function Footer() {
  return (
    <footer className="mix-footer mt-14">
      <div className="mix-footer-inner mx-auto flex w-full max-w-6xl flex-wrap justify-between gap-2 px-4 py-4 sm:px-6 lg:px-8">
        <p className="m-0">The Mix at Harvard + Berklee</p>
        <p className="m-0">{new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
