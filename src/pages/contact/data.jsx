import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return {
    props: { people: data },
  };
};

const FetchData = ({ people }) => {
  return (
    <div>
      <h2>data</h2>
      {people.map((each) => (
        <div key={each.id}>
          <Link href={"/contact/" + each.id}>
            <h3>{each.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
