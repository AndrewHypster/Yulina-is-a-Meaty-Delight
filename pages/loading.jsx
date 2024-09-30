
import MyHead from "@/components/myHead";

export default function LoadingPage() {
  return (
    <>
      <MyHead title="Загрузка" />
      <div className="w-screen h-screen content-center justify-center flex-wrap flex">
        <div className="loading-content">
          <style jsx>{`
            .loading-content {
              animation: spin 5s linear infinite;
            }
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
          <h1 className="w-fit h-fit mt-[106px]">Завантаження</h1>
        </div>
      </div>
    </>
  );
}
