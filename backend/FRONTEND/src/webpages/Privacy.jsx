import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';


function Content({ width, padding, variant, margin }) {


  const commonProps = [{ name: "Home Services", url: "/" }];

  return (
    <div>
      <Header commonProps={commonProps} />
      <Box
        sx={{
          textAlign: "start",
          width: width,
          margin: margin,
          padding: padding,
          wordWrap: 'break-word'
        }}
      >
        <Typography variant={variant} sx={{ fontWeight: "600", color: "#1b685f" }}>
          Privacy Policy
        </Typography>
        <Box sx={{ color: "#95b2af" }}>
          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop.com is a website owned by CodeFix Enterprise, an entity incorporated Under the Shop and Establishment Act, 1963 registration.
            <br />
            <br />
            Wherever the term “Vapormop” or “Vapormop.com” or “Vapormop Home Services” is used it refers to Vapormop, and its subsidiaries, controlled entities, affiliates and related parties. Vapormop provides the services through www.Vapormop.in (‘Website’ or ‘Site’).
            <br />
            <br />
            At Vapormop, we are highly committed to the privacy of your data and information and in providing excellent service to all of our customers and visitors of the Website. We have prepared this Data Protection and Privacy Policy (“Policy”) to inform you of the privacy principles that govern this Website.
            <br />
            <br />
            Unless restricted by applicable law, you agree that all your personal information collected by Vapormop through the Website may be used and disclosed as set out in this Policy.
          </Typography>\

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            What is covered in this Policy?
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Acceptance of terms:
          </Typography>
          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            You are advised to read this Policy carefully. By accessing the services provided by Vapormop.in/.com you agree to the collection and use of your data by Vapormop.in/com and certain authorized third party service providers in the manner provided in this Policy. The terms and conditions set forth below through the Privacy Policy constitute a legally-binding agreement between Vapormop.com (“Vapormop”), and you.
            <br />
            <br />
            This policy contains provisions that define your limits, legal rights and obligations with respect to your use of and participation on the Platform, including the classified advertisements, forums, various email functions and Internet links, and all content and Vapormop services available on the Platform. The Privacy Policy is applicable to all users of the Platform, including users who have access and/or register on the Platform,
            <br />
            <br />
            and users who are also contributors of content, information, private and public messages, advertisements, and other materials or services on the Platform.
            <br />
            <br />
            If you do not agree with this Policy, please do not use the Website.   </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Privacy – Our Commitment:
          </Typography>
          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            At Vapormop, we are extremely committed to protecting your privacy. We would like you to feel confident about us, use our services freely and recommend our services to your friends and family.

            <br />

            We guarantee that we will not rent and sell your personal information to third parties (except as stated in this Policy) without your consent. In the day to day operations,
            <br />
            <br />
            We guarantee that we will not rent and sell your personal information to third parties (except as stated in this Policy) without your consent. In the day to day operations, </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            What Information is collected from you.
          </Typography>
          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            “Personal information” is defined to include information that may be used to readily identify or contact you such as: name, address, PIN code, email address, phone number, order details, user records etc. that is otherwise not publicly available.
            <br />
            <br />
            When you sign up on the Platform we collect personal information from (i) users who are interested in availing our services, (ii) design partners who offer their design services to Vapormop customers (“Design Partners”), and (iii) service partners offering their services (“Service Partners”).
            <br />
            <br />
            Personal information collected from Design Partners and Service Partners may be partially or completely accessible to users on of the Platform or those availing our services. Personal information from users availing our services is partially or completely available to relevant Design Partner(s), Service Partner(s) and employee(s) of Vapormop on a need to know basis.
            <br />
            <br />
            All information disclosed by you shall be deemed to be disclosed willingly and without any coercion. No liability pertaining to the authenticity/ genuineness/ misrepresentation/ fraud/ negligence, etc. of the information disclosed shall lie on Vapormop nor will Vapormop in any way be responsible to verify any information obtained from you.
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Anonymous Information:
          </Typography>
          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            In addition to the information that you explicitly provide during your interactions on the Site, we will automatically receive and collect certain anonymous information in standard usage logs through our Web server, including computer-identification information obtained from “cookies” sent to your browser from:
            <br />
            <br />
            1.Web server cookie stored on your hard drive.
            <br />
            <br />
            2.An IP address, assigned to the computer which you use
            <br />
            <br />
            3.The domain server through which you access our service.
            <br />
            <br />
            4.The type of computer you’re using.
            <br />
            <br />
            5.The type of web browser you’re using.
            <br />
            <br />
            You may log into our Platform through your Facebook or Google account. If you do so, you must enter the email address and password that you use for your account. We will ask that you grant us permission to access and collect your Facebook basic information (this includes your name, profile picture, gender, networks, user IDs, list of friends, date of birth, email address,<br />
            and any other information you have set to public on your Facebook account).
            <br />
            <br />
            If you allow us to have access to this information, then we will have access to this information even if you have chosen not to make that information public.
            <br />
            <br />
            We store the information that we receive from Facebook with other information that we collect from you or receive about you. Facebook controls the information it collects from you. For information about how Facebook may use and disclose your information, including any information you make public, please consult Facebook’s privacy policy.
            <br />
            <br />
            We have no control over how any third party site uses or discloses the personal information it collects about you.
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Who collects the information?
          </Typography>
          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            We collect personal information about you as part of the registration process, which is voluntary. Other means of collecting personal information is through some contests, online events, surveys etc.
            <br />
            <br />
            We collect anonymous information like traffic information and hardware information when you visit our Site.
            <br />
            <br />
            Our advertisers and partners may collect their own anonymous information through their own cookies for which we are not responsible for.
            <br />
            <br />
            Our advertisers and partners may collect their own anonymous information through their own cookies for which we are not responsible for.
            <br />
            <br />
            It is our policy never to knowingly collect or maintain information about anyone under the age of 18.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Information Usage:
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            We use your personal information to allow it to process your registration, to process any orders that you may make for any products or services displayed on the Website, provide you with improved services, contact you when it is needed by telephone, facsimile and e-mail, and to advise you of products and services which may be of interest to you, inviting you to be a participant or a respondent to an online event that is hosted on Vapormop.com. Further, the relevant information is used by Vapormop to
            <br />
            <br />
            (i) provide you with statements of your account;
            <br />
            <br />
            (ii) to communicate with you on any matter relating to the conduct of your account; and (iii) to communicate the details of any orders / processing of any orders placed by you relating to products displayed on the Website. <br />
            <br />
            Vapormop may also use aggregate information and statistics for the purposes of monitoring website usage in order to help us develop the Website, our products and services and may provide such Aggregate information to third parties on an aggregate basis.
            <br />
            <br />
            These statistics will not include information that can be used to identify any individual customer.
            <br />
            <br />
            Vapormop may organize contests and surveys and the information collected during these events may be used by Vapormop to improve your overall customer experience. The information will only be shared with third parties on an aggregate basis.
            <br />
            <br />
            [For the purposes of this Policy, “Aggregate information” shall mean and include information that is recorded about users and collected into groups so that it no longer reflects or references an individually identifiable user. Such information does not identify you individually.]
            <br />
            <br />
            Personal data collected by the Website may be transferred to other sites of Vapormop where it is necessary to meet the purpose for which you have submitted the information. By submitting data on this Website, you are providing explicit consent to transmission of data collected on the Website.
            <br />
            <br />
            We use anonymous information like traffic and other data to provide us with information to recognize the access privileges to our Site, track your participation in any of the events, providing you with better content and advertisements, help diagnose the problems with our Site and for the purposes detailed in the Policy.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Information from other sources:
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            These may include
            <br />
            <br />
            Feedback including surveys and ratings.
            <br />
            <br />
            Vapormop business partners through which you create or access your Vapormop account, such as payment providers, social media services, or apps or websites who use Vapormop’s APIs or whose API Vapormop uses-
            <br />
            <br />
            1.Financial services providers
            <br />
            <br />
            2.Marketing service providers
            <br />
            <br />
            Vapormop may combine the information collected from these sources with other information in its possession.
            <br />
            <br />
            By choosing to provide any and all of the aforesaid information to Us, you are giving Vapormop permission to use and/or store such information consistent with this Privacy Policy.
            <br />
            <br />
            Further, Vapormop shall be entitled to retain your Personal information for such duration as may be required for the purposes specified hereunder and shall be used us only in accordance with this Privacy Policy.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Information Sharing and Disclosures –
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Personal Information:
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            1.We do not rent, sell or share your personal information to third parties –
            <br />
            <br />
            2.Unless we have permission from you,
            <br />
            <br />
            3.Unless we have to provide products and services that are requested by you,
            <br />
            <br />
            4.Unless we have to help investigate, prevent or take action regarding unlawful and illegal activities, suspected fraud, potential threat to the safety or security of any person or organization or property or asset or rights of the Website from unauthorized use or misuse of the Website, violations of Vapormop.in terms and conditions or to defend against legal claims/proceedings
            <br />
            <br />
            5.Unless upon occurrence of special circumstances detailed hereunder – to respond to subpoenas, court orders, judicial proceedings, or other legal processes;
            <br />
            <br />
            to enforce the terms of the Website User Terms and Conditions or the terms of this Policy;
            <br />
            <br />
            to respond to claims that any photo, text, or other material violates the rights of third parties; or to protect the rights, property, or personal safety of Vapormop, its users, or the general public.We provide certain required personal and contact information to our subsidiaries, affiliated companies or other trusted business partners for the purpose of providing the required service on our behalf. We require that these parties agree to process such information based on our instructions and in compliance with this Policy and any other appropriate confidentiality and security measures.
            <br />
            <br />
            If Vapormop becomes involved in a merger, acquisition, or any form of sale of some or all of its assets, we will inform you through e-mail before personal information is transferred and that may become subject to a different privacy policy.
            <br />
            <br />
            We may share with third party’s certain pieces of Aggregate information.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Information Security:
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data.
            <br />
            <br />
            We restrict access to personal information to Vapormop employees, contractors and agents who need to know that information in order to operate, develop or improve our services. These individuals are bound by confidentiality obligations and may be subject to discipline, including termination and criminal prosecution, if they fail to meet these obligations.
            <br />
            <br />
            Although we endeavour to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using this Site, you agree that we will have no liability for disclosure of your information due to errors in transmission or unauthorized acts of third parties.
            <br />
            <br />
            You further agree that you are solely responsible and liable for, and shall indemnify Vapormop against any and all costs, expenses, damages, fees, etc. that Vapormop may incur or suffer due to any personal information or other materials that you post, upload, submit, and otherwise make available on the Website, including areas of the Website that are available to the public.
            <br />
            <br />
            We have no control over and cannot protect personal information that you disclose in public areas of the Website. If you disclose your personal information in public areas, it may be collected and used by third parties, without our or your knowledge.
            <br />
            <br />
            You should also understand that by displaying your information or photographs on the Website and the internet, for the intention of showing the information / those photographs to your friends, family, acquaintances, clients, business partners, and others, that you directly intended to see the photographs, you are relinquishing certain traditional privacy rights, wherein anyone with access to the internet has the potential ability to view your information / photographs.
            <br />
            <br />
            If you do not wish to relinquish these traditional privacy rights, do not share your information / photographs.
            <br />
            <br />
            While we use industry-standard precautions to safeguard your personal information, we cannot guarantee complete security. 100% complete security does not presently exist anywhere online or offline. In the unlikely event that we believe that the security of your personal information in our possession or control may have been compromised, we may seek to notify you of that development. If a notification is appropriate, we would endeavour to do so as promptly as possible under the circumstances, and, to the extent we have your email address, we may notify you by email.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Communications among users and with Vapormop partners:
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            To offer our services, or to facilitate Vapormop Partners to offer their services, personal information, partially or fully, is made available to users of Vapormop. As an example, when you sign up to receive services from Vapormop, your contact information including phone number and email is shared with a Design Partner and/or Service Partner to offer his/her service for your project. Sometimes, the users are allowed to contact each other for marketing purposes as well.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDEcoration: 'underline'
            }}
          >
            Third party ad networks:
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Third party ad networks display advertisements on other websites based on your visits to the Platform as well as other websites. These ad networks, sponsors, advertisers and traffic measurement services, employ technologies such as cookies, JavaScript, web beacons, and others to capture information governed by their own specific privacy policy(ies).
            <br />
            <br />
            We participate in these networks to enable us and the third parties to display advertisements for products and services that might interest you.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'unerline',
            }}
          >
            Links to external websites:
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Information not controlled by Vapormop –
            <br />
            <br />
            This Platform may contain links to other websites or resources over which Vapormop does not have any control. Such links do not constitute an endorsement by Vapormop of those external websites.
            <br />
            <br />
            You acknowledge that Vapormop is providing these links to you only as a convenience, and further agree that Vapormop is not responsible for the content of such external websites.
            <br />
            <br />
            We are not responsible for the protection and privacy of any information which you provide while visiting such external websites and such sites are not governed by this Policy.
            <br />
            <br />
            Your use of any external website is subject to the terms of use and privacy policy located on the linked to external website.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Customer support:
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop uses information collected about you (including recordings of customer support calls after notice to you and with your consent) to assist you when you contact our customer support services, including to:
            <br />
            <br />
            1.Direct your questions to the appropriate customer support person
            <br />
            <br />
            2.Investigate and address your concerns
            <br />
            <br />
            3.Monitor and improve our customer support response.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Policy Compliance:
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop.com regularly reviews its compliance with this Policy. Please feel free to direct any questions or concerns regarding this Policy or Vapormoplite.com’s treatment of personal information by contacting us through this Website or by e-mailing to us at care@Vapormop.in . When we receive complaints at this address, it is Vapormoplite.com’s policy to contact the complaining user regarding his or her concerns.
            <br />
            <br />
            We will cooperate with the appropriate regulatory authorities to resolve any complaints regarding the transfer of personal data that cannot be resolved between Vapormop.com and an individual.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Legal investigations:
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            We may investigate and disclose information from or about you, as permitted by applicable law, if we believe that such investigation or disclosure is (a) necessary to comply with legal process and law enforcement instructions and orders, such as a search warrant, order, statute, judicial proceeding, or other legal process served on us; (b) helpful to prevent, investigate, or identify possible wrongdoing in connection with the Platform; or (c) helpful to protect our rights, reputation, property, or that of our users, subsidiaries, or the public.
            <br />
            <br />
            In such an event Vapormop shall be under no obligation to inform you or seek your approval or consent.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Grievances:
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            In the event You have any grievances relating to the Privacy Policy, please inform Vapormop within 24 hours of occurrence of the instance from which the grievance has arisen, by writing an email to the Grievance Officer at  <a style={{ textDecoration: 'underline', color: 'pink' }} href="mailto: admin@Vapormop.com">admin@Vapormop.com</a>.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Dispute Resolution:
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Any dispute, controversy or claim directly or indirectly caused by, arising out of or relating to this Policy will be governed by the laws of India and will be referred to confidential, mandatory and binding arbitration in Bengaluru, India. The arbitration will be conducted on an expedited basis before a single arbitrator appointed by Vapormop in accordance with the provisions of the Indian Arbitration and Conciliation Act, 1996. The arbitrator’s award shall be substantiated in writing and will be final and binding on you and Vapormop. Subject to the above, you agree to submit yourself to the exclusive jurisdiction of the Courts in Bengaluru, India.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
              textDecoration: 'underline'
            }}
          >
            Your Choices:
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            By submitting your information, you consent to the use of that information as set out in this Policy. We welcome your views on this Website and the Policy. However, submitting personally identifiable information is entirely voluntary. You are not required to register with us in order to browse our Site. Please note that we offer some services only to visitors who do register.
            <br />
            <br />
            At any point in time, you can correct and make changes to your personal information by accessing your information in My Account section of the Site.
            <br />
            <br />
            You may change your interests at any time and may opt-in or opt-out of any marketing / promotional / newsletters mailings. Vapormop.in reserves the right to send you certain service related communication, considered to be a part of your Vapormop.com account without offering you the facility to opt-out. You may update your information and change your account settings at any time.
            <br />
            <br />
            If we plan to use your personally identifiable information for any commercial purposes, we will notify you at the time we collect that information and allow you to opt-out of having your information used for those purposes.
          </Typography>

          <Typography variant={variant} sx={{ fontWeight: "600", color: "#1b685f", mt: 6 }}>
            Privacy Policy of Partners
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop takes your privacy very seriously. This privacy policy (“Privacy Policy”) is intended to inform you about the information that is collected from you when you visit website and applications owned by Vapormop and operated in India by Vapormop Furnishing Private Limited (the “Platform”); how this information may be used and disclosed; and how your information is protected. Vapormop manages personal data in accordance with the Information and Technology Act, 2000 and rules framed thereunder, from time to time.
            <br />
            <br />
            Vapormoplite.com is the property of Vapormop , having its registered office at NO.1, T.C. PALLYA SONNATHAMMANAHALLI K.R.PURAM Bangalore KA -560036  and is currently managed and operated in India by its affiliate or parent company Vapormop Furnishing Private Limited.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Acceptance of Terms
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            PLEASE READ THE PRIVACY POLICY THOROUGHLY AND CAREFULLY.
            <br />
            <br />
            The terms and conditions set forth below through the Privacy Policy constitute a legally-binding agreement between Vapormop,  a wholly-owned subsidiary of Vapormop Furnishing Private Limited., and you. This policy contains provisions that define your limits, legal rights and obligations with respect to your use of and participation on the Platform, including the classified advertisements, forums, various email functions and Internet links, and all content and Vapormop available on the Platform. The Privacy Policy is applicable to all users of the Platform, including users who have access and/or register on the Platform, and users who are also contributors of content, information, private and public messages, advertisements, and other materials or services on the Platform.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Information we collect
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Personal information
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            “Personal information” is defined to include information that may be used to readily identify or contact you such as: name, address, PIN code, email address, phone number, order details, user records etc. that is otherwise not publicly available.
            <br />
            <br />
            When you sign up on the Platform we collect personal information from (i) users who are interested in availing our services, (ii) design partners who offer their design services to Vapormop customers (“Design Partners”), and (iii) service partners offering their services (“Service Partners”).
            <br />
            <br />
            Personal information collected from Design Partners and Service Partners may be partially or completely accessible to users on the Platform or those availing our services. Personal information from users availing our services is partially or completely available to relevant Design Partner(s), Service Partner(s) and employee(s) of Vapormop on a need to know basis.
            <br />
            <br />
            All information disclosed by you shall be deemed to be disclosed willingly and without any coercion. No liability pertaining to the authenticity/ genuineness/ misrepresentation/ fraud/ negligence, etc. of the information disclosed shall lie on Vapormop nor will Vapormop in any way be responsible to verify any information obtained from you.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Personal Information from Social Networking sites
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            You may log into our Platform through your Facebook or Google account. If you do so, you must enter the email address and password that you use for your account. We will ask that you grant us permission to access and collect your Facebook basic information (this includes your name, profile picture, gender, networks, user IDs, list of friends, date of birth, email address, and any other information you have set to public on your Facebook account). If you allow us to have access to this information, then we will have access to this information even if you have chosen not to make that information public.
            <br />
            <br />
            We store the information that we receive from Facebook with other information that we collect from you or receive about you. Facebook controls the information it collects from you. For information about how Facebook may use and disclose your information, including any information you make public, please consult Facebook's privacy policy. We have no control over how any third party site uses or discloses the personal information it collects about you.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Calls and Text messages
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop enables users to call and chat with the Design Partners, Service Partners through the Platform. As otherwise described in this policy, your contact information may be accessible to a Design Partner or Service Partner for the sole purpose of providing services. In addition, regarding the calls or chats, we collect information including the date and time of the call/chat message(s), and the content of the calls and chat messages in order to improve our customer service and quality of services. Vapormop may also use this information for resolving disputes between you and Design Partners or Service Partners or other users, or for safety and security purposes, and for analytics.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Age
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            We respect children's privacy. We do not knowingly or intentionally collect personal information from children under age 18. By accessing and/or registering on the Platform, you have represented and warranted that you are either 18 years of age or using the Platform with the supervision of a parent or guardian. If you are under the age of 18, please do not submit any personal information to us, and rely on a parent or guardian to assist you.
          </Typography>


          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Refer a friend
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop offers the opportunity to any user to share details of anyone who they think may be interested in Vapormop or our services. This information is recorded and used only to communicate with the referee using mediums including phone calls and email, based on the details provided to Vapormop. We believe that it is within the purview of the referrer to seek authorization to share the personal information of the referee. When the information is shared with Vapormop, it is deemed that the authorization has already been obtained by the referrer.
          </Typography>


          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Communications
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            During your interaction with Vapormop, you may also participate in polls, surveys and feedback and personal information including call logs during such interactions will be collected. Further, when you communicate with us (via email, phone, texts, through the Platform or otherwise), we may maintain a record of your communication. When you use the Platform to communicate with others, we may collect and maintain a copy of those communications, in accordance with applicable law. Such information obtained from a user is gathered and utilized to ensure a greater experience for users and partners.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Payment, Billing and Financial Information
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            When you create an account with Vapormop and start (i) availing services from us, our Design Partners and or Service Partners (ii) offer your services as a Design Partner or Service Partner, you may be required to disclose information such as bank details, credit card details, govt. recognised identity proof, etc. in order for us to process your request.
            <br />
            <br />
            Additionally, Vapormop may also collect information related to the manner and mode of payments usually adopted by you on the Platform, including details of your bank account, credit card and debit card. The financial information collected may vary in accordance to your interaction with the Platform and our Partners.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Device and Location Information
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            We collect information from your devices (computers, mobile phones, tablets, etc.), including information about how you interact with our services and information that allows us to recognize and associate your activity across devices and services. This information includes device specific identifiers and information such as location, IP address, cookie information, mobile device and advertising identifiers, browser version, operating system type and version, mobile network information, device settings, and software data. We may recognize your devices to provide you with personalized experiences and advertising across the devices you use. In addition, the information may also include your location.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Information from Cookies and other tracking methods
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            This Platform employs cookies, web beacons and other tracking technologies to speed your navigation of the Platform, recognize you and your access privileges, and track your Platform usage. These help us in Platform analytics to give you a better experience. The same may be used to evaluate the success of our advertising campaigns. This includes information, but is not limited to, tracking how frequently you visit our Platform and use our services, time spent on the Platform, pages visited, links clicked, etc.
            <br />
            <br />
            We may use third-party advertising companies to help us tailor site content to users or to serve ads on our behalf. These companies may employ cookies and web beacons to measure advertising effectiveness (such as which web pages are visited or what products are purchased and in what amount). Any information that these third parties collect via cookies and web beacons is not linked to any personal information collected by us.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Information from other sources
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            These may include:
            <br />
            <br />
            <li>Feedback including surveys and ratings</li>
            <br />
            <li>Vapormop business partners through which you create or access your Vapormop account, such as payment providers, social media services, or apps or websites who use Vapormop’s APIs or whose API Vapormop uses</li>
            <br />
            <li>Financial services providers</li>
            <br />
            <li>Marketing service providers</li>
            <br />
            <li>Marketing service providers</li>
            <br />
            <br />
            By choosing to provide any and all of the aforesaid information to Us, you are giving Vapormop permission to use and/or store such information consistent with this Privacy Policy. Further, Vapormop shall be entitled to retain your Personal information for such duration as may be required for the purposes specified hereunder and shall be used us only in accordance with this Privacy Policy.
          </Typography>

          <Typography variant={variant} sx={{ fontWeight: "600", color: "#1b685f", mt: 6 }}>
            How do we use this Information?
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Internal Use
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop uses the information we collect to provide, personalize, maintain and improve our products and services, including processing your order and providing you with end-to-end interior design and execution services. Additionally, the information may be used to improve our Platform’s content and layout, to improve our outreach and for our own marketing efforts (including marketing our services and products to you), and to determine general marketplace information about visitors to this Platform. The information may be used for product development, testing and improvement of existing services and products. This allows us to develop new product features and also facilitate financial solutions and insurance that are connected to Vapormop services.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Providing services and features
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop uses the information we collect to provide, personalize, maintain and improve our products and services. This includes
            <br />
            <br />
            <li>Matching you with a suitable Design and Service partner to offer best of the services.</li>
            <br />
            <li>Facilitating in-account activities during your project such as in-website chat.</li>
            <br />
            <li>Processing and placing orders for your requirement of services.</li>
            <br />
            <li>Process or facilitate payment for your orders.</li>
            <br />
            <li>Offer, obtain, provide or facilitate insurance or financing solutions in connection with our services</li>
            <br />
            <li>Perform internal operations necessary to provide our services, including to troubleshoot software bugs and operational problems, to conduct data analysis, testing, and research, and to monitor and analyse usage and activity trends</li>
            <br />
            <br />
            We confirm that the information that we collect from you may be used in aggregate form in various ways to optimize and improve Vapormop’s services, understand usage trends, analyse behavioural patterns, determine the effectiveness and usefulness of services and/or communications shared with you. While such information may be based on information about you, it will not identify you personally.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Customer Support
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop uses information collected about you (including recordings of customer support calls after notice to you and with your consent) to assist you when you contact our customer support services, including to:
            <br />
            <br />
            <li>Direct your questions to the appropriate customer support person</li>
            <br />
            <li>Investigate and address your concerns</li>
            <br />
            <li>Monitor and improve our customer support response</li>
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Communications with you
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop uses the information shared by you to communicate with you, including for the purpose of project updates, customer experience surveys, promotional offers and account information. The mode of communication includes emails, electronic newsletters, invitations, polls and surveys.
          </Typography>



          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Communication amongst users and with Vapormop
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            To offer our services, or to facilitate Vapormop Partners to offer their services, personal information, partially or fully, is made available to users of Vapormop. As an example, when you sign up to receive services from Vapormop, your contact information including phone number and email is shared with a Design Partner and/or Service Partner to offer his/her service for your project. Sometimes, the users are allowed to contact each other for marketing purposes as well.
          </Typography>

          <Typography variant={variant} sx={{ fontWeight: "600", color: "#1b685f", mt: 6 }}>
            How we share this information?
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop does not sell or transfer your Personal information (including your phone number, email address) to third-parties for the use of their own marketing.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Third Party Ad-Networks
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Third party ad networks display advertisements on other websites based on your visits to the Platform as well as other websites. These ad networks, sponsors, advertisers and traffic measurement services, employ technologies such as cookies, JavaScript, web beacons, and others to capture information governed by their own specific privacy policy(ies). We participate in these networks to enable us and the third parties to display advertisement for products and services that might interest you.
          </Typography>


          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Analytics and Reports
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            The information collected is used to create analytic reports for both internal and external partners, including business partners and the public regarding the use of and trends within our services and ads. For the purpose of studying and sharing trends, we may share aggregated or pseudonymous information (including demographic information), that is limited to non-personally identifiable information, with partners, measurement analytics, apps, third party ad networks, or media.
          </Typography>


          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Public Posts
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            You (including Design Partners and Service Partners) may provide your feedback, reviews, comments, content, other information etc. on the Platform (“Posts”). Your Posts shall have to comply with the conditions relating to Posts as mentioned in the Terms of Use. Vapormop retains an unconditional right to remove and delete any Post or such part of the Post that, in the opinion of Vapormop, does not comply with the conditions in the Terms of Use. [All Posts shall be publicly accessible and visible to all Users of the Platform.] Vapormop reserves the right to use, reproduce and share Your Posts for any purpose. If you delete Your Posts from the Platform, copies of such Posts may remain viewable in archived pages, or such Posts may have been copied or stored by other users.
          </Typography>


          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Information disclosed at your request
          </Typography>



          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            To avail Vapormop service(s), you may give us consent to share such personal information, as may be required, with our Design Partners/ Service Partners offering those services. In the event of such a request, Vapormop shares only the information necessary for them to offer the specific service. All Design Partners and Service Partners are required to follow appropriate confidentiality and safety measures to protect your data.
          </Typography>




          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            New Ownership or Bankruptcy
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            If the ownership or control of all or part of Vapormop changes as a result of a merger, acquisition or sale of assets, we may transfer your information to the new owner, a third party entity (a "Successor")
            <br />
            <br />
            In addition, in the event of Vapormop 's bankruptcy, reorganization, receivership, or assignment for the benefit of creditors, or the application or laws or equitable principles affecting creditors' rights generally, Vapormop may not be able to control how your information is transferred, used, or treated and reserves the right to transfer the information we have collected from the users of the Platform and/or services to non-affiliated third parties in such event.
          </Typography>



          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Legal Investigation
          </Typography>



          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            We may investigate and disclose information from or about you, as permitted by applicable law, if we believe that such investigation or disclosure is (a) necessary to comply with legal process and law enforcement instructions and orders, such as a search warrant, order, statute, judicial proceeding, or other legal process served on us; (b) helpful to prevent, investigate, or identify possible wrongdoing in connection with the Platform; or (c) helpful to protect our rights, reputation, property, or that of our users, subsidiaries, or the public. In such an event Vapormop shall be under no obligation to inform you or seek your approval or consent.
          </Typography>

          <Typography variant={variant} sx={{ fontWeight: "600", color: "#1b685f", mt: 6 }}>
            Data Security
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Online and during your interactions with Vapormop
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop shall take reasonable steps to help protect your rights of privacy and your information (personal or otherwise) in an effort to prevent loss, misuse, unauthorized access, disclosure, alteration, or destruction of such information, in compliance with the applicable laws. This Platform uses physical, electronic, and administrative procedures to safeguard the confidentiality of your information. SSL encryption is used to protect your personal information online, and we also take several steps to protect your personal information in our facilities. Access to your personal information is restricted. Only employees and Partners (Design & Service) who need access to your personal information to perform a specific job or provide a service are granted access to your personal information. Finally, we rely on third-party service providers for the physical security of some of our computer hardware. We believe that their security procedures are adequate. For example, when you visit our Platform you access servers that are kept in a secure physical environment, behind a locked cage and an electronic firewall. Vapormop assumes no liability or responsibility for disclosure of your information due to errors in transmission, unauthorized third party access, or other causes beyond its control.
            <br />
            <br />
            At times we may retain third parties to analyse data we collect on our Platform, and to administer the services provided (such as shipping, web hosting, etc. as described above), solely to help us provide and improve our products, services and Platform. These suppliers and other third parties are not authorized by us to use your personal information in any other way. We may have to use personal information to investigate complaints and protect Vapormop and its members, in compliance with the law, your Membership Agreement and Vapormop policies.
            <br />
            <br />
            While we use industry-standard precautions to safeguard your personal information, we cannot guarantee complete security. 100% complete security does not presently exist anywhere online or offline.
            <br />
            <br />
            In the unlikely event that we believe that the security of your personal information in our possession or control may have been compromised, we may seek to notify you of that development. If a notification is appropriate, we would endeavour to do so as promptly as possible under the circumstances, and, to the extent we have your email address, we may notify you by email.
          </Typography>

          <Typography variant={variant} sx={{ fontWeight: "600", color: "#1b685f", mt: 6 }}>
            Links to external websites
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Information not controlled by Vapormop
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            This Platform may contain links to other websites or resources over which Vapormop does not have any control. Such links do not constitute an endorsement by Vapormop of those external websites. You acknowledge that Vapormop is providing these links to you only as a convenience, and further agree that Vapormop is not responsible for the content of such external websites. We are not responsible for the protection and privacy of any information which you provide while visiting such external websites and such sites are not governed by this Policy. Your use of any external website is subject to the terms of use and privacy policy located on the linked to external website.
          </Typography>


          <Typography variant={variant} sx={{ fontWeight: "600", color: "#1b685f", mt: 6 }}>
            Choice and Transparency
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Accessing and correcting your information
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            You can update the details associated with your account by visiting My account and accessing the account settings on the Platform. You can also look up your payment information, details about your project(s), services, etc. You may also update the information yourself, if allowed on the Platform or request updating of your information by contacting Vapormop at <a style={{ color: 'pink' }} href="mailto: care@Vapormoplite.com">care@Vapormoplite.com</a>.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Marketing Opt-Outs
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            We may send promotional or informational emails to you. You may opt out of receiving promotional emails from Vapormop the opt-out instructions contained in the email. Please note that if you opt out, we may still send you non-promotional messages, such as meeting invites, project progress, etc.
          </Typography>


          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Cookie choices
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies. If you choose to remove or reject cookies, this could affect certain features of the Platform and/or services.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Withdrawal of consent
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            You may choose to withdraw your consent provided hereunder at any point in time. Such withdrawal of the consent must be sent in writing to care@Vapormoplite.com. In case you do not provide your consent or later withdraw your consent, we request you not to access the Platform and use the services and also reserve the right to not provide you any services on the Platform. In such a scenario, Vapormop may delete your information (personal or otherwise) or de-identify it so that it is anonymous and not attributable to you.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Amendments
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Vapormop retains an unconditional right to modify or amend this Privacy Policy without any requirement to notify you of the same. You can determine when this Privacy Policy was last modified by referring to the “Last Updated” legend above. It shall be your responsibility to check this Privacy Policy periodically for changes. Your continued use of the Platform following the posting of changes to this Privacy Policy on the Platform, will constitute your consent and acceptance of those changes.
          </Typography>



          <Typography variant={variant} sx={{ fontWeight: "600", color: "#1b685f", mt: 6 }}>
            Grievances and Disputes
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Grievances
          </Typography>

          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            In the event You have any grievances relating to the Privacy Policy, please inform Vapormop within 24 hours of occurrence of the instance from which the grievance has arisen, by writing an email to the Grievance Officer at <a style={{ color: 'pink' }} href="mailto: care@Vapormop.in">care@Vapormop.in</a>.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "600",
              color: "#1b685f",
              fontSize: "16px",
            }}
          >
            Dispute Resolution
          </Typography>


          <Typography sx={{ mt: 6, fontSize: "16px" }}>
            Any dispute, controversy or claim directly or indirectly caused by, arising out of or relating to this Privacy Policy will be governed by the laws of India and will be referred to confidential, mandatory and binding arbitration in India. Any dispute arising out of or in connection with this contract, including any question regarding its existence, validity or termination, shall be referred to and finally resolved by arbitration in accordance with the Arbitration & Conciliation Act, 1996 for the time being in force, which rules are deemed to be incorporated by reference in this clause. Subject to the above, you agree to submit yourself to the exclusive jurisdiction of the Courts in Bengaluru, India.
            <br />
            <br />
            Customers based in the European Union (EU), European Economic Area and customers who are subject to the GDPR or any other UK or EU privacy law or is a European Union Data Subject, without prejudice to any other administrative of judicial remedy available to them, shall have the right to lodge a complaint with the Supervisory Authority, as stated under Article 77 of the GDPR.
            <br />
            <br />
            In order to ensure compliance by us and our customers based in the European Union (EU), European Economic Area and customers who are subject to the GDPR or any other UK or EU privacy law or is a European Union Data Subject, the list of the supervisory authority as stated under Article 51 of the GDPR can be accessed through <a style={{ color: 'pink' }} href="https://edpb.europa.eu/about-edpb/board/members_en">https://edpb.europa.eu/about-edpb/board/members_en</a> .
          </Typography>


        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default function Privacy() {
  const xlMax = useMediaQuery("(max-width:2000px)");
  const xlMin = useMediaQuery("(min-width:1200px)");
  const mdMax = useMediaQuery("(max-width:1200px)");
  const mdMin = useMediaQuery("(min-width:600px)");
  const sm = useMediaQuery("(max-width:600px)");
  return (
    <>
      {xlMax && xlMin && (
        <Content width={"1170px"} padding={"unset"} variant={'h3'} margin={"100px auto"} />
      )}
      {!(xlMax && xlMin) && mdMax && mdMin && (
        <Content width={"unset"} padding={"0px 70px"} variant={'h3'} margin={"50px auto"} />
      )}
      {sm && <Content width={"unset"} padding={"0px 20px"} variant={'h5'} margin={"40px auto"} />}
    </>
  );
}
