import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery } from "@/state/api";

type Props = {};
const Row2 = (props: Props) => {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <>
      <DashboardBox gridArea="d">"d"</DashboardBox>
      <DashboardBox gridArea="e">"e"</DashboardBox>
      <DashboardBox gridArea="f">"f"</DashboardBox>
    </>
  );
};
export default Row2;
