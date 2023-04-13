import { Detail } from 'components/block/details-list/DetailsListProps';
import { StaticImageData } from 'next/image';
import Contact from 'public/media/images/contact.jpg';
import Donate from 'public/media/images/donate.jpeg';
import Mission from 'public/media/images/mission.jpeg';
import Purpose from 'public/media/images/purpose.jpeg';
import Vision from 'public/media/images/vision.jpeg';

export type Sections = {
  [dynamicKey: string]: {
    title: string;
    description?: string;
    image: StaticImageData | string;
    imageAlt: string;
    details?: Array<Detail>;
  };
};

const sections: Sections = {
  contact: {
    title: 'contact-us',
    description: 'contact-us-details',
    image: Contact,
    imageAlt: 'contact-image-alt',
    details: [
      {
        title: 'address-title',
        text: 'address',
      },
      {
        title: 'email-title',
        text: 'edplus@edplus.or.cr',
      },
      {
        title: 'phone-title',
        text: '+506 2227 8642',
      },
    ],
  },
  mission: {
    title: 'mission-title',
    description: 'mission-details',
    image: Mission,
    imageAlt: 'mission-image-alt',
  },
  vision: {
    title: 'vision-title',
    description: 'vision-details',
    image: Vision,
    imageAlt: 'vision-image-alt',
  },
  purpose: {
    title: 'purpose-title',
    description: 'purpose-details',
    image: Purpose,
    imageAlt: 'purpose-image-alt',
  },
  donate: {
    title: 'donate-title',
    description: 'donate-details',
    image: Donate,
    imageAlt: 'donate-image-alt',
    details: [
      {
        title: 'promerica-bank-colones',
        text: 'donate-text-one',
      },
      {
        title: 'promerica-bank-dollars',
        text: 'donate-text-two',
      },
      {
        title: 'account-details',
        text: 'donate-text-three',
      },
      {
        title: 'sinpe-mobile',
        text: '+506 8848 6314',
      },
    ],
  },
};

export { sections };
