import { type } from "os";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onSearchInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchInput);
  };

  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">Shows&Films</Link>
        </div>
        <div className={styles.searchBar}>
          <MdSearch />
          <form onSubmit={onSearchInputSubmit}>
            <input
              type="text"
              onChange={onSearchInputChange}
              placeholder="search here"
            ></input>
            <button type="submit">search</button>
          </form>
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
