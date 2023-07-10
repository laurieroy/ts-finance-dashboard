import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

type Props = {};
const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  return (
    <>
      {" "}
      <DashboardBox gridArea="a">"a"</DashboardBox>
      <DashboardBox gridArea="b">"b"</DashboardBox>
      <DashboardBox gridArea="c">"c"</DashboardBox>
    </>
  );
};
export default Row1;
