export default function Footer() {
  const presentYear = new Date().getFullYear();
  return (
    <footer className=" bg-primary-100 text-white p-4">
      <section className="footer container mx-auto">
        <div className="copyright paragraph p-0 text-center text-xs font-normal">
          <p>&copy; 2018 - {presentYear} · All Rights Reserved · @pingAvisek</p>
        </div>
      </section>
    </footer>
  );
}
