export type ProjectArrayProps = {
      name: string;
      type?: string;
      image: string;
      technologies?: string[];
      url: string;
      github: string;
      description: string;
};

export type ProjectCardButtonProps = {
      path: string;
      imgURL: string;
      alternative: string;
}

export type ProjectCardProps = {
      path: string;
      name: string;
      description: string;
}