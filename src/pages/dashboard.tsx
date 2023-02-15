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
          <SimpleCard
            title="Card 1"
            description="Description 1"
            image="https://images.unsplash.com/photo-1676339817124-836bd7a23a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          />
          <SimpleCard title="Card 2" description="Description 2" />
          <SimpleCard title="Card 3" description="Description 3" />
          <SimpleCard title="Card 4" description="Description 4" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
