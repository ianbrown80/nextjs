import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>People List - Home</title>
        <meta name="keywords" content="people" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage!</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia
          et, deleniti reiciendis voluptates accusamus culpa sequi earum
          molestias, iste porro iusto doloribus dolorum, accusantium eligendi
          tenetur odit natus voluptate.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia
          et, deleniti reiciendis voluptates accusamus culpa sequi earum
          molestias, iste porro iusto doloribus dolorum, accusantium eligendi
          tenetur odit natus voluptate.
        </p>
        <Link href="/people">
          <a className={styles.btn}>See People List</a>
        </Link>
      </div>
    </>
  );
}
