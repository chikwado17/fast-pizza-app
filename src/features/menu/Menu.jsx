import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  //consuming our loader using useLoaderData hooks
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

//function to fetch from our api using loader and pass to our router
export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
