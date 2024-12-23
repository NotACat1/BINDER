import React, { useState } from 'react';
import Slider from 'react-slick';
import CustomArrow from '@components/CustomArrow';
import Modal from '@components/Modal';

import './ProjectSlider.scss';

interface ProjectSliderProps {
  title: string;
  description: string;
  images: string[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({
  title,
  description,
  images,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    customPaging: (i: number) => (
      <div className="custom-dot">
        <span className="dot-number">{i + 1}</span>
      </div>
    ),
  };

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <section className="container py-5" id="projects">
      <div className="row">
        {/* Project Info */}
        <div className="col-md-5">
          <h2 className="mb-4 text-center text-md-start">{title}</h2>
          <p className="mb-0 text-justify text-md-start">{description}</p>
        </div>
        {/* Image Slider */}
        <div className="col-md-7">
          <Slider {...settings} className="project-slider">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project ${index + 1}`}
                onClick={() => openModal(image)}
                className="project-slider__image"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openModal(image);
                }}
              />
            ))}
          </Slider>
        </div>
      </div>

      {/* Modal for Fullscreen Image */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img
          src={currentImage || ''}
          alt="Fullscreen"
          className="project-slider__image_modal"
        />
      </Modal>
    </section>
  );
};

export default ProjectSlider;
