import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Useful Tips</span>
    </h1>
    <p className='desc text-center'>
      ProTips is a free Tips and hacks platform to
      discover, create and share creative Tips on any subject!
    </p>

    <Feed />
  </section>
);

export default Home;