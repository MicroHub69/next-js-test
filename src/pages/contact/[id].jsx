export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const DataDetails = ({ ninja }) => {
  return (
    <div>
      <h2>Each Details</h2>
      <ul>
        <li>{ninja.name}</li>
      </ul>
    </div>
  );
};

export default DataDetails;
