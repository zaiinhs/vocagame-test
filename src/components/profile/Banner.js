const Banner = () => {
  return (
    <div className="profile-banner text-white flex flex-col items-center justify-center gap-2 py-6 rounded-md">
      <h1 className="font-bold text-3xl">VocaGame</h1>
      <div className="w-[300px] md:w-[950px]">
        <p className="text-xs md:text-sm text-center inline-block">
          VocaGame merupakan salah satu situs top up dan pembelian voucher game
          di Indonesia yang perkembangannya terhitung cepat dan memiliki tujan
          untuk memudahkan setiap masyarakat di Indonesia, agar dapat memenuhi
          aneka kebutuhan top up dan pembelian voucher game secara online.
          Selain kamu dapat menikmati proses pembelian aneka produk top up dan
          voucher game yang mudah dan efisien
        </p>
      </div>
    </div>
  );
};

export default Banner;
