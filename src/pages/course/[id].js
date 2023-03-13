import { useRouter } from "next/router";

function Article({ Course }) {
  const router = useRouter();

  // If the page is still loading, show a loading indicator
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{Course.title}</h1>
      <p>{Course.content}</p>
    </div>
  );
}
// export async function getStaticPaths() {
//   // Fetch the list of articles
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const articles = await res.json();

//   // Generate the paths for each article
//   const paths = articles.map((article) => ({
//     params: { slug: article.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   // Fetch the data for the article
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.slug}`
//   );
//   const article = await res.json();

//   return { props: { article } };
// }

// export default Article;
