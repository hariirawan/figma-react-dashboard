import React from "react";
import NewDepositBtn from "./NewDepositBtn";
import Deposits from "./Deposits/Deposits";

import depositData from "../../DepositData.json";

const Main = () => {
  return (
    <React.Fragment>
      <NewDepositBtn />
      <Deposits title="Active Deposits" count={2} data={depositData.active} />
      <Deposits title="Closed Deposits" count={8} data={depositData.closed} />
    </React.Fragment>
  );
};

export default Main;
