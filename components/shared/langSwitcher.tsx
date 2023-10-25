import { useRouter } from 'next/router';
import transConfig from '~/translation.json';
const { languages } = transConfig;

import Link from 'next/link';
import classNames from 'classnames';
interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
   className?: string;
   text: string | React.ReactNode;
}

const LangSwitcher: React.FC<NavLinkProps> = ({ text, href, ...rest }) => {
   const router = useRouter();
   const regex = new RegExp(`^/(${Object.keys(languages).join('|')})`);
   const hrefAs = `${router.asPath.replace(regex, `${href}`)}`;
   const pathname = router.pathname;

   const linkHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      router.push(pathname, hrefAs);
   };

   return (
      <Link href={pathname} as={hrefAs}>
         <a
            {...rest}
            onClick={linkHandler}
            className={classNames(
               'inline-block items-center rounded-md px-[10px] py-1 font-semibold text-white transition-colors duration-150  rtl:justify-end',
               'focus:border-white focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50 ',
               'min-w-[80px] border-2 border-white  text-center'
            )}>
            <div className="font-main rtl:order-0">{text}</div>
         </a>
      </Link>
   );
};

export default LangSwitcher;
