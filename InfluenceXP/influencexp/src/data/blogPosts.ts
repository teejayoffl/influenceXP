export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  authorName: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  color: string;
  imageUrl: string;
  imageAlt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Psychology of Consistent Social Media Posting",
    slug: "psychology-of-consistent-posting",
    excerpt: "Explore the psychological mechanisms behind consistent posting and how it creates powerful cognitive and behavioral patterns for both creators and their audience.",
    authorName: "Teejay S",
    authorRole: "Psychology & Content Strategy",
    date: "March 12, 2025",
    readTime: "6 min read",
    category: "Psychology",
    color: "purple",
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Person consistently posting on social media with a brain visualization showing psychological patterns"
  },
  {
    id: "2",
    title: "How Gamification Can Transform Your LinkedIn Strategy",
    slug: "gamification-linkedin-strategy",
    excerpt: "Learn how applying game mechanics to your LinkedIn activities can dramatically increase engagement, motivation, and results.",
    authorName: "Teejay S",
    authorRole: "LinkedIn Optimization",
    date: "March 20, 2025",
    readTime: "7 min read",
    category: "Strategy",
    color: "green",
    imageUrl: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "LinkedIn profile with gamification elements like progress bars, badges, and achievement indicators"
  },
  {
    id: "3",
    title: "Building an Authentic Personal Brand on LinkedIn",
    slug: "personal-branding-linkedin",
    excerpt: "Discover how to craft an authentic personal brand that resonates with both algorithms and humans for maximum professional impact.",
    authorName: "Teejay S",
    authorRole: "Personal Branding Expert",
    date: "March 25, 2025",
    readTime: "8 min read",
    category: "Strategy",
    color: "indigo",
    imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professional showcasing authentic personal brand elements on LinkedIn profile"
  },
  {
    id: "4",
    title: "The Future of LinkedIn Content Creation with AI",
    slug: "future-linkedin-ai",
    excerpt: "Explore how AI is changing LinkedIn content creation and how forward-thinking professionals can leverage these tools effectively.",
    authorName: "Teejay S",
    authorRole: "Digital Marketing Strategist",
    date: "March 20, 2025",
    readTime: "10 min read",
    category: "Technology",
    color: "blue",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "AI assistant helping a professional create engaging LinkedIn content"
  },
  {
    id: "5",
    title: "5 Ways to Improve Your LinkedIn Presence in 2024",
    slug: "improve-linkedin-presence",
    excerpt: "Practical strategies to elevate your LinkedIn presence this year based on platform changes and emerging professional networking trends.",
    authorName: "Teejay S",
    authorRole: "Digital Strategist",
    date: "March 5, 2025",
    readTime: "5 min read",
    category: "Strategy",
    color: "blue",
    imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professional with enhanced LinkedIn profile showing metrics and engagement growth"
  }
];

export default blogPosts; 