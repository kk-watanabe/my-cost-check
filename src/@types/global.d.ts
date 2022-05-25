type UserDocuments = {
  email: string;
  is_admin: boolean;
  name: string;
};

type UserInfo = {
  id: string;
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

type ChartData = {
  datasetIndex: number;
  title: string;
  amount: number;
  label: string;
};

type TotalChart = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
};

type TotalChartProps = {
  data: {
    labels: string[];
    datasets: TotalChart[];
  };
  onClick: (data: ChartData) => void;
};
