import ReactLoading from "react-loading";
function Loading() {
  return (
    <>
      <ReactLoading
        type="cubes"
        className=" text-primary mx-auto"
        color="black"
        height={100}
        width={100}
      />
      <h1 className="text-center text-2xl font-bold text-primary">
        Chargement en cours...
      </h1>
    </>
  );
}

export default Loading;
