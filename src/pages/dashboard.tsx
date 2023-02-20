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
            title={d?.["page.dashboard.algebra.title"] || "Algebra"}
            description={
              d?.["page.dashboard.algebra.description"] || "Description 1"
            }
            image="https://thumbs.dreamstime.com/z/s%C3%ADmbolos-y-objetos-de-la-%C3%A1lgebra-41425448.jpg"
          />
          <SimpleCard
            title={d?.["page.dashboard.discrete.title"] || "Discrete"}
            description={
              d?.["page.dashboard.discrete.description"] || "Description 2"
            }
            image="https://blog-media.byjusfutureschool.com/bfs-blog/2022/09/21090501/Article-Page-86.png"
          />
          <SimpleCard
            title={d?.["page.dashboard.calculus.title"] || "Geometry"}
            description={
              d?.["page.dashboard.calculus.description"] || "Description 3"
            }
            image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/120636805/original/8fa719901b652c17b9150cb247f64e0be6727e45/do-calculus-and-algebra.jpg"
          />
          <SimpleCard
            title={d?.["page.dashboard.geometry.title"] || "Geometry"}
            description={
              d?.["page.dashboard.geometry.description"] || "Description 4"
            }
            image="https://www.onlinemath4all.com/images/analyticalgeometryformulas7.png"
          />
          <SimpleCard
            title={d?.["page.dashboard.statistics.title"] || "Statistics"}
            description={
              d?.["page.dashboard.statistics.description"] || "Description 5"
            }
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Standard_Normal_Distribution.png/290px-Standard_Normal_Distribution.png"
          />
          <SimpleCard
            title={d?.["page.dashboard.logic.title"] || "Logic"}
            description={
              d?.["page.dashboard.logic.description"] || "Description 6"
            }
            image="https://d3i71xaburhd42.cloudfront.net/6c511973e8ef9cad01387a3611ed61dc12a0719e/16-Table1-1.png"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
