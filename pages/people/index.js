import styles from "../../styles/People.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { people: data },
  };
};

const index = ({ people }) => {
  return (
    <div>
      <h1>All People</h1>
      {people.map((person) => (
        <Link href={"people/" + person.id} key={person.id}>
          <a className={styles.single}>
            <h3>{person.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;
