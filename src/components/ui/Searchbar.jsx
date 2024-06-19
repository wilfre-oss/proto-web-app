import searchIcon from "/src/assets/search-icon.png"

const Searchbar = () => {
  return (
    <div className="searchbar">
      <input placeholder="Search..." />
      <button >
        <img src={searchIcon} width={16} height={16}/>
      </button>
    </div>
  );
};

export default Searchbar;
