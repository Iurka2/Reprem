const Lights = () => {
  return (
    <>
   
      <ambientLight intensity={0.58} />
      <directionalLight
      
        position={[-8, 16, -8]}
        intensity={4}

   
      />
      <pointLight position={[100, 40, 0]} intensity={0.2} />
    </>
  );
};

export default Lights;