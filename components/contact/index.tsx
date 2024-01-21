import HeadingSection from "@/components/heading-section";
import { MapPin, Mail, PhoneCall, Facebook } from "lucide-react";
import Link from "next/link";
import ContactForm from "./contact-form";
import InViewProvider from "@/providers/in-view-provider";

type TProps = {
  id: string;
};

const data = {
  address: {
    Icon: MapPin,
    text: "GV 39 bis Soamanandrariny",
  },
  email: {
    Icon: Mail,
    text: "tojorandria474@gmail.com",
    url: "mailto:tojorandria474@gmail.com",
  },
  phone: {
    Icon: PhoneCall,
    text: "+261 34 69 899 51",
  },
  social: {
    Icon: Facebook,
    text: "@toojrtn",
    url: "https://github.com/Randriamampionona",
  },
};

export default function Contact({ id }: TProps) {
  return (
    <InViewProvider section_ID={id}>
      <section className="section" id={id}>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-8 lg:space-y-0">
          <div className="w-full lg:w-1/2">
            <HeadingSection
              heading="Get in touch"
              className="text-center lg:text-start"
            />

            <p className="text-muted-foreground mb-4 text-center max-w-2xl mx-auto lg:mx-0 lg:text-start">
              Let&apos;s build something incredible together. Reach out and
              let&apos;s transform your ideas into digital masterpieces.
            </p>

            <div className="flex items-center justify-center flex-wrap gap-2 lg:flex-col lg:items-start">
              <div className="flex items-center justify-start space-x-1 lg:space-x-3 border lg:border-none rounded-full lg:rounded-none px-2 py-1 lg:p-0">
                <data.address.Icon size={17} className="text-sky-600" />{" "}
                <span className="text-sm">{data.address.text}</span>
              </div>

              <div className="flex items-center justify-start space-x-1 lg:space-x-3 border lg:border-none rounded-full lg:rounded-none px-2 py-1 lg:p-0">
                <data.email.Icon size={17} className="text-sky-600" />{" "}
                <Link
                  href={data.email.url}
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-sm">{data.email.text}</span>
                </Link>
              </div>

              <div className="flex items-center justify-start space-x-1 lg:space-x-3 border lg:border-none rounded-full lg:rounded-none px-2 py-1 lg:p-0">
                <data.phone.Icon size={17} className="text-sky-600" />{" "}
                <span className="text-sm">{data.phone.text}</span>
              </div>

              <div className="flex items-center justify-start space-x-1 lg:space-x-3 border lg:border-none rounded-full lg:rounded-none px-2 py-1 lg:p-0">
                <data.social.Icon size={17} className="text-sky-600" />{" "}
                <Link
                  href={data.social.url}
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-sm">{data.social.text}</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <ContactForm
              defaultState={{
                name: "",
                email: "",
                message: "",
              }}
            />
          </div>
        </div>
      </section>
    </InViewProvider>
  );
}
