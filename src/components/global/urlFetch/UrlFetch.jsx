import { useSelector } from "react-redux";

export default function UrlFetch() {
  const interfaceValue = useSelector((state) => state.backend.backendIp);
  // const [myState, setMyState] = useState(null);

  return interfaceValue;
}
