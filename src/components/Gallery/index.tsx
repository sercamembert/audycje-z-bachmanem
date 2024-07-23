"use client";
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "@/components/NextJsImage";

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const images = [];
  for (let i = 5; i >= 1; i--) {
    const image =
      require(`../../../public/images/galleryPage/${i}.webp`).default;
    images.push(image);
  }
  return (
    <div>
      <PhotoAlbum
        photos={images}
        layout="columns"
        columns={(containerWidth) => {
          if (containerWidth < 600) return 2;
          if (containerWidth >= 600 && containerWidth < 1024) return 2;
          return 3;
        }}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={NextJsImage}
      />

      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails]}
      />
    </div>
  );
};

export default Gallery;
