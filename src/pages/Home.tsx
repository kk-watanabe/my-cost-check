import { FC, useState, useEffect } from "react";

import { useNavigate } from "@tanstack/react-location";

import { useUserContext } from "@/providers/UserProvider";
import { buildTotalCharts } from "@/utils/type-utils";
import { useFetchCostsWithSWR } from "@/hooks/swr-hooks";

import styled from "styled-components";
import tw from "twin.macro";

import Loading from "@/components/common/Loading";

import Title from "@/components/elements/Title";
import Card from "@/components/elements/Card";

import LineChart from "@/components/graph/LineChart";
import StackedBarChart from "@/components/graph/StackedBarChart";

const HomeContainer = styled.div`
  ${tw`
    mt-6
    space-y-6
  `}
`;

const HomeRow = styled.div`
  ${tw`
    block
    space-y-6
    md:space-y-0
    md:space-x-6
    md:flex
  `}
`;

const HomeCard = styled.section`
  ${tw`
    md:w-1/2
  `}
`;

const CardLabel = styled.h3`
  ${tw`
    text-center
    text-slate-600
    font-bold
    text-sm
  `}
`;

const CardGraph = styled.div`
  ${tw`
    mt-3
  `};
`;

const Home: FC = () => {
  const { uid } = useUserContext();
  const costsUrl = `users/${uid}/costs`;
  const { costs, isLoading } = useFetchCostsWithSWR(costsUrl);

  const navigate = useNavigate();
  const [labels, setLabels] = useState<string[]>([]);
  const [lineDatasets, setLineDatasets] = useState<TotalChart[]>([]);
  const lineData = {
    labels,
    datasets: lineDatasets,
  };
  const [stackedBarDatasets, setStackedBarDatasets] = useState<TotalChart[]>([]);
  const stackedBarData = {
    labels,
    datasets: stackedBarDatasets,
  };

  const handleGraphClick = (data: ChartData) => {
    navigate({ to: `/graph/${costs[data.datasetIndex].id}` });
  };

  useEffect(() => {
    if (costs.length > 0) {
      const labels = costs[0].dates.map((date) => date.label);
      setLabels(labels);

      const totalCosts = buildTotalCharts(costs);
      setLineDatasets(totalCosts);
      setStackedBarDatasets(totalCosts);
    }
  }, [costs]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Title text="最新データ" level={2} />
      <HomeContainer>
        <HomeRow>
          <HomeCard>
            <Card>
              <CardLabel>各月の全額 - 積み上げ棒グラフ</CardLabel>
              <CardGraph>
                <StackedBarChart data={stackedBarData} onClick={handleGraphClick} />
              </CardGraph>
            </Card>
          </HomeCard>

          <HomeCard>
            <Card>
              <CardLabel>各月のカード使用額 - 折れ線グラフ</CardLabel>
              <CardGraph>
                <LineChart data={lineData} onClick={handleGraphClick} />
              </CardGraph>
            </Card>
          </HomeCard>
        </HomeRow>
      </HomeContainer>
    </>
  );
};

export default Home;
