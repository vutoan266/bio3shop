import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import GoodCategoryLayout from "../../components/GoodLayout/GoodCategoryLayout";
import GoodItem from "../../components/GoodLayout/GoodItem";
import GoodItemAdder from "../../components/GoodLayout/GoodItemAdder";
import ShopBio from "../../components/ShopBio";
import SocialLink from "../../components/SocialLink";
import { SocialLinkEnum } from "../../utils/constants";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "../../utils";
import { useHasMounted } from "../../components/hooks/useHasMount";

//https://codesandbox.io/s/k260nyxq9v?file=/index.js:1697-1785
const dump = [
  {
    id: 1,
    name: "Ghế công thái học",
    goods: [
      {
        img: "https://w.ladicdn.com/s450x450/5ff2f9fb8a2a3d0043bacfd5/item_21_easychair_black-20220717032443.png",
        name: "Easy chair",
        url: "1",
      },
      {
        img: "https://cf.shopee.vn/file/a9864da17501ba030d5e7a8050ea1b22_tn",
        name: "Dep van phong",
        url: "2",
      },
      {
        img: "https://w.ladicdn.com/s450x450/5ff2f9fb8a2a3d0043bacfd5/item_21_easychair_black-20220717032443.png",
        name: "Easy chair",
        url: "3",
      },
    ],
  },
];
const ShopCreator: NextPage = () => {
  const [goodsList, setGoodsList] = useState(dump);
  const isMounted = useHasMounted();

  const onDragEnd = (result: any, cateIndex: number) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(
      goodsList[cateIndex]?.goods,
      result.source.index,
      result.destination.index
    );
    const newList = [...goodsList];
    newList[cateIndex] = { ...newList[cateIndex], goods: items };
    setGoodsList(newList);
  };

  return (
    <div className="min-h-screen max-w-lg mx-auto bg-zinc-50">
      <Head>
        <title>Shop Creator</title>
      </Head>
      <ShopBio />
      <div className="p-5 text-center flex justify-center -mt-12">
        <SocialLink type={SocialLinkEnum.facebook} url="" />
        <SocialLink type={SocialLinkEnum.instagram} url="" />
        <SocialLink type={SocialLinkEnum.youtube} url="" />
        <SocialLink type={SocialLinkEnum.telegram} url="" />
        <SocialLink type={SocialLinkEnum.zalo} url="" />
      </div>
      {isMounted && (
        <div className="p-4">
          {goodsList?.map((category, cateIndex) => (
            <DragDropContext
              key={category.id}
              onDragEnd={(result) => onDragEnd(result, cateIndex)}
            >
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    key={category.id}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <GoodCategoryLayout title={category?.name} perRowNumber={2}>
                      {category.goods?.map((good, index) => (
                        <Draggable
                          key={good.url}
                          draggableId={good.url}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <GoodItem
                                img={good.img}
                                name={good.name}
                                url={good.url}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                      <GoodItemAdder />
                    </GoodCategoryLayout>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopCreator;
