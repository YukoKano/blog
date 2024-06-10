import Image from "next/image";
import parse from "html-react-parser";

export const ConvertBody = ({ contentHtml }) => {
  const ConvertedReactElement = parse(contentHtml, {
    replace: (node) => {
      if (node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            style={{ width: "100%", height: "auto" }}
          />
        );
      }
    },
  });
  return <>{ConvertedReactElement}</>;
};
