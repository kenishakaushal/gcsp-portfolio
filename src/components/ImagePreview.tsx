import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImagePreviewProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImagePreview = ({ src, alt, isOpen, onClose }: ImagePreviewProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-background/80 backdrop-blur-sm p-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};
