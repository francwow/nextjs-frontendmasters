import Home from '@/app/page';
import HomeBtn from '@/components/HomeBtn';

type params = {
  params: {
    id: string[];
  };
};

const DocsIdPage = ({ params }: params) => {
  // when a route is inside square brackets [], we can use the params object to pass down
  // information to the page, layout, route, loading, etc.
  console.log(params);
  return (
    <div>
      docs {params.id.join(',')}
      <HomeBtn name="home" href="/" />
    </div>
  );
};

export default DocsIdPage;
