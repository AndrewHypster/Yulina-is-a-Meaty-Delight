import Image from "next/image";

const CardProduct = ({ id, img, kind, name, cost }) => {
  return (
    <div className="w-64 mb-[12px] border border-my-black hover:shadow-[12px_12px_#413636]">
      <Image src={img} alt="" className="w-64" width="256" height="256" />
      <div className="mt-[-30px] mx-5 text-center select-none">
        <p className="text-my-gray font-medium text-2xl font-marck-script">
          {kind}
        </p>
        <h3 className="text-my-black font-ubuntu font-bold text-2xl text-left">
          {name}
        </h3>
        <div className="mt-1 mb-7 flex justify-between">
          <p className="text-my-black text-2xl font-pt-sans-narrow">
            {cost}грн/кг
          </p>
          <a href={"/shop/" + id}>
            <button className="w-28 h-9 border border-my-green hover:border-dark-red rounded-full shadow-[2px_4px_my-green] hover:shadow-dark-red font-ubuntu text-xl font-medium text-my-green hover:text-dark-red">
              Купити
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const LoadingCards = ({ many = 1 }) => {
  return (
    <>
      {new Array(many).fill(0).map((e, key) => (
        <div
          className="w-64 mb-[12px] border border-my-black hover:shadow-[12px_12px_#413636]"
          key={key}
        >
          <div className="w-64 h-64 content-center">
            <div className="w-fit mx-auto">
              <LoadingCircles size={32} />
            </div>
          </div>
          <div className="mt-[-30px] mx-5 text-center select-none">
            <div className="w-fit mx-auto mb-6">
              <LoadingCircles size={16} />
            </div>
            <LoadingCircles size={20} />
            <div className="mt-1 mb-7 flex justify-between">
              <p className="text-my-black text-2xl font-pt-sans-narrow">
                --- грн/кг
              </p>
              <a>
                <button className="w-28 h-9 border border-my-green hover:border-dark-red rounded-full shadow-[2px_4px_my-green] hover:shadow-dark-red font-ubuntu text-xl font-medium text-my-green hover:text-dark-red">
                  Loading
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

function LoadingCircles({ size = 10 }) {
  return (
    <ul
      className="flex w-fit"
      style={{ gap: `${Math.round((size * 50) / 100)}px` }}
    >
      <style jsx>
        {`
          .loading-circle {
            animation: loadCircle 1s infinite linear;
          }
          .loading-circle:nth-child(1) {
            animation-delay: 0s;
          }
          .loading-circle:nth-child(2) {
            animation-delay: 0.2s;
          }
          .loading-circle:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes loadCircle {
            0% {
              background: rgba(139, 0, 0, 0.5);
              transform: translateY(0);
            }
            25% {
              background: rgba(139, 0, 0);
              transform: translateY(-${Math.round((1 * 100) / size)}px);
            }
            75% {
              transform: translateY(${Math.round((1 * 100) / size)}px);
            }
            100% {
              background: rgba(139, 0, 0, 0);
              transform: translateY(0);
            }
          }
        `}
      </style>
      {[1, 2, 3].map((i) => (
        <li
          className="loading-circle rounded-full"
          style={{ width: `${size}px`, height: `${size}px` }}
          key={i}
        />
      ))}
    </ul>
  );
}

export { CardProduct, LoadingCards };
