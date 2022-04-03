import Button from "./Button";
import "./Main.css"

function Main({ list, setList }) {
  function handleClick() {
    setList([]);
  }
  function handleClick2(id) {
    let tempList = list.filter((item) => item.id !== id);
    setList(tempList);
  }

  return (
    <div className="container">
      
      <h3>{list.length} Birthday Today</h3>
      <ul>
        {list.map((person) => {
          const { id, name, age, img } = person;
          return (
            <li className="birthday-person" key={id}>
              <div className="person-img">
                <img src={img} alt="" />
              </div>
              <div className="person-info">
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <Button className="clear-button" onclick={() => handleClick2(id)}>
                Clear
              </Button>
            </li>
          );
        })}
      </ul>
      <Button className="clear-all-button" onclick={handleClick}>
        Clear All
      </Button>
    </div>
  );
}

export default Main;
