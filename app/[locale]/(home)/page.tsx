import { useTranslations } from 'next-intl';
import MainCarousel from './MainCarousel';
import Genre from './Genre';
import BestSeller from './BestSeller';
import NewArrivals from './NewArrivals';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className='mt-14'>
      <MainCarousel />
      <Genre />
      <BestSeller />
      <NewArrivals />
      {/* <h1 className='text-4xl mb-4 font-semibold'>{t('title')}</h1>
      <p>{t('description')}</p> */}
    </div>
  );
}