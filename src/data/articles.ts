import confetti from '$assets/image-confetti.jpg';
import currency from '$assets/image-currency.jpg';
import plane from '$assets/image-plane.jpg';
import restaurant from '$assets/image-restaurant.jpg';

export const ARTICLES = [
  {
    author: 'Claire Robinson',
    image: {
      src: currency,
      alt: 'Bills from different currencies',
    },
    text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...',
    title: 'Receive money in any currency with no fees',
    slug: '#',
  },
  {
    author: 'Wilson Hutton',
    image: {
      src: restaurant,
      alt: 'A plate being served in a gourmet restaurant',
    },
    text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...',
    title: 'Treat yourself without worrying about money',
    slug: '#',
  },
  {
    author: 'Wilson Hutton',
    image: {
      src: plane,
      alt: 'The wing of a flying airplane',
    },
    text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you...',
    title: 'Take your Easybank card wherever you go',
    slug: '#',
  },
  {
    author: 'Claire Robinson',
    image: {
      src: confetti,
      alt: 'Confetties exploding on a blue background',
    },
    text: ' After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...',
    title: 'Our invite-only Beta accounts are now live!',
    slug: '#',
  },
];
