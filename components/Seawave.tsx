export default function Seawave() {
  return (
    <div className="w-full h-[5%] absolute bottom-0 left-0">
      <div className="w-[6400px] h-[198px] absolute -top-[100px] bg-ocean animate-wave translate3d-0"></div>
      <div className="w-[6400px] h-[198px] absolute -top-[70px] bg-ocean animate-wave2 opacity-100"></div>
    </div>
  );
}
