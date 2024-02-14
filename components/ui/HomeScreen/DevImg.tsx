import Image from 'next/image';

interface IDevImgProps {
  containerStyles?: string;
  imgSrc: string;
}

const DevImg = ({ containerStyles, imgSrc }: IDevImgProps) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='' />
    </div>
  );
};

export default DevImg;
