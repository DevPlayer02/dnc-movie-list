const Header = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    event.target[0].value = "";
  }

  return (
    <header className="Header">
      <img src="https://i.pinimg.com/originals/42/cc/72/42cc720869cbc5da9a912b23f3df0b04.jpg" alt="ERROR" />
      <form onSubmit={handleSubmit}>
        <input 
        type="text"  
        placeholder="Pesquise por filmes" 
        />
      </form>
    </header>
  );
};

export default Header;
