import { FC, useMemo } from "react";

interface Props {
  url: string;
  img: string;
  name: string;
  price?: number;
}

const GoodItem: FC<Props> = ({ url, img, name, price }) => {
  return (
    <div>
      <a href={url} target="_blank" className="text-center text-black">
        <div
          className="w-full bg-cover rounded-3xl"
          style={{
            filter: "drop-shadow(rgb(228, 228, 228) 3px 3px 6px)",
            backgroundImage: `url(${img})`,
            paddingTop: "100%",
          }}
        ></div>
        <p className="pt-3" style={{ color: "#656565" }}>
          {name}
        </p>
        {price ?? <span>{price}</span>}
      </a>
    </div>
  );
};

export default GoodItem;
