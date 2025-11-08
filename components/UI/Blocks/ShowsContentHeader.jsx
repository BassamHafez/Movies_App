import { FilerHeader, MainTitle, ShowsHeader } from "@/shared/components";
import { separator } from "@/shared/images";
import { Image } from "@/shared/lib";
import { useSelector } from "@/shared/hooks";

const moviesTitleMap = {
  discover: "Discover",
  now_playing: "Now Playing",
  top_rated: "Top Rated",
  popular: "Popular",
  upComing: "UpComing",
};
const tvTitleMap = {
  discover: "Discover",
  top_rated: "Top Rated",
  popular: "Popular",
  on_the_air: "On The Air",
  airing_today: "Airing Today",
};
const ShowsContentHeader = ({ isTv = false, searchTerm, setSearchTerm }) => {
  const filterType = useSelector((state) => state.filterSidebar.type);

  const title = isTv
    ? `& ${tvTitleMap[filterType]} TV Shows &`
    : `& ${moviesTitleMap[filterType]} Movies &`;
  const handleSearch = (val) => setSearchTerm(val);
  const clearSearch = () => setSearchTerm("");

  return (
    <div>
      <div className="flex flex-col items-center gap-4 mb-12">
        <MainTitle classes="text-center">{title}</MainTitle>
        <Image src={separator} alt="separator" />
      </div>

      <FilerHeader
        classes="mb-6 px-2"
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />
      <div className="divider px-2" />
    </div>
  );
};

export default ShowsContentHeader;
