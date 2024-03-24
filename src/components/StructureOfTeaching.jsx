import { Link } from "react-router-dom";

export function StructureOfTeaching({ source, link }) {
  return (
    <>
      <div>
        <Link to={link}>
          <img src={source} />
        </Link>
      </div>
    </>
  );
}
