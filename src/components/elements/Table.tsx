import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

import { ColorType } from "@/const/color";

type TableCell = number | string;

export interface TableProps {
  headColor?: ColorType;
  headData: string[];
  bodyData: TableCell[][];
}

const TableOverContainer = styled.div`
  ${tw`
    w-full
    overflow-y-hidden
    overflow-x-auto
  `}
`;

const TableBase = styled.table`
  ${tw`
    w-full
    bg-white
    table-auto
    whitespace-nowrap
  `}
`;

const HeadTh = styled.th.attrs((props: TableProps) => {
  const { headColor } = props;
  const result: string[] = ["border-y", "border-y-gray-200"];

  // color
  switch (headColor) {
    case "red":
      result.push("bg-red-100");
      break;
    case "orange":
      result.push("bg-orange-100");
      break;
    case "yellow":
      result.push("bg-yellow-100");
      break;
    case "green":
      result.push("bg-green-100");
      break;
    case "blue":
      result.push("bg-sky-100");
      break;
    case "purple":
      result.push("bg-purple-100");
      break;
    default:
      result.push("bg-sky-100");
      break;
  }

  return {
    className: result.join(" "),
  };
})`
  ${tw`
      p-4
      text-sm
      text-center
  `}
`;

const BodyTh = styled.th`
  ${tw`
      p-4
      text-sm
      border-b
      border-b-gray-200
      text-left
  `}
`;

const Td = styled.td`
  ${tw`
      p-4
      text-sm
      border-b
      border-b-gray-200
      text-right
  `}
`;

export interface TableCellProps {
  value: TableCell;
  index: number;
}

const TableCell = (props: TableCellProps) => {
  const { value, index } = props;

  if (index === 0) {
    return <BodyTh>{value}</BodyTh>;
  } else {
    return <Td>{value}</Td>;
  }
};

const Table = (props: TableProps) => {
  const { headData, bodyData } = props;

  return (
    <TableOverContainer>
      <TableBase>
        <thead>
          <tr>
            {headData.map((data) => (
              <HeadTh {...props} key={data}>
                {data}
              </HeadTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyData.map((value, index) => (
            <tr key={`row${index}`}>
              {value.map((data, i: number) => (
                <TableCell value={data} index={i} key={`row${index}-cell${i}`} />
              ))}
            </tr>
          ))}
        </tbody>
      </TableBase>
    </TableOverContainer>
  );
};

export default Table;
