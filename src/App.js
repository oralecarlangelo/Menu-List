import React from "react";
import { foodMenu } from "./constants";
import All from "./pages/All";

function App() {
  const [selectedTab, setSelectedTab] = React.useState("All");
  const [menuList, setMenuList] = React.useState(foodMenu);
  const [filter, setFilter] = React.useState("");

  React.useEffect(() => {
    setMenuList(
      foodMenu.filter((menu) =>
        menu.type.toLowerCase().includes(selectedTab.toLowerCase())
      )
    );
    if (selectedTab.toLowerCase() === "all") {
      setMenuList(foodMenu);
    }
  }, [selectedTab]);

  React.useEffect(() => {
    setMenuList(
      foodMenu.filter((menu) =>
        menu.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter]);

  console.log(menuList);

  const tabs = (newTabs) => {
    return newTabs.map((tab) => (
      <button
        className={`px-10 py-2 text-gray-50 ${
          selectedTab === tab ? "bg-gray-500" : "bg-black "
        }`}
        onClick={() => setSelectedTab(tab)}
      >
        {tab}
      </button>
    ));
  };

  return (
    <div className="bg-slate-50">
      <h1 className="text-5xl text-center font-bold p-10">Menu</h1>
      <div className="max-w-6xl 0 mx-auto">
        <div className="flex justify-between">
          <div>{tabs(["All", "Pasta", "Drink", "Soup", "Dessert"])}</div>
          <div className="border border-black flex items-center">
            <input
              className="bg-white focus:outline-none h-full px-5"
              onChange={(e) => setFilter(e.currentTarget.value)}
              value={filter}
            />
            {filter.length > 0 ? (
              <button className="text-xl px-3" onClick={() => setFilter("")}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            ) : (
              <div className="text-xl px-3">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            )}
          </div>
        </div>
        {/* {tabChange()} */}
        <All menuList={menuList} />
      </div>
    </div>
  );
}

export default App;
