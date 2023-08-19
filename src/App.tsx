import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import NewAlert from "./components/NewAlert";
import { useState } from "react";
import "./App.css";
import Like from "./components/Like/Like";
import Message from "./components/Message";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Praha"];

  // const [isApproved, setApproved] = useState(true); //cannot be called in loops etc,

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const onClickedButton = () => {
  //   setAlerted(true);
  // };

  // const onDismiss = () => {
  //   setAlerted(false);
  // };

  // const [alerted, setAlerted] = useState(false);

  // const [person, setPerson] = useState({
  //   firstName: "",
  //   lastName: "",
  // });

  //Use pure functions - same result no matter the input

  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   address: {
  //     city: "San Francisco",
  //     zipCode: 94111,
  //   },
  // });

  // const [tags, setTags] = useState(["happy", "cheerful"]);

  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);

  // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });

  const handleClick = () => {
    // const newDrink = {
    //   ...drink, //copy all properties
    //   price: 6,
    // };
    // setDrink(newDrink);
    // //better
    // setDrink({ ...drink, price: 6 });
    // setCustomer({
    //   ...customer,
    //   address: { ...customer.address, zipCode: 94112 }, //When using ... to copy an object, its object children are copied by reference, so we need to copy it once more
    // });
    // setTags([...tags, "exciting"]); //Add
    // setTags(tags.filter((tag) => tag !== "happy")); //Remove
    // setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag))); //Update
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // setBugs(
    //   produce((draft) => {
    //     const bug = draft.find((bug) => bug.id === 1);
    //     if (bug) bug.fixed = true;
    //   })
    // );
    // setGame({ ...game, player: { ...game.player, name: "bob" } });
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
    //   ),
    // });
  };

  return (
    <div>
      {/* {alerted && <NewAlert onDismiss={onDismiss}>This is an alert</NewAlert>} */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        <span>Hello World</span>
      </Alert> */}

      {/* <Button onClicked={onClickedButton}>Ahoj</Button> */}
      {/* <Like onClick={() => console.log("clicked")} /> */}
      {/* <Message /> */}
      {/* {drink.price} */}
      {/* {customer.address.zipCode} */}
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "new"}
        </p>
      ))} */}
      {/* <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}

      {/* {pizza.toppings} */}
      {/* {cart.items.map((item) => (
        <p>{item.quantity}</p>
      ))}
      <button onClick={handleClick}>Click me</button> */}
      {/* <ExpandableText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        cupiditate recusandae sapiente accusantium debitis ea dolores voluptas
        illum igendi perferendis rerum provident eos expedita reiciendis, iste
        necessitatibus modi dolores. Accusamus, ut nobis.
      </ExpandableText> */}
    </div>
  );
}

export default App;
