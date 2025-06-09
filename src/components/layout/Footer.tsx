export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-sm">
          &copy; {currentYear} Anurag Rudra Portfolio. All rights reserved.
        </p>
        {/* Optional: Add social media links here */}
      </div>
    </footer>
  );
}
