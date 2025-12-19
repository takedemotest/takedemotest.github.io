import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [SlickCarouselModule, CommonModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  partnerInfo = [
    { alt: 'alt1' },
    { alt: 'alt1' },
    { alt: 'alt1' },
    { alt: 'alt1' },
    { alt: 'alt1' },
    { alt: 'alt1' },
    { alt: 'alt1' },
  ];

  features = [
    {
      title: 'SaaS based solution',
      description:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.',
    },
    {
      title: 'Modern & clean design',
      description:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.',
    },
    {
      title: 'Easy to customize',
      description:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.',
    },
    {
      title: 'SaaS based solution',
      description:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.',
    },
    {
      title: 'Modern & clean design',
      description:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.',
    },
    {
      title: 'Easy to customize',
      description:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.',
    },
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 960,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };
}
