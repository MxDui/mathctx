import SimpleCard from "mathctx/components/Cards/SimpleCard";
import Navbar from "mathctx/components/Navigation/Navbar";
import { useDictionary } from "mathctx/lang/lang";
import React from "react";

const Dashboard = () => {
  const d = useDictionary("es");

  return (
    <>
      <Navbar />
      <div className="flex flex-col m-5 h-screen">
        <h1 className="text-4xl font-bold">{d?.["page.dashboard.title"]}</h1>
        <p className="text-xl mb-5">{d?.["page.dashboard.description"]}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
