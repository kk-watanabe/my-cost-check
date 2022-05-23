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

type ChartDataProps = {
  label: string;
  data: number[];
  backgroundColor: string | string[];
  borderColor?: string[];
  borderWidth?: number;
};

type ChartProps = {
  labels: string[];
  datasets: ChartDataProps[];
};
