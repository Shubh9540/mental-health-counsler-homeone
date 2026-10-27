export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: HeaderNavLink[];
  contactButton: {
    text: string;
    url: string;
  };
}

export interface HeroData {
  subtitle: string;
  title1: string;
  title2: string;
  title3?: string;
  description: string;
  image1: string;
  button1: { text: string; url: string };
  button2?: { text: string; url: string };
}

export interface AboutUsFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description1: string;
  description2?: string;
  imageMain: string;
  yearsOfExperience: string;
  experienceLabel?: string;
  features: AboutUsFeature[];
  button?: { text: string; url: string };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  services: ServiceItem[];
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  url: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  title3?: string;
  subheading?: string;
  description: string;
  image: string;
  features: WhyChooseUsFeature[];
}

export interface CounterItem {
  id: string;
  icon: string;
  title?: string;
  number: number;
  suffix?: string;
  label?: string;
}

export interface CounterData {
  bgImage?: string;
  items: CounterItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface TeamData {
  subtitle: string;
  title1: string;
  title2: string;
  description?: string;
  members: TeamMember[];
}

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
}

export interface GalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  images: GalleryImage[];
  button?: {
    text: string;
    url: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  location?: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface ContactInfo {
  phoneTitle: string;
  phone: string;
  emailTitle: string;
  email: string;
  addressTitle: string;
  address: string;
  hoursTitle?: string;
  hoursLine1?: string;
  hoursLine2?: string;
}

export interface ContactForm {
  title: string;
  description: string;
  buttonText: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  subjectPlaceholder?: string;
  messagePlaceholder: string;
}

export interface ContactUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  cardSubtitle?: string;
  cardTitle?: string;
  cardDescription?: string;
  contactInfo: ContactInfo;
  form: ContactForm;
  image?: string;
  mapUrl?: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  url: string;
}

export interface QuickLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterData {
  logo?: string;
  logoAlt: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  hoursTitle: string;
  hoursDays?: string;
  hours: string;
  socialLinks: SocialLink[];
  quickLinks: QuickLink[];
  servicesLinks?: QuickLink[];
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  col2Title?: string;
  col3Title?: string;
  col4Title?: string;
  supportText?: string;
  backToTopText?: string;
}

export interface CommonFonts {
  primary: string;
  heading: string;
}

export interface HealthCounselorTemplateData {
  common: {
    fonts?: CommonFonts;
    globalUI?: {
      loadingText?: string;
      notFoundText?: string;
    };
    Footer?: FooterData;
  };
  categories: {
    HealthCounselor: {
      templateComponents?: {
        shared?: {
          Header?: string;
          Footer?: string;
        };
        pages?: {
          home?: {
            components?: { key: string; component: string }[];
          };
        };
      };
      sections: {
        Header?: { variants?: { HealthCounselorHeader2?: HeaderData } };
        Hero?: { variants?: { HealthCounselorHero2?: HeroData } };
        AboutUs?: { variants?: { HealthCounselorAboutUs2?: AboutUsData } };
        Services?: { variants?: { HealthCounselorServices2?: ServicesData } };
        WhyChooseUs?: { variants?: { HealthCounselorWhyChooseUs2?: WhyChooseUsData } };
        Counter?: { variants?: { HealthCounselorCounter2?: CounterData } };
        Team?: { variants?: { HealthCounselorTeam2?: TeamData } };
        Gallery?: { variants?: { HealthCounselorGallery2?: GalleryData } };
        Testimonials?: { variants?: { HealthCounselorTestimonials2?: TestimonialsData } };
        ContactUs?: { variants?: { HealthCounselorContactUs2?: ContactUsData } };
      };
    };
  };
}
