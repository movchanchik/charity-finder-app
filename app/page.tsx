import CharityItems from "./components/CharityItems";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center w-full h-96 bg-cover bg-center bg-banner">
        <div className="text-center font-prompt tracking-wider text-[#F7F7F7] font-bold text-2xl sm:text-5xl">
          Changing The World Through Kindness
        </div>
      </div>
      <CharityItems />
    </main>
  );
}
