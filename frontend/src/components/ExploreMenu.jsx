import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="" id="explore-menu">
      <div className="flex flex-col gap-[20px] ">
        <h1 className="font-bold text-black text-[30px]">Explore Our menu</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          consectetur esse quisquam? Natus quia modi doloribus, esse enim non
          magnam explicabo autem fugiat minima, praesentium officiis temporibus
          beatae eveniet voluptas.
        </p>

        {/* exploremenulist */}
        <div className="flex items-center justify-between gap-10 text-center">
          {menu_list.map((item, index) => {
            return (
              <div
                className={index}
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_image ? "All" : item.menu_name
                  )
                }
              >
                <img
                  className={
                    category === item.menu_name
                      ? "active border-4 border-orange-600  cursor-pointer rounded-full "
                      : " cursor-pointer hover:border-orange-300 hover:rounded-full"
                  }
                  src={item.menu_image}
                  alt="menu image"
                />
                <p className=" mt-[10px] text-black font-bold cursor-pointer ">
                  {item.menu_name}
                </p>
              </div>
            );
          })}
        </div>

        <hr className="h-1 rounded-full bg-slate-400/50" />
      </div>
    </div>
  );
}

export default ExploreMenu;
