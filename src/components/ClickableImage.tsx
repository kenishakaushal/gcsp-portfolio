import { useState } from "react";
import { ImagePreview } from "./ImagePreview";

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ClickableImage = ({ src, alt, className }: ClickableImageProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-pointer transition-transform hover:scale-[1.02]`}
        onClick={() => setIsPreviewOpen(true)}
      />
      <ImagePreview
        src={src}
        alt={alt}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
};
