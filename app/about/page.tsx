import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex items-center justify-center">
        <div className="max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6">
          <h1 className="text-4xl font-bold text-center text-blue-400">Chi siamo</h1>
          <p className="text-lg leading-relaxed text-gray-300">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore porro neque maxime quo illo, minus hic voluptatibus odio cupiditate vitae voluptate molestiae expedita. Minus accusamus officia optio asperiores doloremque harum.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi rerum possimus quia reiciendis, ipsa praesentium, nam voluptates ipsam tenetur provident culpa nulla aliquid necessitatibus, error quae nesciunt repellat ut dignissimos!
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium beatae reprehenderit fugiat quia est placeat blanditiis dolor expedita vero corrupti numquam nisi eos eius pariatur velit obcaecati nulla, provident veniam?
          </p>
        </div>
      </div>
    </>
  );
}
