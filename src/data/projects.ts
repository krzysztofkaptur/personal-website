type Project = {
  company: string
  project: string
  category: string
  description: string
  image: string
  url: string
  path: string
  role: string
  techStack: string[]
}

type Projects = {
  [key: string]: Project
}

export const projects: Projects = {
  standby: {
    company: 'Develocraft',
    project: 'Standby',
    category: 'Finances',
    description: '',
    image: '/images/standby/main.jpg',
    path: 'standby',
    url: 'https://app.standby.io/',
    role: 'Front-end developer',
    techStack: [
      'HTML',
      'CSS',
      'NextJS',
      'styled-components',
      'Jest',
      'Testing library',
      'Playwright',
    ],
  },
  develocraft: {
    company: 'Develocraft',
    project: 'Develocraft',
    category: 'Software house',
    description: '',
    image: '/images/develocraft/main.jpg',
    path: 'develocraft',
    url: 'https://develocraft.com/',
    role: 'Front-end developer',
    techStack: ['HTML', 'CSS', 'NextJS', 'Strapi', 'GraphQL'],
  },
  pokato: {
    company: 'Fallwork',
    project: 'Pokato',
    category: 'Advertising service',
    description: '',
    image: '/images/pokato/main.png',
    path: 'pokato',
    url: 'https://pokato.pl/',
    role: 'Front-end developer',
    techStack: [
      'HTML',
      'CSS',
      'Nuxt',
      'Jest',
      'Vue testing library',
      'Cypress',
    ],
  },
  sunday: {
    company: 'Sunday natural',
    project: 'Sunday natural',
    category: 'E-Commerce',
    description: '',
    image: '/images/sunday/main.jpg',
    path: 'sunday',
    url: 'https://www.sunday.de/',
    role: 'Front-end developer',
    techStack: ['HTML', 'CSS', 'Javascript', 'Typescript', 'Magento'],
  },
  'stx-next-product-design': {
    company: 'STX Next',
    project: 'STX Next',
    category: 'Product design',
    description: '',
    image: '/images/stx-next/main.jpg',
    path: 'stx-next-product-design',
    url: 'https://design.stxnext.com/',
    role: 'Front-end developer',
    techStack: ['HTML', 'CSS', 'Javascript'],
  },
  kwejk: {
    company: 'Cube Investments sp. z o.o.',
    project: 'Kwejk',
    category: 'Social media',
    description: '',
    image: '/images/kwejk/main.jpg',
    path: 'kwejk',
    url: 'https://kwejk.pl/',
    role: 'Front-end developer',
    techStack: ['HTML', 'CSS', 'Vue'],
  },
  // todo: change image
  jbzd: {
    company: 'Cube Investments sp. z o.o.',
    project: 'JBZD',
    category: 'Social media',
    description: '',
    image: '/images/jbzd/main.jpg',
    path: 'jbzd',
    url: 'https://jbzd.com.pl/',
    role: 'Front-end developer',
    techStack: ['HTML', 'CSS'],
  },
  'efirst-asia': {
    company: 'EFirst Asia',
    project: 'EFirst Asia',
    category: 'Sales',
    description:
      'Home page of a company EFrist Asia which helps to grow Asia e-commerce market.',
    image: '/images/efirst-asia/main.jpg',
    path: 'efirst-asia',
    url: 'https://efirst.asia/',
    role: 'Front-end developer',
    techStack: ['HTML', 'CSS', 'Javascript', 'jQuery'],
  },
}
