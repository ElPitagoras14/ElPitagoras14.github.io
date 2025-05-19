interface Job {
  logo: string;
  img: string;
}

const jobsList: Job[] = [
  {
    logo: "telconet",
    img: "/jobs/telconet.jpeg",
  },
  {
    logo: "siemav",
    img: "/jobs/siemav.png",
  },
  {
    logo: "espol",
    img: "/jobs/espol.png",
  },
  {
    logo: "shippify",
    img: "/jobs/shippify.jpg",
  },
  {
    logo: "datil",
    img: "/jobs/datil.jpg",
  },
];


export const jobsMap = jobsList.reduce((acc, jobInfo) => {
  const { logo } = jobInfo;
  acc[logo] = jobInfo;
  return acc;
}, {} as Record<string, Job>);