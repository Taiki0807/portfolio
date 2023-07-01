interface Category {
  id: number;
  name: string;
  color: string;
}

interface Tag {
  id: number;
  name: string;
}

export interface Works {
  id: number;
  category: Category;
  tag: Tag[];
  title: string;
  thumbnail: string;
  description: string;
  githubLink: string;
  siteLink: string;
}
export interface Work {
  id: number;
  category: Category;
  tag: Tag[];
  main_text: string;
  toc_text: string;
  title: string;
  thumbnail: string;
  description: string;
  githubLink: string;
  siteLink: string;
  created_at: string;
  updated_at: string;
}
