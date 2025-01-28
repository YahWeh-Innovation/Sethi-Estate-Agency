import { Box, Typography, Button } from "@mui/material";
import {
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

const HeroContact = () => {
  const phoneNumber = "+91-9990624500";
  const whatsappNumber = "919990624500";
  const email = "contactus@sethiestateagency.in";
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={0}
      sx={{ alignItems: "center" }}
    >
      <Button
        sx={{
          width: "47px",
          height: "45px",
          backgroundColor: "#d9c9af",
          borderRadius: "0px 0px 0px 8px ",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "#c2b09a",
          },
          "&:focus": {
            outline: "none",
          },
        }}
        onClick={handleCallClick}
      >
        <PhoneIcon sx={{ width: "20px", height: "20px", color: "#2F1D19" }} />
      </Button>
      <Button
        sx={{
          width: "47px",
          height: "45px",
          backgroundColor: "#b18c5e",
          borderRadius: "0px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "#a3714d",
          },
          "&:focus": {
            outline: "none",
          },
        }}
        onClick={handleWhatsAppClick}
      >
        <WhatsAppIcon
          sx={{ width: "20px", height: "20px", color: "#2F1D19" }}
        />
      </Button>

      <Button
        sx={{
          height: "45px",
          backgroundColor: "#c3a881",
          borderRadius: "0px 0px 8px 0px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "#a78a60",
          },
          "&:focus": {
            outline: "none",
          },
        }}
        onClick={handleEmailClick}
      >
        <EmailIcon sx={{ height: "20px", color: "#2F1D19" }} />
      </Button>
    </Box>
  );
};

export default HeroContact;
