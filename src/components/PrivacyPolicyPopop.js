import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const PrivacyPolicyPopup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAccept = () => {
    console.log("Privacy Policy Accepted");
    setOpen(false);
  };

  return (
    <>
      <Typography
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          color: "inherit",
          fontSize: "14px",
          "&:hover": { color: "gray" },
        }}
      >
        Privacy Policy
      </Typography>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "70%" },
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 24,
            p: 3,
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              fontWeight={"900"}
              id="modal-title"
              variant="h5"
              textAlign={"center"}
              color="rgba(47, 29, 25, 1)"
            >
              Privacy Policy
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Box sx={{ mt: 2 }}>
            <Typography
              variant="body1"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              Sethi Estate Agency is committed to protecting your privacy. This
              privacy policy outlines how we collect, use, disclose, and
              safeguard your personal and business information when you visit
              our website or use our services.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Information We Collect
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              We collect the following types of information:
              <ol>
                <li>
                  <strong>Personal Information:</strong> Name, Email ID, Mobile
                  Number, Address, and Payment Information.
                </li>
                <li>
                  <strong>Business Information:</strong> Specific details
                  related to property dealings, including but not limited to
                  property preferences and transaction history.
                </li>
                <li>
                  <strong>Technical Information:</strong> IP addresses, browser
                  types, and usage data collected through website analytics.
                </li>
              </ol>
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              How We Use Your Information
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              Your information is used for the following purposes:
              <ol>
                <li>To provide and manage our real estate services.</li>
                <li>
                  To facilitate property transactions, including buying,
                  selling, and renting properties.
                </li>
                <li>
                  To communicate with you regarding inquiries, updates, and
                  promotional materials.
                </li>
                <li>
                  To improve our website, services, and customer experience
                  based on user feedback and analytics.
                </li>
                <li>To comply with legal and regulatory obligations.</li>
              </ol>
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Data Sharing and Disclosure
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              We do not sell, rent, or trade your personal information with
              third parties. However, we may disclose your information under the
              following circumstances:
              <ol>
                <li>
                  To trusted third-party service providers who assist in
                  operational processes, under strict confidentiality
                  agreements.
                </li>
                <li>
                  If required by law, legal proceedings, or law enforcement
                  agencies.
                </li>
                <li>
                  To protect the rights, property, and safety of Sethi Estate
                  Agency, our clients, and the public.
                </li>
              </ol>
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              User Rights
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              You have the right to:
              <ol>
                <li>Access and review your personal data.</li>
                <li>
                  Request corrections or updates to inaccurate information.
                </li>
                <li>
                  Request the deletion of your data, subject to legal and
                  business requirements.
                </li>
                <li>Opt-out of marketing communications at any time.</li>
              </ol>
              To exercise these rights, contact us at{" "}
              <Link
                href="mailto:contactus@sethiestateagency.in"
                underline="hover"
              >
                contactus@sethiestateagency.in
              </Link>
              .
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Cookies and Tracking Technologies
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              Our website uses cookies to enhance user experience. These cookies
              collect non-personal data to analyze website performance and
              improve functionality. You may disable cookies in your browser
              settings, but some features of the site may not function properly
              as a result.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Data Security
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              We implement industry-standard security measures, including
              encryption and secure servers, to protect your personal and
              business information from unauthorized access, disclosure, or
              misuse.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Third-Party Links
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. Users should review the privacy policies of any third-party
              websites they visit.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Changes to this Privacy Policy
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              Sethi Estate Agency reserves the right to modify this privacy
              policy at any time. Updates will be posted on our website, and
              continued use of our services implies acceptance of the revised
              policy.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Effective Date
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              This privacy policy is effective as of{" "}
              <strong>1st January 2025</strong>.
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              By using our website and services, you acknowledge that you have
              read, understood, and agree to abide by this Privacy Policy. For
              any queries or concerns, feel free to contact us at{" "}
              <Link
                href="mailto:contactus@sethiestateagency.in"
                underline="hover"
              >
                contactus@sethiestateagency.in
              </Link>{" "}
              or{" "}
              <Link href="tel:+919990624500" underline="hover">
                +91-9990624500
              </Link>
              .
            </Typography>
          </Box>

          {/* Buttons */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mt: 3 }}
          >
            <Button onClick={handleAccept} variant="contained">
              Accept
            </Button>
            <Button onClick={handleClose} variant="outlined">
              Close
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default PrivacyPolicyPopup;
