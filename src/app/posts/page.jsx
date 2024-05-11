const EachPost = ({ title, url }) => {
  return (
    <article>
      <a href={url}>
        <h3>a{title}</h3>
      </a>
    </article>
  );
};

const Posts = () => {
  return (
    <section>
      <h2>recommended articles</h2>
      <EachPost title="hoge" url="blog/schedule" />
      <EachPost title="hogehoge" url="blog/test" />
    </section>
  );
};

export default Posts;
