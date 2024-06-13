// LanguageSwitcher.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const LanguageSwitcher = () => {
  const { locale, locales, asPath } = useRouter();
  return (
    <div className='flex items-center gap-2'>
      {locales.map((loc) => (
        <Link href={asPath} locale={loc} key={loc}>
          <Image
            src={`/images/${loc}.png`}
            alt={loc}
            width={24}
            height={16}
            className={`cursor-pointer ${locale === loc ? 'opacity-100' : 'opacity-50'}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
