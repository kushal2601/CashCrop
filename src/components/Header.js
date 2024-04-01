import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Image from 'next/image';
import logo from '../images/logo.png';

const Logo = () => {
    return (
        <Image
      src={logo}
      width={50}
      height={50}
      alt="Picture of the author"
    />
    )
};

const BrandName = () => {};

const Avatar = () => {
  return <AccountCircleSharpIcon fontSize="large" />;
};

const Header = () => {
  return (
    <>
      <Logo />
      <BrandName />
      <Avatar />
    </>
  );
};

export default Header;
