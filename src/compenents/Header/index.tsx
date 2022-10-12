import { type } from "os";
import { useState } from "react";
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
      <div className={styles.navbar}>
        <div className={styles.logo}>Shows&Films</div>
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
          <div>People</div>
          <div>Shows</div>
          <div>Films</div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Header;
