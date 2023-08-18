import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { DataGrid } from "@mui/x-data-grid";

type Props = {};

const Row3 = (props: Props) => {
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  // console.log(transactionData);

  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader />
        <DataGrid />
      </DashboardBox>
      <DashboardBox gridArea="h">"h"</DashboardBox>
      <DashboardBox gridArea="i">"i"</DashboardBox>
      <DashboardBox gridArea="j">"j"</DashboardBox>
    </>
  );
};
export default Row3;
