import Header from "../../Components/Header";
import Bar from "./Bar";
const BarChart = () => {
  return (
    <div>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </div>
  );
};

export default BarChart;
