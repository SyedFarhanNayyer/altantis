import {
  EnvelopeSimple,
  FacebookLogo,
  GoogleLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  YoutubeLogo,
} from "@phosphor-icons/react/ssr";
import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { business, footerNav, legalLinks, socialLinks } from "@/lib/site";
import { OfficeHours } from "./OfficeHours";

const socialIcons = {
  facebook: FacebookLogo,
  instagram: InstagramLogo,
  linkedin: LinkedinLogo,
  youtube: YoutubeLogo,
  google: GoogleLogo,
} as const;

const linkStyle =
  "underline-offset-4 decoration-1 transition-colors hover:text-brand-strong hover:underline";

// Internal routes use next/link; anything absolute opens in a new tab.
function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={linkStyle}>
      {children}
    </Link>
  );
}

function ContactRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-brand"
      >
        {icon}
      </span>
      <div className="pt-1.5">{children}</div>
    </li>
  );
}

function ColumnTitle({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-card-title font-bold">{children}</h2>;
}

export function SiteFooter() {
  const [whatWeDo, whoWeHelp, company] = footerNav;
  const { address, phone } = business;

  return (
    <footer className="bg-sand">
      <div
        data-reveal="stagger"
        className="container-page grid grid-cols-2 gap-x-6 gap-y-14 pt-20 pb-16 sm:gap-x-12 lg:grid-cols-[1.45fr_1fr_0.85fr_1.15fr] lg:pt-[6.875rem]"
      >
        {/* Brand and contact */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" aria-label="Atlantis Utility home" className="inline-block">
            <Image
              src="/images/atlantis-logo-black.png"
              alt="Atlantis Utility, Inc."
              width={150}
              height={92}
              className="h-[5.75rem] w-auto"
            />
          </Link>

          <address className="not-italic">
            <ul className="mt-8 space-y-5 text-body-sm">
              <ContactRow icon={<MapPin size={18} weight="regular" />}>
                <span className="block font-bold">{business.legalName}</span>
                <a
                  href={address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  {address.street}
                  <br />
                  {address.city}, {address.region} {address.postalCode}
                </a>
              </ContactRow>
              <ContactRow icon={<Phone size={18} weight="regular" />}>
                <a href={`tel:${phone.tel}`} className={`block font-bold ${linkStyle}`}>
                  {phone.display}
                </a>
                <span className="text-ink/80">{business.hoursSummary}</span>
              </ContactRow>
              <ContactRow icon={<EnvelopeSimple size={18} weight="regular" />}>
                <a href={`mailto:${business.email}`} className={`break-all ${linkStyle}`}>
                  {business.email}
                </a>
              </ContactRow>
            </ul>
          </address>

          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Atlantis on social media">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = socialIcons[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:bg-brand hover:text-on-dark"
                  >
                    <Icon size={18} weight="regular" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Services and audiences */}
        <nav aria-label="Services" className="space-y-12">
          {[whatWeDo, whoWeHelp].map((group) => (
            <div key={group.title}>
              <ColumnTitle>{group.title}</ColumnTitle>
              <ul className="mt-5 space-y-3 text-body-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <ColumnTitle>{company.title}</ColumnTitle>
          <ul className="mt-5 space-y-3 text-body-sm">
            {company.links.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hours */}
        <div className="col-span-2 md:col-span-1">
          <ColumnTitle>Office Hours</ColumnTitle>
          <div className="mt-4">
            <OfficeHours />
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page py-8">
          <div className="flex flex-col gap-4 text-small lg:flex-row lg:items-center lg:justify-between">
            <p>
              © <CopyrightYear /> {business.legalName} All rights reserved.
            </p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Cached so the static page can be prerendered; refreshed daily.
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
