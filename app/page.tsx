import Navbar from '../components/Navbar';
import HomeContent from '../components/HomeContent';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900 min-h-screen py-12 px-4">
        <HomeContent />
      </main>
    </>
  );
}
