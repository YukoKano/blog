import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PostBody } from "@/components/PostBody";
import eyecatch from "/public/images/about.jpg";

import {
  TwoColumns,
  TwoColumnsMain,
  TwoColumnsSidebar,
} from "@/components/TwoColumns";
import { ImageComponent } from "@/components/ImageComponent";
import { Accordion } from "@/components/Accordion";

export const metadata = {
  title: "About",
  description: "About page",
  openGraph: {
    // images: "/images/about.jpg",
  },
};

const About = () => {
  return (
    <Container>
      <Hero title="about" subtitle="about development activities" />
      <ImageComponent
        imagePath={eyecatch}
        imageWidth="1280"
        imageHeight="853"
        sizes={"(min-width: 1152px) 1152px, 100vw"}
        isPriority
      />
      <TwoColumns>
        <TwoColumnsMain>
          <PostBody>
            <p>
              木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。
            </p>
            <p>一筋の街道はこの深い森林地帯を貫いてい</p>
            <h2>日本国民は、正当に選挙された国会に</h2>
            <p>恥の多い生涯を送って来ました。</p>
            <p>
              自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。
            </p>
            <p>自分は停車場のブリッジを</p>
            <h3>われらとわれらの子孫のために</h3>
            <p>禅智内供の鼻と云えば、池の尾で知らない者はない。</p>
            <p>長さは五六寸あって上唇の上から顋の下まで下っている。</p>
            <p>
              形は元も先も同じように太い。云わば細長い腸詰めのような物が、ぶらりと顔のまん中からぶら下っている
            </p>

            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                形は元も先も同じように太い。云わば細長い腸詰めのような物が、ぶらりと顔のまん中からぶら下っている
              </p>
            </Accordion>
            <Accordion heading="プログラミングのポイントについて2">
              <p>
                形は元も先も同じように太い。云わば細長い腸詰めのような物が、ぶらりと顔のまん中からぶら下っている
              </p>
            </Accordion>
            <Accordion heading="プログラミングのポイントについて3">
              <p>
                形は元も先も同じように太い。云わば細長い腸詰めのような物が、ぶらりと顔のまん中からぶら下っている
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnsMain>
        <TwoColumnsSidebar>
          <Contact />
        </TwoColumnsSidebar>
      </TwoColumns>
    </Container>
  );
};

export default About;
