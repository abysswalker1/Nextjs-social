import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href='/'>Главная </Link>
      <Link href='/blog'>Блог</Link>
      <Link href='/about'>О нас </Link>
    </header>
  );
};