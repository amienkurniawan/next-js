import Link from 'next/link';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch'

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`} >
      <a>{post.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)
const Index = props => (
  <Layout>
    <h1>Batman Tv Shows</h1>
    <ul>

      {props.shows.map(show => (
        <PostLink key={show.id} post={show} />
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`show data fetch length : ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index;