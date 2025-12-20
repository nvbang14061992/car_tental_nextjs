async function CarInfo({ params }) {
  const { carid } = await params;
  return (
    <div>
      <h1>Car Information</h1>
      <h2>Car Id: {carid}</h2>
    </div>
  );
}

export default CarInfo;
