import { BottomBar } from "../../component/BottomBar";
import { CommentBar } from "../../component/CommentBar";
import { ForMe } from "../../component/ForMe";
import { HomeNav } from "../../component/HomeNav";

export const Home = () => (
  <div className="home">
    <HomeNav></HomeNav>
    <CommentBar></CommentBar>
    <ForMe></ForMe>
    <BottomBar></BottomBar>
  </div>
);
