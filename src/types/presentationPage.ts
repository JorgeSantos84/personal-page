export interface IconItem {
  icon: string;
  message: string;
}

export interface PresentationPage {
  nomePortfolio: string;
  title: string;
  subtitle: string;
  iconsList: IconItem[];
  fullDescription?: string;
}
