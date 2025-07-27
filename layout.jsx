
import './globals.css';

export const metadata = {
  title: 'Home Planner',
  description: 'מערכת לתכנון בתים',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
