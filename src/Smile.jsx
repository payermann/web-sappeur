import start from "./assets/start.svg";
import fail from "./assets/fail.svg";
import win from "./assets/win.svg";

function Smile({ status }) {
  function getImg() {
    switch (status) {
      case "in process":
        return start;
      case "fail":
        return fail;
      case "win":
        return win;
    }
  }

  return <img src={getImg()} className="smile" alt="smile" />;
}
export default Smile;
