import { Outlet } from 'react-router-dom';
import MainHeader from '../components/mainHeader/MainHeader';

export default function RootLayout() {
  return (
    <>
      <MainHeader />

      <div>
        <Outlet />
      </div>
    </>
  );
}
