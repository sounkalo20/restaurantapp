import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-12
         ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}
    >
      <div
        className="w-300 h-auto md:w-340 my-12 backdrop-blur-lg bg-gray-100
       rounded-lg p-2 hover:drop-shadow-2xl"
      >
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src=""
            alt=""
            className="w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center"
          >
            <MdShoppingBasket className="text-white " />
          </motion.div>
        </div>
        <div className="w-full flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            chocolat & vanille
          </p>
          <p className="mt-1 text-sm text-gray-500">45 calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">FCFA</span>2000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
