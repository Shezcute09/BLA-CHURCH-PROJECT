import { Link } from "react-router-dom";

export function StructureOfTeaching({ source, link }) {
  return (
    <>
      <div className="">
        <Link to={link} className="">
          <img src={source} className="" />
        </Link>
      </div>
    </>
  );
}
