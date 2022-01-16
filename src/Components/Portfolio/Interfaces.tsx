export interface IProject {
  images: { alt: string; image: string }[];
  description: { title: string; description: string };
  links: { title: string; link: string; icon: React.ReactElement }[];
}
