import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SimpleCardProps } from "mathctx/types";

const SimpleCard = (props: SimpleCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.95 }}
      className="max-w-full rounded-xl overflow-hidden shadow-lg border-[1px] border-blue-600"
    >
      <Image
        className="w-full h-[25em] object-cover"
        width={400}
        height={250}
        src={
          props.image
            ? props.image
            : "https://images.unsplash.com/photo-1676310483825-daa08914445e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80"
        }
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {props.title}
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SimpleCard;
