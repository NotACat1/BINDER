import { ReactComponent as BuildingFour } from '@assets/icons/services/BuildingFour.svg';
import { ReactComponent as BuildingOne } from '@assets/icons/services/BuildingOne.svg';
import { ReactComponent as BuildingThree } from '@assets/icons/services/BuildingThree.svg';
import { ReactComponent as BuildingTwo } from '@assets/icons/services/BuildingTwo.svg';

import { ReactComponent as InstagramIcon } from '@assets/icons/socials/instagram.svg';
import { ReactComponent as TelegramIcon } from '@assets/icons/socials/telegram.svg';
import { ReactComponent as WhatsappIcon } from '@assets/icons/socials/whatsapp.svg';

import Project1 from '@assets/projects/1.jpg';
import Project10 from '@assets/projects/10.jpg';
import Project11 from '@assets/projects/11.jpg';
import Project12 from '@assets/projects/12.jpg';
import Project13 from '@assets/projects/13.jpg';
import Project2 from '@assets/projects/2.jpg';
import Project4 from '@assets/projects/4.jpg';
import Project5 from '@assets/projects/5.jpg';
import Project6 from '@assets/projects/6.jpg';
import Project7 from '@assets/projects/7.jpg';
import Project8 from '@assets/projects/8.jpg';

export const SERVICES = [
  {
    icon: BuildingFour,
    title: 'Дизайн и проектирование',
    description:
      'Поможем создать стильный и функциональный дизайн вашего пространства, учитывая все ваши пожелания.',
  },
  {
    icon: BuildingOne,
    title: 'Ремонт квартир и домов',
    description:
      'Выполняем любые виды ремонтных работ – от косметического до капитального ремонта.',
  },
  {
    icon: BuildingThree,
    title: 'Строительство под ключ',
    description:
      'Возводим дома и сооружения с нуля до полного завершения проекта, включая отделку.',
  },
  {
    icon: BuildingTwo,
    title: 'Инженерные работы',
    description:
      'Устанавливаем и обслуживаем системы отопления, водоснабжения и электропроводки.',
  },
];

export const CONTACTS = {
  phone: '+995 (57) 119-96-78',
  email: '89163313691@mail.ru',
};

export const MESSAGE = encodeURIComponent(
  'Здравствуйте, мне нужна консультация по строительству.',
);

export const SOCIALS_LINKS = [
  {
    name: 'Whatsapp',
    icon: WhatsappIcon,
    link: `https://wa.me/995571199678?text=${MESSAGE}`,
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    link: 'https://instagram.com/binder.remont.batumi/',
    message: 'Здравствуйте, хочу узнать подробнее о ваших проектах.',
  },
  {
    name: 'Telegram',
    icon: TelegramIcon,
    link: 'https://t.me/Mikhailtsev',
    message: 'Здравствуйте, мне нужна консультация по строительству.',
  },
];

export const ANCHORS = [
  { id: 'home', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'about', label: 'О нас' },
  { id: 'projects', label: 'Проекты' },
  { id: 'contact', label: 'Контакты' },
];

export const PROJECTS = {
  title: 'Наши реализованные проекты',
  description:
    'Мы гордимся нашими успешными проектами, которые стали визитной карточкой нашей компании. Каждый проект – это уникальное сочетание качества, профессионализма и творческого подхода. Просмотрите наши работы, чтобы убедиться в высоком уровне наших услуг.',
  images: [
    Project1,
    Project2,
    Project4,
    Project5,
    Project6,
    Project7,
    Project8,
    Project10,
    Project11,
    Project12,
    Project13,
  ],
};
