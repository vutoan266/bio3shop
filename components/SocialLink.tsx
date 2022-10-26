import { FC, useMemo } from "react";
import { SocialLinkEnum } from "../utils/constants";

interface Props {
  type: SocialLinkEnum;
  url: string;
}

const SocialLink: FC<Props> = ({ type, url }) => {
  const socialImg = useMemo(() => {
    switch (type) {
      case SocialLinkEnum.facebook:
        return "https://w.ladicdn.com/s400x400/5ff2f9fb8a2a3d0043bacfd5/bio_icon_facebook-20220621093759.png";
      case SocialLinkEnum.instagram:
        return "https://w.ladicdn.com/s400x400/5ff2f9fb8a2a3d0043bacfd5/bio_icon_instagram-20220621093759.png";
      case SocialLinkEnum.zalo:
        return "https://w.ladicdn.com/s400x400/5ff2f9fb8a2a3d0043bacfd5/bio_icon_zalo-20220621093759.png";
      case SocialLinkEnum.telegram:
        return "https://w.ladicdn.com/s400x400/5ff2f9fb8a2a3d0043bacfd5/bio_icon_telegram-20220621093759.png";
      case SocialLinkEnum.youtube:
        return "https://w.ladicdn.com/s400x400/5ff2f9fb8a2a3d0043bacfd5/bio_icon_youtube-20220621093759.png";
      case SocialLinkEnum.link:
        return "https://w.ladicdn.com/s400x400/5ff2f9fb8a2a3d0043bacfd5/bio_icon_chrome-20220621093759.png";
      case SocialLinkEnum.tiktok:
        return "https://w.ladicdn.com/s400x400/5ff2f9fb8a2a3d0043bacfd5/bio_icon_tiktok-20220621093759.png";
    }
  }, [type]);
  return (
    <a
      href={url}
      target="_blank"
      className="h-12 w-12 mx-2"
      style={{ filter: "drop-shadow(rgb(208, 208, 208) 2px 2px 3px)" }}
    >
      <div
        className="h-12 w-12 bg-cover"
        style={{ backgroundImage: `url(${socialImg})` }}
      />
    </a>
  );
};

export default SocialLink;
