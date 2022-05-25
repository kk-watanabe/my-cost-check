import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "@tanstack/react-location";

import styled from "styled-components";
import tw from "twin.macro";

import { graphBgColors, graphBorderColors, ColorType } from "@/const/color";

import Button from "@/components/elements/Button";
import Title from "@/components/elements/Title";
import Card from "@/components/elements/Card";
import Table from "@/components/elements/Table";

import VerticalBarChart, { VerticalBarChartData } from "@/components/graph/VerticalBarChart";

import { getColorType } from "@/utils/color-utils";

const DetailContainer = styled.div`
  ${tw`
    mx-auto
    max-w-6xl
  `}
`;

const DetailBody = styled.section`
  ${tw`
    mt-12
    mx-auto
    max-w-5xl
  `}
`;

const DetailButton = styled(Button)`
  ${tw`
    mt-12
    mx-auto
  `}
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

const GraphDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pageId = location.current.pathname.replace("/", "");

  const [labels, setLabels] = useState<string[]>([]);
  const [datasets, setDatasets] = useState<VerticalBarChartData[]>([]);
  const data = {
    labels,
    datasets,
  };
  const [tableHeadData, setTableHeadData] = useState<string[]>([]);
  const [tableBodyData, setTableBodyData] = useState<string[][]>([]);

  const [colorType, setColorType] = useState<ColorType>(ColorType.BLUE);

  const handleClick = () => {
    navigate({ to: "/" });
  };

  useEffect(() => {
    const result = dummyCosts;
    const findResult = result.find((r) => r.id === pageId) as Cost;
    const findIndex = result.findIndex((r) => r.id === pageId);

    setColorType(getColorType(findIndex));

    const labels = findResult.dates.map((date) => date.label);
    setLabels(labels);
    setTableHeadData(["", ...labels]);

    const amounts = findResult.dates.map((date) => date.amount);
    setDatasets([
      {
        label: findResult.name,
        data: amounts,
        backgroundColor: graphBgColors[findIndex],
        borderColor: graphBorderColors[findIndex],
        borderWidth: 1,
      },
    ]);
    const tableBodyDataCells = [findResult.name, ...amounts.map((d) => d.toLocaleString())];
    setTableBodyData([tableBodyDataCells]);
  }, [pageId]);

  return (
    <DetailContainer>
      <Title text="クレジットカードAの1年間のデータ" level={1} color={colorType} />

      <DetailBody>
        <Card>
          <VerticalBarChart data={data} />
        </Card>
      </DetailBody>

      <DetailBody>
        <Table headColor={colorType} headData={tableHeadData} bodyData={tableBodyData} />
      </DetailBody>

      <DetailButton label="TOPに戻る" color="normal" onClick={handleClick} />
    </DetailContainer>
  );
};

export default GraphDetail;
