type UserDocuments = {
  email: string;
  is_admin: boolean;
  name: string;
};

type UserInfo = {
  email: string;
  isAdmin: boolean;
  name: string;
};

type CostDate = {
  amount: number;
  label: string;
};

type Cost = {
  id: string;
  name: string;
  dates: CostDate[];
};

type ClassProps = {
  className: string;
};

type VerticalBarChartDataProps = {
  label: string;
  data: number[];
  backgroundColor: string | string[];
  borderColor: string | string[];
  borderWidth?: number;
};

type VerticalBarChartProps = {
  labels: string[];
  datasets: VerticalBarChartDataProps[];
};

type LineChartDataProps = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
};

type LineChartProps = {
  labels: string[];
  datasets: LineChartDataProps[];
};
