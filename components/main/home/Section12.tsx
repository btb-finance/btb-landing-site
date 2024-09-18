import articles from "@/utils/home/articles";
import Link from "next/link";

export default function Section12() {
  return (
    <>
      <div className="flex flex-col flex-1 w-full h-fit gap-6">
        <div className="flex flex-col gap-3 px-4 md:px-0">
          <span className="flex w-fit h-fit uppercase-text font-Roboto_Mono font-bold leading-none mb-5 bg-red-500 text-black rounded px-2 py-[3px]">
            {"What's new on BTB?"}
          </span>
          <h2 className="text-white text-base md:text-xl leading-none font-bold font-Roboto_Mono">
            Discover what’s new on our blog.
          </h2>
        </div>

        <div className="flex flex-col flex-1 mx-auto mt-16 mb-16  ">
          <div className="flex flex-col w-full gap-6 px-4 py-6 md:p-8 bg-gray-900 border border-gray-700 rounded-lg">
            <div className="flex flex-col gap-8">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 font-Roboto_Mono"
                >
                  <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-baseline">
                    <Link
                      href={article.link}
                      className="text-sm md:text-base text-red-500 font-Roboto_Mono font-bold hover:text-red-300 hover:no-underline"
                    >
                      {article.title}
                    </Link>
                    <span className="text-sm text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <div className="flex text-xs md:text-sm text-white md:pl-5">
                    {article.summary}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
