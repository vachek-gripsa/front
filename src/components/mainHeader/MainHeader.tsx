// import NavBar from '../navBar/NavBar';

import ResponsiveNav from "../navBar/Responsive";


export default function MainHeader() {
  return (
    <>
      <header className="bg-[#141f2c] w-auto h-26">
        {/* <NavBar /> */}
        <ResponsiveNav />
      </header>
    </>
  );
}
