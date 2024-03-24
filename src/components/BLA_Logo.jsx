export function BLA_Logo() {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-20 pb-20 self-center">
        <img
          src="/assets/logo.png"
          alt="The Believers' Lifeline Assembly Logo"
          className="mx-auto"
        />

        <div className="mt-10 flex flex-col items-center">
          <h2 className="md:text-4xl text-2xl font-bold  leading-tight">
            {/* change ' to &apos; */}
            BELIEVERS’ LIFELINE
          </h2>
          <h2 className="md:text-4xl text-2xl font-bold ">ASSEMBLY</h2>
        </div>
        <p className="text-xl [light italic] text-center ">
          Equipping the saints to reach the nations.
        </p>
      </div>
    </div>
  );
}
