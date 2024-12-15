import { IKContext, IKUpload } from "imagekitio-react";
import { toast } from "react-toastify";
import { useRef } from "react";

const authenticator = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/auth`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

function Upload({ setProgress, setData, children, type }) {
  const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;
  const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;
  const ikUploadRef = useRef(null);

  const onError = (err) => {
    console.log("Error", err);
    toast.error("Image upload failed");
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    toast.success("Image upload success");
    setData(res);
  };

  const onUploadProgress = (progress) => {
    setProgress(Math.round((progress.loaded / progress.total) * 100));
  };

  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        useUniqueFileName={true}
        style={{ display: "none" }}
        ref={ikUploadRef}
        // example - image/jpg, image/webp
        accept={`${type}/*`}
      />
      <div
        className="cursor-pointer"
        onClick={() => ikUploadRef.current.click()}
      >
        {children}
      </div>
    </IKContext>
  );
}

export default Upload;
