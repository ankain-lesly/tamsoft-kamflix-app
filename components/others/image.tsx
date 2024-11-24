import { StaticImageData } from "next/image";
import ImageTag from "next/image";

interface Props extends CustomComponentProps {
  src: StaticImageData;
  alt?: string;
}

export const Image = (props: Props) => {
  return (
    <div
      className={`bg-primary h-full w-full rounded-lg overflow-hidden ${props.className}`}>
      <ImageTag
        alt="kamflix art"
        src={props.src}
        className="min-h-[200px] w-full h-full object-cover"
      />
    </div>
  );
};
