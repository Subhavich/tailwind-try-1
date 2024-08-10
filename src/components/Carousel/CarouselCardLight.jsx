import CardLogo from "../ExpandCard/CardLogo";

export default function CarouselCardLight() {
  return (
    <div className="my-4 grid place-items-center">
      <div className="relative cursor-pointer group space-y-4 min-h-96 w-80  text-left">
        <img
          src="https://media.d3.nhle.com/image/private/t_ratio16_9-size20/v1696788922/prd/niovjy2dvwpr3wpbuwka"
          className="transition duration-300 group group-hover:-translate-y-4 tran object-cover rounded-md w-full h-4/6"
        />
        <div className="grid grid-cols-12 space-y-2 group-hover:-translate-y-4 transition duration-300">
          <div className="flex">
            <CardLogo
              link={
                "https://pbs.twimg.com/media/GTyqbfsbwAM_wNi?format=jpg&name=large"
              }
            />

            <p className="text-xl font-serif  text-zinc-500 border-zinc-500 ">
              customer
            </p>
          </div>
          <p className="col-span-12 line-clamp-2 text-lg font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p className="col-span-12 line-clamp-3 text-sm leading-relaxed ">
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
        </div>
      </div>
    </div>
  );
}
