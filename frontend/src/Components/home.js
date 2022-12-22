import Head from './head';
import Nav from './nav';
import Title from './title';
import Scripts from './scripts';
import Footer from './footer';
import DormButton from './dorm-btn';

function Home() {
  return (
    <div className="home">

      <Head/>
      <body>
        <Nav/>
        <Title/>
        <DormButton/>
        <Footer/>
        <Scripts/>
      </body>
    </div>
  );
}

export default Home;
