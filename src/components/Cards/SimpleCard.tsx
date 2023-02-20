import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SimpleCardProps } from "mathctx/types";
import Link from "next/link";

const SimpleCard = (props: SimpleCardProps) => {
  return (
    <Link href={props.route ? props.route : "/definitions"} passHref>
      <motion.div
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.95 }}
        className="max-w-full rounded-xl  shadow-lg cursor-pointer  overflow-hidden h-96 flex flex-col justify-end"
        style={{
          backgroundImage: `linear-gradient(rgb(0 0 0 / 10%), rgb(0 0 0 / 80%)), url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">
            {props.title}
            <p className="text-[#b6c0cd] text-base">{props.description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default SimpleCard;
