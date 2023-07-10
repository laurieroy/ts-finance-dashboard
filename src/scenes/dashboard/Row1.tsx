import DashboardBox from "@/components/DashboardBox";

type Props = {};
const Row1 = (props: Props) => {
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
