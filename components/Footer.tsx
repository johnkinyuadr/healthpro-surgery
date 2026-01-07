export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      © {year} HealthPro Surgery. All rights reserved.
    </footer>
  );
}
