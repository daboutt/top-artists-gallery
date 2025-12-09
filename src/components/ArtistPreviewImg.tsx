import type { ArtistPreview } from '../lib/types';
import { motion } from 'framer-motion';
import './ArtistPreviewImg.css';

interface ArtistPreviewImgProps {
  item: ArtistPreview;
  mousePosition: { x: number; y: number };
}
export default function ArtistPreviewImg({
  item,
  mousePosition,
}: ArtistPreviewImgProps) {
  return (
    <motion.div
      className='preview-img'
      initial={{
        scale: 0,
        opacity: 0,
        x: item.offsetX,
        y: item.offsetY,
        rotate: -8,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        x: item.offsetX + mousePosition.x / 2,
        y: item.offsetY + mousePosition.y,
        rotate: -10,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 10,
        mass: 0.6,
      }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <img src={item.src} alt='img' className='preview-image' />
    </motion.div>
  );
}
