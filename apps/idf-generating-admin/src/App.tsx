import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CompDataSegmentItemList } from "./compDataSegmentItem/CompDataSegmentItemList";
import { CompDataSegmentItemCreate } from "./compDataSegmentItem/CompDataSegmentItemCreate";
import { CompDataSegmentItemEdit } from "./compDataSegmentItem/CompDataSegmentItemEdit";
import { CompDataSegmentItemShow } from "./compDataSegmentItem/CompDataSegmentItemShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { ConsignorList } from "./consignor/ConsignorList";
import { ConsignorCreate } from "./consignor/ConsignorCreate";
import { ConsignorEdit } from "./consignor/ConsignorEdit";
import { ConsignorShow } from "./consignor/ConsignorShow";
import { ImportHeaderList } from "./importHeader/ImportHeaderList";
import { ImportHeaderCreate } from "./importHeader/ImportHeaderCreate";
import { ImportHeaderEdit } from "./importHeader/ImportHeaderEdit";
import { ImportHeaderShow } from "./importHeader/ImportHeaderShow";
import { ConsigneeList } from "./consignee/ConsigneeList";
import { ConsigneeCreate } from "./consignee/ConsigneeCreate";
import { ConsigneeEdit } from "./consignee/ConsigneeEdit";
import { ConsigneeShow } from "./consignee/ConsigneeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"IDF Generating"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CompDataSegmentItem"
          list={CompDataSegmentItemList}
          edit={CompDataSegmentItemEdit}
          create={CompDataSegmentItemCreate}
          show={CompDataSegmentItemShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="Consignor"
          list={ConsignorList}
          edit={ConsignorEdit}
          create={ConsignorCreate}
          show={ConsignorShow}
        />
        <Resource
          name="ImportHeader"
          list={ImportHeaderList}
          edit={ImportHeaderEdit}
          create={ImportHeaderCreate}
          show={ImportHeaderShow}
        />
        <Resource
          name="Consignee"
          list={ConsigneeList}
          edit={ConsigneeEdit}
          create={ConsigneeCreate}
          show={ConsigneeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
