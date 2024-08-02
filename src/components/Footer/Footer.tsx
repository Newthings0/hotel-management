import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Shell Woodcreek Complex/Hotel
        </Link>

        <Link href="https://www.shell.us/about-us/contact-shell.html">
          <h4 className="font-semibold text-[40px] py-6">Contact</h4>
        </Link>

        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>150 N Dairy Ashford Rd, Houston, TX 77079, United States</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <Link href="https://www.shell.us/">
                <p className="ml-2">www.shell.us</p>
              </Link>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2"> +1 832-337-2010</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">shellcustomercare@shell.com</p>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Our Privacy Commitment</p>
            <p className="pb-4">Terms of Service</p>
            <p>Customer Assistance</p>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Dining Experene</p>
            <p className="pb-4">Welliness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 wfull bottom-0 left-0" />
    </footer>
  );
};

export default Footer;
