import React from "react";
import Text from "../common/Text";
import CustomLink from "../common/CustomLink";
import List from "../common/List";
import Heading from "../common/Heading";

const Footer = () => {
  return (
    <footer className="bg-lightBeige">
      <div className="px-2 sm:px-0 py-5 lg:max-w-[1066px] xl:max-w-[1386px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-2 md:space-y-0">
          <div className="text-center hidden sm:block mx-auto lg:mx-0 mb-4 sm:mb-0 lg:text-left">
            <Heading className="sm:text-subheading text-mobileSubHeading font-bold text text-brown mb-3">
              Qode
            </Heading>
            <Text className="text-body lg:text-body w-full lg:max-w-xs mx-auto sm:mx-0 text-black">
              2nd Floor, Tree Building, Raghuvanshi Mills Compound, Gandhi
              Nagar, Upper Worli, Lower Parel, Mumbai, Maharashtra 400013
            </Text>
            <div className="mt-1 text-body sm:text-body text-black">
              <Text className="mb-18">
                SEBI registered PMS No: <span>INP000008914</span>
              </Text>
              <br />
              <Text className="mb-18">
                For Investor onboarding and other queries contact us at
                <br /> Email:{" "}
                <a
                  href="mailto:contact@qodeinvestments.com"
                  className="hover:text-black"
                >
                  operations@qodeinvest.com
                </a>
              </Text>
              <Text>
                Contact No:{" "}
                <a href="tel:+919820300088" className="hover:text-black">
                  +91 98203 00088
                </a>
              </Text>
            </div>
          </div>

          <div>
            <Heading className="sm:text-subheading text-mobileSubHeading text text-brown mb-2">
              Company
            </Heading>
            <List
              className="text-body sm:text-body text-black"
              itemClassName="mb-18 hover:text-black"
              items={[
                <CustomLink key="about-us" to="https://qodeinvest.com/about-us">
                  About Us
                </CustomLink>,
                <CustomLink
                  key="contact-us"
                  to="https://qodeinvest.com/contact-us"
                >
                  Contact Us
                </CustomLink>,
                <CustomLink
                  key="privacy-policy"
                  to="https://qodeinvest.com/privacy-policy"
                >
                  Privacy Policy
                </CustomLink>,
                <CustomLink
                  key="terms-n-conditions"
                  to="https://qodeinvest.com/terms-n-conditions"
                >
                  Terms and Conditions
                </CustomLink>,
                <CustomLink
                  key="portfolio-visualiser"
                  to="https://qodeinvest.com/portfolio-visualiser"
                >
                  Portfolio Visualizer
                </CustomLink>,
              ]}
            />
          </div>

          <div>
            <Heading className="sm:text-subheading text-mobileSubHeading text text-brown mb-2">
              Strategies
            </Heading>
            <List
              className="text-body sm:text-body text-black"
              itemClassName="mb-18 hover:text-black"
              items={[
                <CustomLink
                  key="all-weather"
                  to="https://qodeinvest.com/strategies/qode-all-weather"
                >
                  Qode All Weather
                </CustomLink>,
                <CustomLink
                  key="growth-fund"
                  to="https://qodeinvest.com/strategies/qode-growth-fund"
                >
                  Qode Growth Fund
                </CustomLink>,
                <CustomLink
                  key="velocity-fund"
                  to="https://qodeinvest.com/strategies/qode-velocity-fund"
                >
                  Qode Velocity Fund
                </CustomLink>,
                <CustomLink
                  key="future-horizons"
                  to="https://qodeinvest.com/blogs/qode-future-horizons"
                >
                  Qode Future Horizons
                </CustomLink>,
              ]}
            />
          </div>

          <div>
            <Heading className="sm:text-subheading text-mobileSubHeading text text-brown mb-2">
              Support
            </Heading>
            <List
              className="text-body sm:text-body text-black"
              itemClassName="mb-18 hover:text-black"
              items={[
                <CustomLink
                  key="smart-odr"
                  target="_blank"
                  to="https://smartodr.in/"
                >
                  Smart ODR
                </CustomLink>,
                <CustomLink
                  key="disclosure"
                  to="https://qodeinvest.com/disclosure"
                >
                  Disclosure
                </CustomLink>,
                <CustomLink key="support" to="/">
                  Support
                </CustomLink>,
              ]}
            />
          </div>

          <div className="block sm:hidden">
            <Heading className="sm:text-subheading text-mobileSubHeading text text-brown mb-2">
              Qode
            </Heading>
            <Text className="text-body lg:text-body w-full lg:max-w-xs mx-auto sm:mx-0 text-black">
              2nd Floor, Tree Building, Raghuvanshi Mills Compound, Gandhi
              Nagar, Upper Worli, Lower Parel, Mumbai, Maharashtra 400013
            </Text>
            <div className="mt-1 text-body sm:text-body text-black">
              <Text className="mb-18">
                SEBI registered PMS no: <span>INP000008914</span>
              </Text>
              <br />
              <Text className="mb-18">
                For Investor onboarding and other queries contact us at
                <br /> Email:{" "}
                <a
                  href="mailto:contact@qodeinvestments.com"
                  className="hover:text-black"
                >
                  operations@qodeinvest.com
                </a>{" "}
              </Text>
              <br />
              Contact No:{" "}
              <a href="tel:+919820300088" className="hover:text-black">
                +91 98203 00088
              </a>
            </div>
          </div>
        </div>
        <hr className="border-brown mt-4" />
        <div className="mt-4">
          <Text className="text-body sm:text-body text-black text-center">
            &copy; {new Date().getFullYear()} Qode Advisors LLP. All rights
            reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
