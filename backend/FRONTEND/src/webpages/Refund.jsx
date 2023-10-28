import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';


function Content({ width, padding, variant }) {
  const commonProps = [{ name: "Home Services", url: "/" }];

  
  return (
    <div>
      <Header commonProps={commonProps} />
      <Box
        sx={{
          textAlign: "start",
          width: width,
          margin: "130px auto",
          padding: padding,
          wordWrap: "break-word",
        }}
      >
        <Typography
          variant={variant}
          sx={{ fontWeight: "600", color: "#1b685f" }}
        >
          Return Exchange & Refund
        </Typography>
        <Box sx={{ color: "#95b2af" }}>
          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Service Terms and Conditions
          </Typography>
          <Typography sx={{ mt: 4, fontSize: "16px", lineHeight: "2.4" }}>
            1.Quote is valid for only 7 days from the date issued.
            <br />
            2.Quote price is inclusive of masking, material, Labor & post work
            cleaning
            <br />
            3.Warranty of the service is for 1 year
            <br />
            4.Vapormop is not responsible for any damage due to seepage or
            waterproofing on walls; warranties shall not be applicable in such
            cases
            <br />
            5.Any defect up to only 1 mm shall be covered by two coats putty.
            <br />
            6.Service Warranty is not applicable on structural cracks and
            undulations.
            <br />
            7.Customers may choose up to 3 colors + White for the entire home.
            Additional color will be charged separately.
            <br />
            8.The actual color might vary from the shade card / app.
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Scope of Work Policies
          </Typography>
          <Typography sx={{ mt: 4, fontSize: "16px", lineHeight: "2.4" }}>
            1.Vapormop Painting Services will only be responsible for the work
            mentioned in the selected quotation.
            <br />
            2.Anything mentioned outside the scope will be charged additionally
            as per actuals.
            <br />
            3.Anything mentioned outside the scope will be charged additionally
            as per actuals.
            <br />
            4.Vapormop painting services and its vendors reserve the right to
            reject any request which is not mentioned in the quotation.
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Payment Policies
          </Typography>
          <Typography sx={{ mt: 4, fontSize: "16px", lineHeight: "2.4" }}>
            1.Please note that customers are expected to make 100% of project
            value upfront payment before the project starts.
            <br />
            2.10% advance payment has to be made to consider the project booked.
            <br />
            3.50% payment has to be made for procurement of materials.
            <br />
            4.Balance payment has to be made on the day of the actual start upon
            the commencement of work when both the material and the painting
            team has arrived.
            <br />
            5.In case of non compliance of payment schedule Vapormop painting
            services holds the right to cancel/hold the project and can forfeit
            the advance payment.
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Project Timelines Policies
          </Typography>
          <Typography sx={{ mt: 4, fontSize: "16px", lineHeight: "2.4" }}>
            1.Finalization of the shades as per the choice has to be done by the
            customer 2 days prior to the start of work and 50% advance should be
            paid for the project to start.
            <br />
            2.Vapormop painting services shall hold the right to reschedule the
            project start date if the required information, from the customer’s
            end, is not provided on time.
            <br />
            3.Vapormop painting services shall hold the right to reschedule the
            project start date if the required information, from the customer’s
            end, is not provided on time.
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Cancellation Policies
          </Typography>
          <Typography sx={{ mt: 4, fontSize: "16px", lineHeight: "2.4" }}>
            1.If the client has made advance payment but then wants to cancel the project because of unavoidable conditions then the refund will be made as per the following:
            <br />
            <li>If the project is cancelled before 48 hrs of the scheduled start date (10AM) – Vapormop painting services will refund 100% of the amount received.</li>
            <li>If the project is cancelled within 48 hrs of the scheduled start date (10AM) – Vapormop painting services will refund 0% of the amount received.</li>
            <br />
            2.If the client has made complete payment but then wants to cancel the project because of unavoidable conditions then the refund will be made as per the following:
            <br />
            <li>If the project is cancelled on Day 1 of the schedule – Vapormop painting services will refund 50% of the amount received and Vapormop painting services assigned service vendor holds the right to pick up the material purchased.</li>
            <li>If the project is cancelled after Day 1 of the schedule – Vapormop painting services will refund 0% of the amount received and the customer holds the right to retain the material for that particular site.</li>
            <br />
            3.Warranty of the service is for 1 yearAll refunds processed to the customer will only be made through online bank transfers and it will take upto 14 business working days to get it processed.
          </Typography>

        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default function Refund() {
  const xlMax = useMediaQuery("(max-width:2000px)");
  const xlMin = useMediaQuery("(min-width:1200px)");
  const mdMax = useMediaQuery("(max-width:1200px)");
  const mdMin = useMediaQuery("(min-width:600px)");
  const sm = useMediaQuery("(max-width:600px)");
  return (
    <>
      {xlMax && xlMin && (
        <Content width={"1170px"} padding={"unset"} variant={"h3"} />
      )}
      {!(xlMax && xlMin) && mdMax && mdMin && (
        <Content width={"unset"} padding={"0px 70px"} variant={"h3"} />
      )}
      {sm && <Content width={"unset"} padding={"0px 20px"} variant={"h5"} />}
    </>
  );
}
