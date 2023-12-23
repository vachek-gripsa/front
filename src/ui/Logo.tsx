export default function Logo() {
  return (
    <div className="w-10">
      <img
        className="mix-blend-color-burn"
        src={process.env.PUBLIC_URL + '/image/logo-vg-192.png'}
        alt="logo"
      />
    </div>
  );
}
