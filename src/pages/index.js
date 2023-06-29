import Content from '../components/Content';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <div className="line">
      <Sidebar />
      <Content />
      </div>
      <style jsx>{`
      .line{
        display: flex;
      }
      `}</style>
      
    </div>
  );
};

export default HomePage;
