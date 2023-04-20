import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0" }}>
        This is an personal project of Chinmay Agarwal and it is not affiliated to NASA or SpaceX.
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
