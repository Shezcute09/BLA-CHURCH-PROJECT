import { AudioTeachings } from "../components/AudioTeachings/AudioTeachings";
import { BLA_Logo } from "../components/BLA_Logo";
import { Header } from "../components/Header";
import { ImageSlider } from "../components/ImageSlider/ImageSlider";
import { MediaInformation } from "../components/MediaInformation/MediaInformation";

export function HomeContainer() {
  return (
    <>
      <Header />
      <BLA_Logo />
      <ImageSlider />
      <AudioTeachings />
      <MediaInformation />
    </>
  );
}
