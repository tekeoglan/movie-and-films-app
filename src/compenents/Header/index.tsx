import { useState, useCallback } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";
import debounce from "lodash/debounce";
import { TMDB_IMAGE_PATH } from "config/constants/endpoints";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

const SearchResult = ({ data }) => {
  const router = useRouter();
  return (
    <div className={styles.searchResult}>
      <ul>
        {data.map((prop, index) => {
          if (prop.media_type === "person" || index > 4) return;
          return (
            <li
              key={prop.id}
              className={styles.searchResultProps}
              onMouseDown={() => {
                router.push(`/${prop.media_type}/${prop.id}`);
              }}
            >
              <div className={styles.imageWrapper}>
                {prop.poster_path && (
                  <Image
                    src={`${TMDB_IMAGE_PATH}${prop.poster_path}`}
                    objectFit="cover"
                    layout="fill"
                    priority
                    alt="search result"
                  />
                )}
              </div>
              <span>{prop.media_type}</span>
              <a>{prop.media_type === "movie" ? prop.title : prop.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState<any[]>([]);
  const [searchActive, setSearchActive] = useState<boolean>(false);

  const sendQuery = async (_query: string) => {
    if (!_query) return;
    try {
      const res = await axios.get(`/api/search/multi?param=${_query}`);
      const data = res.data.data.results;
      setSearchData((prev) => {
        return data;
      });
    } catch (e) {
      console.log(e);
      return;
    }
  };

  const delayedSearch = useCallback(
    debounce((q) => sendQuery(q), 600),
    []
  );

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    delayedSearch(e.target.value);
  };

  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">Shows&Films</Link>
        </div>
        <div
          className={styles.searchBar}
          onBlur={() => {
            setSearchActive(false);
          }}
        >
          <MdSearch />
          <input
            type="text"
            onChange={onSearchInputChange}
            onFocus={() => {
              setSearchActive(true);
            }}
            placeholder="search here"
          />
          {searchActive && searchData.length > 0 && (
            <SearchResult data={searchData} />
          )}
        </div>
        <div className={styles.categories}>
          <ul>
            <li>People</li>
            <li>Shows</li>
            <li>Films</li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Header;
