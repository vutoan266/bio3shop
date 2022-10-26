import { FC, useMemo } from "react";
import { PlusOutlined } from "@ant-design/icons";

interface Props {}

const GoodItemAdder: FC<Props> = () => {
  return (
    <div
      className="w-full h-0 relative bg-cover rounded-3xl border-dashed border-2 cursor-pointer"
      style={{
        filter: "drop-shadow(rgb(228, 228, 228) 3px 3px 6px)",
        paddingTop: "100%",
      }}
    >
      <div
        className="text-center absolute top-1/2 left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Add new item</div>
      </div>
    </div>
  );
};

export default GoodItemAdder;
