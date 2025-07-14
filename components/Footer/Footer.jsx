import { smallLogo } from "@/shared/images";
import { Image, Link } from "@/shared/lib";

const Footer = () => {
  const footerContent = [
    {
      _id: "col_1",
      title: "Explore",
      links: [
        { url: "#", name: "Plans & Pricing" },
        { url: "#", name: "Watch Anywhere" },
        { url: "#", name: "Zixes Originals" },
        { url: "#", name: "Top Picks" },
      ],
    },
    {
      _id: "col_2",
      title: "Company",
      links: [
        { url: "#", name: "About Zixes" },
        { url: "#", name: "Contact Us" },
        { url: "#", name: "Careers" },
        { url: "#", name: "Media Center" },
      ],
    },
    {
      _id: "col_3",
      title: "Legal",
      links: [
        { url: "#", name: "Terms of Use" },
        { url: "#", name: "Privacy Policy" },
        { url: "#", name: "Cookie Preferences" },
      ],
    },
  ];

  return (
    <footer className="snap-start footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <Image className="w-35" src={smallLogo} alt="logo" />
        <p>
          Zixes Group.
          <br />
          Unlimited movies, series, and originals since 2005
        </p>
      </aside>
      {footerContent.map((col) => (
        <nav key={col._id}>
          <h6 className="font-bold text-gray-400 text-lg">{col.title}</h6>
          {col.links.map((link) => (
            <Link key={link.name} href={link.url} className="hover:scale-102 duration-300">
              {link.name}
            </Link>
          ))}
        </nav>
      ))}
    </footer>
  );
};

export default Footer;
