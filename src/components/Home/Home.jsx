import { AudioTeachings } from "../AudioTeachings/AudioTeachings";
import { BLA_Logo } from "../BLA_Logo/BLA_Logo";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import { MediaInformation } from "../MediaInformation/MediaInformation";
import { Navigation } from "../navigation/Navigation";

export function Home() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <Navigation />
      <BLA_Logo />
      <ImageSlider />
      <AudioTeachings />
      <MediaInformation />
    </div>
  );
}

// h-[600px]
