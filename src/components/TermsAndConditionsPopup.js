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

const TermsAndConditionsPopup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAccept = () => {
    console.log("Terms and Conditions Accepted");
    setOpen(false);
  };

  return (
    <>
      <Typography
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          color: "inherit",
          fontSize:"14px",
          "&:hover": { color: "gray" },
        }}
      >
        Terms & Conditions
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
              Terms & Conditions
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
              Welcome to <strong>Sethi Estate Agency</strong>. These Terms &
              Conditions govern your use of our website and services. By
              accessing or using our website and services, you agree to comply
              with and be bound by these terms. If you do not agree with any
              part of these terms, you should discontinue use immediately.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Company Information
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              <strong>Name:</strong> Sethi Estate Agency <br />
              <strong>Address:</strong> D-77, Sector 85, Faridabad, Haryana,
              121002 <br />
              <strong>Contact Number:</strong>{" "}
              <Link href="tel:+919990624500" underline="hover">
                +91-9990624500
              </Link>
              <br />
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:contactus@sethiestateagency.in"
                underline="hover"
              >
                contactus@sethiestateagency.in
              </Link>
              <br />
              <strong>Services Offered:</strong> Residential, Commercial &
              Industrial Property Transactions, Buying, Selling, and Consulting.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              User Responsibilities
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              By using our services, you agree to:
              <ul>
                <li>
                  Provide accurate and complete information when engaging with
                  our services.
                </li>
                <li>Use the website and services only for lawful purposes.</li>
                <li>
                  Maintain the confidentiality of any personal account
                  information.
                </li>
                <li>
                  Abide by all applicable local, state, and national laws
                  regarding property transactions.
                </li>
              </ul>
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Services and Transactions
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              <ol>
                <li>
                  Sethi Estate Agency serves as a facilitator between buyers and
                  sellers for real estate transactions.
                </li>
                <li>
                  We do not guarantee the availability, price, or condition of
                  any listed property.
                </li>
                <li>
                  All property-related agreements, including sale deeds and
                  contracts, are directly between the buyer and seller, and
                  Sethi Estate Agency holds no liability for disputes arising
                  from such agreements.
                </li>
              </ol>
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Payment Terms
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              <ol>
                <li>
                  Our commission structure and service fees will be communicated
                  to clients on a case-by-case basis.
                </li>
                <li>
                  All payments must be made as per the agreed terms and
                  conditions for specific services.
                </li>
                <li>
                  Payments once made are non-refundable, unless otherwise stated
                  in a written agreement.
                </li>
              </ol>
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Confidentiality
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              We respect your privacy and are committed to protecting your
              personal and financial information. Any information shared with us
              during property transactions will be kept confidential, except
              where disclosure is required by law.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Intellectual Property
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              All website content, including but not limited to text, images,
              logos, and graphics, is the property of Sethi Estate Agency and is
              protected under applicable copyright laws. Users may not
              reproduce, distribute, or use any content from our website for
              commercial purposes without written consent.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Limitations of Liability
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              <ol>
                <li>
                  Sethi Estate Agency acts as an intermediary and does not
                  assume responsibility for any issues arising between buyers
                  and sellers.
                </li>
                <li>
                  We are not liable for any direct, indirect, incidental,
                  consequential, or punitive damages resulting from the use of
                  our services.
                </li>
                <li>
                  Users acknowledge that property transactions inherently
                  involve financial risks, and Sethi Estate Agency does not
                  guarantee any financial returns or investment success.
                </li>
              </ol>
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Termination of Services
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              We reserve the right to terminate or suspend access to our
              services without prior notice if we determine any violation of
              these terms. Any fraudulent, illegal, or unethical behavior will
              result in immediate termination of services and possible legal
              action.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Governing Law & Dispute Resolution
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              These Terms & Conditions are governed by the laws of India. Any
              disputes arising from the use of our services shall be subject to
              the exclusive jurisdiction of the courts of Faridabad, Haryana.
              Disputes, if any, shall be resolved through arbitration before
              resorting to litigation.
            </Typography>

            <Typography
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
              color="rgba(47, 29, 25, 1)"
            >
              Changes to Terms & Conditions
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              We reserve the right to modify these terms at any time without
              prior notice. Any changes will be effective immediately upon
              posting on our website. It is your responsibility to review these
              terms periodically.
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
              These terms and conditions are effective as of{" "}
              <strong>1st January 2025</strong>.
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              color="rgba(47, 29, 25, 1)"
            >
              By using our website and services, you acknowledge that you have
              read, understood, and agree to abide by these Terms & Conditions.
              For any queries or concerns, feel free to contact us at{" "}
              <Link
                href="mailto:contactus@sethiestateagency.in"
                underline="hover"
              >
                contactus@sethiestateagency.in
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

export default TermsAndConditionsPopup;
