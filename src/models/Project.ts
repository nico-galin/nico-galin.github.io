interface Project {
  title: string;
  type: string;
  subtitle: string;
  description: string;
  description_short?: string;
  imageUrl: string;
  externalSiteName: string;
  externalUrl: string;
  categories: { [key: string]: string[] };
  timestamp?: string;
}

export default Project;
