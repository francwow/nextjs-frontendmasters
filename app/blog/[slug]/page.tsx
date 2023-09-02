import HomeBtn from '@/components/HomeBtn';

type params = {
  params: {
    slug: string;
  };
};

const BlogIdPage = ({ params }: params) => {
  // when a route is inside square brackets [], we can use the params object to pass down
  // information to the page, layout, route, loading, etc.
  console.log(params);
  return (
    <div>
      blog {params.slug}
      <HomeBtn name="home" href="/" />
    </div>
  );
};

export default BlogIdPage;
