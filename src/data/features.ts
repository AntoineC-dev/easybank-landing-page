import apiSvg from '$assets/icon-api.svg';
import budgetingSvg from '$assets/icon-budgeting.svg';
import onboardingSvg from '$assets/icon-onboarding.svg';
import onlineSvg from '$assets/icon-online.svg';

export const FEATURES = [
  {
    title: 'Online Banking',
    text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    image: onlineSvg,
  },
  {
    title: 'Simple Budgeting',
    text: 'See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.',
    image: budgetingSvg,
  },
  {
    title: 'Fast Onboarding',
    text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    image: onboardingSvg,
  },
  {
    title: 'Open API',
    text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    image: apiSvg,
  },
];
