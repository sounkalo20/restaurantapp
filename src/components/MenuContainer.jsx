import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import {motion} from 'framer-motion';
import { RowContainer } from './index'
import { useStateValue } from "../context/StateProvider";

function MenuContainer() {
  const [filter, setFilter] = useState("chiken");

  const [{foodItems}, dispatch] = useStateValue()

  return (
    <section className="w-full my-6">
      <div className="w-full flex flex-col items-center justify-center">
        <p
          className="text-2xl font-semibold capitalize text-headingColor relative
            before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:bottom-0
            before:left-0  before:bg-gradient-to-tr from-orange-400 to-orange-600 
            transition-all ease-in-out duration-100 mr-auto"
        >
          Nos Saveurs chaude
        </p>
        <div
          className="w-full flex items-center justify-start lg:justify-center gap-8 py-6
            overflow-x-scroll scrollbar-none"
        >
          {categories &&
            categories.map((categorie) => (
              <motion.div
              whileTap={{scale: 0.70}}
                key={categorie.id}
                className={`group ${filter === categorie.urlParamName ? 'bg-cartNumBg' : 'bg-card'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg
                            drop-shadow-xl flex flex-col gap-3 items-center justify-center
                             hover:bg-cartNumBg`}
                  onClick={() => setFilter(categorie.urlParamName)}
                >
                    <div className={`w-10 h-10 rounded-full shadow-lg
                                ${filter === categorie.urlParamName ? 'bg-white' : 'bg-cartNumBg'} group-hover:bg-white shadow-lg flex
                                items-center justify-center`}>
                  <IoFastFood className={`${filter === categorie.urlParamName ? 'text-textColor' : 'text-white'} group-hover:text-textColor text-lg`} />
                </div>
                <p className={`text-sm  ${filter === categorie.urlParamName ? 'text-white' : 'text-textColor'} group-hover:text-white`}>
                  {categorie.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
              <RowContainer flag={false} data={foodItems?.filter(n => n.category === filter)}  />
        </div>
      </div>
    </section>
  );
}

export default MenuContainer;
