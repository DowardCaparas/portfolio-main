export type ProjectArrayProps = {
      name: string;
      type?: string;
      image: string;
      technologies?: string[];
      url: string;
      github: string;
      description: string;
};

export type ProjectCardProps = {
      name: string;
      description: string;
      url: string;
}

export type SocialsProps = {
      name: string;
      url: string;
      iconUrl: string;
}