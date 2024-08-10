import CardLogo from "../ExpandCard/CardLogo";

export default function CarouselCard({}) {
  return (
    <div className="h-96 grid place-items-center">
      <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className=" bg-gradient-to-t from-zinc-700 to-transparent z-10 h-full w-full overflow-hidden rounded-xl border  cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
            className=" block h-full w-full object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt=""
          />
        </div>
        <div className="group space-y-2 text-left absolute bottom-2 left-2 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <CardLogo
            link={
              "https://pbs.twimg.com/media/GTyqbfsbwAM_wNi?format=jpg&name=large"
            }
          />
          <h1 className=" font-serif text-2xl font-bold text-white shadow-xl">
            Client
          </h1>
          <h1 className="text-sm font-light text-gray-200 shadow-xl">Impact</h1>
        </div>
      </div>
    </div>
  );
}
