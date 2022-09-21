import SvgAwards from "../../icons/SvgAwards";
import SvgExperience from "../../icons/SvgExperience";
import SvgPatients from "../../icons/SvgPatients";
import SvgRating from "../../icons/SvgRating";
import rating1 from "../../image/rating1.png";
import rating2 from "../../image/rating2.png";
import rating3 from "../../image/rating3.png";
import rating4 from "../../image/rating4.png";

export const doctorRatingData = [
  {
    icon: () => <SvgRating />,
    name: "Rating",
    value: "4.7",
  },
  {
    icon: () => <SvgExperience />,
    name: "Years Exp",
    value: "4+",
  },
  {
    icon: () => <SvgPatients />,
    name: "Patients",
    value: "5K+",
  },
  {
    icon: () => <SvgAwards />,
    name: "Awards",
    value: "15+",
  },
];

export const ratingData = [
  {
    icon: rating1,
    name: "Ratings On RealSelf By Our 5768 Patients.",
    value: "8 Out of 10",
  },
  {
    icon: rating2,
    name: "Ratings On RealMDs By Our 6587 Patients.",
    value: "4.4 Out of 5",
  },
  {
    icon: rating3,
    name: "Ratings On RealSelf By Our 5768 Patients.",
    value: "8.5 Out of 10",
  },
  {
    icon: rating4,
    name: "Ratings On RealSelf By Our 5768 Patients.",
    value: "4 Out of 5",
  },
];
