import GridViewIcon from '@mui/icons-material/GridView';
import training from '../../assets/Icons/training.png';
import netcom from '../../assets/Icons/netcom.png';
import vilt from '../../assets/Icons/vilt.png';
import access from '../../assets/Icons/access.png';
import subscription from '../../assets/Icons/subscription.png';
import help from "../../assets/Icons/help.png"
export const getSideBarData = () => {
  return [
    {
      title: "Dashboard",
      icon: <GridViewIcon />,
      to: "/",
    },
    {
      title: "Training classes",
      icon: <img src={training} alt="Training" />,
      subMenu: [
        {
          title: "Beginner Classes",
          icon: null,
          to: "#",
        },
        {
          title: "Intermediate Classes",
          icon: null,
          to: "#",
        },
        {
          title: "Advanced Classes",
          icon: null,
          to: "#",
        },
      ],
    },
    {
      title: "Netcom+ Catalog",
      icon: <img src={netcom} alt="Netcom" />,
      to: "#",
    },
    {
      title: "vILT",
      icon: <img src={vilt} alt="vILT" />,
      to: "#",
    },
    {
      title: "Access your proficiency",
      icon: <img src={access} alt="Access" />,
      to: "#",
    },
    {
      title: "Subscription details",
      icon: <img src={subscription} alt="Subscription" />,
      to: "#",
    },
    {
      title: "Help center",
      icon: <img src={help} alt="Subscription" />,
      to: "#",
    }
  ];
};
