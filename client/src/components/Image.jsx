import { IKImage } from "imagekitio-react";

function Image({ src, className, w, h, alt }) {
  return (
    <>
      <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        path={src}
        loading="lazy"
        className={className}
        // placeholder loading
        lqip={{ active: true, quality: 20 }}
        width={w}
        height={h}
        alt={alt}
        transformation={[
          {
            width: w,
            height: h,
          },
        ]}
      />
    </>
  );
}

export default Image;
