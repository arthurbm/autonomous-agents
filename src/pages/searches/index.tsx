import { useParams } from "react-router-dom";
import { P5Wrapper } from "../../components/p5-wrapper";
import { SelectedSearch } from "../../utils/types";

export function SearchPage() {
  // get :name from the URL
  const { name } = useParams<{ name: SelectedSearch }>();

  return (
    <div>
      <h1>{name}</h1>

      {name && <P5Wrapper search={name} />}
    </div>
  );
}
