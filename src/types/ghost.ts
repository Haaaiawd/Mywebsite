export interface Post {
  id: string;
  slug: string;
  title?: string;
  feature_image?: string;
  published_at?: string;
  excerpt?: string;
  tags?: Array<{
    name: string;
    slug: string;
  }>;
  authors?: Array<{
    name: string;
    profile_image?: string;
  }>;
  html?: string;
}
