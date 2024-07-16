import { Fullname } from "./Fullname";
import { Gender } from "./Gender";
import { Phone } from "./Phone";

export function PersonalInfoSection() {
  return (
    <>
      <Fullname />
      <Phone />
      <Gender />
    </>
  );
}
