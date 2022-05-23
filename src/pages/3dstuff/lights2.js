const Lights2 = () => {
  return (
    <>
   
      <ambientLight intensity={0.5} />
      <directionalLight
      
        position={[-50, 70,0]}
        intensity={2}


      />
      <pointLight position={[100, 60, 0]} intensity={1.2} />
    </>
  );
};

export default Lights2;