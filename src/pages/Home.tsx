import { FC, useState, useEffect } from "react";
// import { FC, useCallback, useEffect } from "react";
// import { useFirebaseContext } from "@/providers/FirebaseProvider";
// import { useUserContext } from "@/providers/UserProvider";
// import { buildUserInfo, buildCosts } from "@/utils/type-utils";

import { useNavigate } from "@tanstack/react-location";

import { Chart as ChartJS, ActiveElement, ChartEvent } from "chart.js";
import styled from "styled-components";
import tw from "twin.macro";

import { graphBgColors, graphBorderColors } from "@/const/color";

import Title from "@/components/elements/Title";
import Card from "@/components/elements/Card";

import LineChart, { LineChartDataProps } from "@/components/graph/LineChart";
import StackedBarChart, { StackedBarChartDataProps } from "@/components/graph/StackedBarChart";

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
  // const { getQuerySnapshot, getDocumentSnapshot } = useFirebaseContext();
  // const { uid } = useUserContext();
  // const usersCollectionName = "users";
  // const usersPath = `${usersCollectionName}/${uid}`;
  // const costsCollectionName = "costs";
  // const costsPath = `${usersPath}/${costsCollectionName}`;

  const navigate = useNavigate();
  const [labels, setLabels] = useState<string[]>([]);
  const [lineDatasets, setLineDatasets] = useState<LineChartDataProps[]>([]);
  const lineData = {
    labels,
    datasets: lineDatasets,
  };
  const [stackedBarDatasets, setStackedBarDatasets] = useState<StackedBarChartDataProps[]>([]);
  const stackedBarData = {
    labels,
    datasets: stackedBarDatasets,
  };

  const handleGraphClick = (event: ChartEvent, elements: ActiveElement[], chart: ChartJS, data: CostDate) => {
    console.log(event, elements, chart, data);
    navigate({ to: `${data.label}` });
  };

  // const fetch = useCallback(async () => {
  //   const userResult = getDocumentSnapshot(usersPath);

  //   if ((await userResult).exists()) {
  //     const userInfo = buildUserInfo((await userResult).data() as UserDocuments);
  //     console.log(userInfo);

  //     const costsResult = getQuerySnapshot(costsPath);
  //     const costs = await (await costsResult).docs.map(buildCosts);
  //     console.log(costs);
  //   }
  // }, [getDocumentSnapshot, usersPath, getQuerySnapshot, costsPath]);

  useEffect(() => {
    setLabels(["2020/08", "2020/09", "2020/10", "2020/11", "2020/12", "2021/01"]);
    setLineDatasets([
      {
        label: "○○カードA",
        data: [12300, 23300, 10000, 8300, 15700, 19000],
        backgroundColor: graphBgColors[0],
        borderColor: graphBorderColors[0],
      },
      {
        label: "○○カードB",
        data: [2300, 3300, 1000, 800, 5700, 1400],
        backgroundColor: graphBgColors[4],
        borderColor: graphBorderColors[4],
      },
    ]);
    setStackedBarDatasets([
      {
        label: "○○カードA",
        data: [12300, 23300, 10000, 8300, 15700, 19000],
        backgroundColor: graphBgColors[0],
        borderColor: graphBorderColors[0],
      },
      {
        label: "○○カードB",
        data: [10000, 13300, 4000, 6300, 4700, 9000],
        backgroundColor: graphBgColors[3],
        borderColor: graphBorderColors[3],
      },
      {
        label: "○○カードC",
        data: [1500, 1300, 3000, 3300, 2700, 4500],
        backgroundColor: graphBgColors[4],
        borderColor: graphBorderColors[4],
      },
    ]);
  }, []);

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
