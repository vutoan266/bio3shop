import { FC, useMemo } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  perRowNumber?: number;
}
const COLS_MAPPING: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
};
const GoodCategoryLayout: FC<Props> = ({
  title,
  children,
  perRowNumber = 2,
}) => {
  return (
    <div className="" style={{ color: "#656565" }}>
      <p className="text-lg font-medium">{title}</p>
      <div className={`grid ${COLS_MAPPING[perRowNumber]} gap-4`}>
        {children}
      </div>
    </div>
  );
};

export default GoodCategoryLayout;
