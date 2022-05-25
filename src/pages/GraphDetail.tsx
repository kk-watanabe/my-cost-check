import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "@tanstack/react-location";

import styled from "styled-components";
import tw from "twin.macro";

import { useUserContext } from "@/providers/UserProvider";
import { useFetchCostsWithSWR } from "@/hooks/swr-hooks";

import { ColorType } from "@/const/color";

import Loading from "@/components/common/Loading";

import Button from "@/components/elements/Button";
import Title from "@/components/elements/Title";
import Card from "@/components/elements/Card";
import Table from "@/components/elements/Table";

import VerticalBarChart, { VerticalBarChartData } from "@/components/graph/VerticalBarChart";

import { getColorType, getBgColoos, getBorderColoos } from "@/utils/color-utils";

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

const GraphDetail = () => {
  const { uid } = useUserContext();
  const costsUrl = `users/${uid}/costs`;
  const { costs, isLoading } = useFetchCostsWithSWR(costsUrl);

  const navigate = useNavigate();
  const location = useLocation();

  const [cost, setCost] = useState<Cost | null>(null);
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
    if (costs.length > 0) {
      const bgColors = getBgColoos(costs);
      const borderColors = getBorderColoos(costs);

      const pageId = location.current.pathname.replace("/graph/", "");
      const findResult = costs.find((cost) => cost.id === pageId) as Cost;
      setCost(findResult);

      const findIndex = costs.findIndex((cost) => cost.id === pageId);

      setColorType(getColorType(bgColors[findIndex]));

      const labels = findResult.dates.map((date) => date.label);
      setLabels(labels);
      setTableHeadData(["", ...labels]);

      const amounts = findResult.dates.map((date) => date.amount);
      setDatasets([
        {
          label: findResult.name,
          data: amounts,
          backgroundColor: bgColors[findIndex],
          borderColor: borderColors[findIndex],
          borderWidth: 1,
        },
      ]);
      const tableBodyDataCells = [findResult.name, ...amounts.map((d) => d.toLocaleString())];
      setTableBodyData([tableBodyDataCells]);
    }
  }, [costs, location]);

  if (isLoading && cost === null) {
    return <Loading />;
  } else {
    return (
      <DetailContainer>
        <Title text={`${cost?.name}の1年間のデータ`} level={1} color={colorType} />

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
  }
};

export default GraphDetail;
