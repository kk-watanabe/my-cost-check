import { FC, useState, useEffect } from "react";
// import { FC, useCallback, useEffect } from "react";
// import { useFirebaseContext } from "@/providers/FirebaseProvider";
// import { useUserContext } from "@/providers/UserProvider";
// import { buildUserInfo, buildCosts } from "@/utils/type-utils";
import { buildTotalCharts } from "@/utils/type-utils";

import { useNavigate } from "@tanstack/react-location";

import styled from "styled-components";
import tw from "twin.macro";

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

const dummyCosts: Cost[] = [
  {
    id: "credit-card-a",
    name: "クレジットカードA",
    dates: [
      {
        label: "2020/08",
        amount: 12300,
      },
      {
        label: "2020/09",
        amount: 23300,
      },
      {
        label: "2020/10",
        amount: 10000,
      },
      {
        label: "2020/11",
        amount: 8300,
      },
      {
        label: "2020/12",
        amount: 15700,
      },
      {
        label: "2021/01",
        amount: 19000,
      },
    ],
  },
  {
    id: "credit-card-b",
    name: "クレジットカードB",
    dates: [
      {
        label: "2020/08",
        amount: 10000,
      },
      {
        label: "2020/09",
        amount: 13300,
      },
      {
        label: "2020/10",
        amount: 4000,
      },
      {
        label: "2020/11",
        amount: 6300,
      },
      {
        label: "2020/12",
        amount: 4700,
      },
      {
        label: "2021/01",
        amount: 9000,
      },
    ],
  },
  {
    id: "credit-card-c",
    name: "クレジットカードC",
    dates: [
      {
        label: "2020/08",
        amount: 1500,
      },
      {
        label: "2020/09",
        amount: 1300,
      },
      {
        label: "2020/10",
        amount: 3000,
      },
      {
        label: "2020/11",
        amount: 3300,
      },
      {
        label: "2020/12",
        amount: 2700,
      },
      {
        label: "2021/01",
        amount: 4500,
      },
    ],
  },
];

const Home: FC = () => {
  // const { getQuerySnapshot, getDocumentSnapshot } = useFirebaseContext();
  // const { uid } = useUserContext();
  // const usersCollectionName = "users";
  // const usersPath = `${usersCollectionName}/${uid}`;
  // const costsCollectionName = "costs";
  // const costsPath = `${usersPath}/${costsCollectionName}`;

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
  const [costs, setCosts] = useState<Cost[]>([]);
  // const [userInfos, setUserInfos] = useState<UserInfo[]>([]);

  const handleGraphClick = (data: ChartData) => {
    navigate({ to: `${costs[data.datasetIndex].id}` });
  };

  // const fetch = useCallback(async () => {
  //   const userResult = getDocumentSnapshot(usersPath);

  //   if ((await userResult).exists()) {
  //     const userInfo = buildUserInfo(userResult);
  //     console.log(userInfo);

  //     const costsResult = getQuerySnapshot(costsPath);
  //     const costs = await (await costsResult).docs.map(buildCosts);
  //     console.log(costs);
  //   }
  // }, [getDocumentSnapshot, usersPath, getQuerySnapshot, costsPath]);

  useEffect(() => {
    const result = dummyCosts;
    setCosts(result);

    const labels = result[0].dates.map((date) => date.label);
    setLabels(labels);

    const totalCosts = buildTotalCharts(result);
    setLineDatasets(totalCosts);
    setStackedBarDatasets(totalCosts);
    // setUserInfos([
    //   {
    //     id:
    //   }
    // ]);
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
