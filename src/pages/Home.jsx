import Hero from '../components/Hero';
import LatestCollections from '../components/LatestCollections';
import BestSellers from '../components/BestSellers';
import InfoSubscribe from '../components/InfoSubscribe';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* 🏠 Hero Section */}
      <Hero />

      {/* 🆕 Latest Collections */}
      <LatestCollections />

      {/* 🔝 Best Sellers */}
      <BestSellers />

      {/* 📧 Newsletter / Info */}
      <InfoSubscribe />
    </main>
  );
};

export default Home;
