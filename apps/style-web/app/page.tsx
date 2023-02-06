import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Dropdown } from "@kth/style/dist/components/Dropdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Dropdown />
    </main>
  );
}
