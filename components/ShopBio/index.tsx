import { FC, useMemo } from "react";
import AvatarUploader from "../AvatarUploader/AvatarUploader";

interface Props {}

const ShopBio: FC<Props> = () => {
  return (
    <div className="h-52 bg-zinc-200 p-5" style={{ background: "#c7d4d0" }}>
      <div
        className="rounded-3xl h-5/6 w-full px-10 py-4 flex flex-row items-center justify-between"
        style={{ background: "#d2ddd9" }}
      >
        <div>
          <div className="text-2xl font-semibold mb-1">Bio3 Shop</div>
          <div className="text">Some description here</div>
        </div>
        <AvatarUploader />
      </div>
    </div>
  );
};

export default ShopBio;
