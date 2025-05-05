import { NextPage } from "next";
import internal from "stream";
import { useEffect, useState } from "react";
 
export const IndexPage: NextPage = () => {
  // ❶ useStateを使って状態を定義する
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  // ❷ マウント時に画像を読み込む宣言
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url); // 画像URLの状態を更新する
      setLoading(false); // ローディング状態を更新する
    });
  }, []);
  // ❸ ローディング中でなければ、画像を表示する
  return <div>{loading || <img src={imageUrl} />}</div>;
};

export default IndexPage;

type Image = {
  id: string,
  url: string,
  width: number,
  height: number
}

const fetchImage = async ():Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  if (!Array.isArray(images)) {
    throw new Error("猫の画像が取得できませんでした");
  }
  if (isValidImage(images[0])){
    throw new Error("validation error");
  }
  return images[0];
};

function isValidImage(image:Image):boolean{
  if(image.id == "" || image.url == ""){
    return false;
  }
  
  if(image.width == 0 || image.height == 0 ){
    return false;
  }
  true;
}