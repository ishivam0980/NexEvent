export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // e.g., "2025-11-07"
  time: string; // e.g., "09:00 AM"
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React India Summit 2025",
    slug: "react-india-summit-2025",
    location: "Bengaluru, Karnataka, India",
    date: "2025-11-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "KubeCon + CloudNativeCon India 2026",
    slug: "kubecon-cloudnativecon-india-2026",
    location: "Mumbai, Maharashtra, India",
    date: "2026-03-18",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "AWS Community Day India 2025",
    slug: "aws-community-day-india-2025",
    location: "Hyderabad, Telangana, India",
    date: "2025-12-01",
    time: "08:30 AM",
  },
  {
    image: "/images/event4.png",
    title: "Next.js India Conference 2025",
    slug: "nextjs-india-conference-2025",
    location: "Pune, Maharashtra, India",
    date: "2025-11-12",
    time: "09:30 AM",
  },
  {
    image: "/images/event5.png",
    title: "Google Cloud Summit India 2026",
    slug: "google-cloud-summit-india-2026",
    location: "New Delhi, India",
    date: "2026-04-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event6.png",
    title: "ETHIndia Hackathon 2026",
    slug: "ethindia-hackathon-2026",
    location: "Bengaluru, Karnataka, India",
    date: "2026-07-10",
    time: "10:00 AM",
  }
];

export default events;