import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

// Text supplied by Atlantis — keep it word for word.

const path = "/privacy-policy";
const title = "Privacy Policy | Atlantis Utility";
const description =
  "How Atlantis Utility, Inc. collects, uses, shares and protects your information, including SMS messaging, your choices and how to contact us.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      path={path}
      title={title}
      description={description}
      updated="2026-09-30"
      sections={[
        {
          id: "introduction",
          title: "Introduction",
          body: (
            <p>
              Atlantis Utility, Inc. (“we,” “us,” “our”) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you interact with our ads, website, or
              forms. By engaging with our ads or submitting your information to us, you
              agree to the terms of this Privacy Policy.
            </p>
          ),
        },
        {
          id: "information-we-collect",
          title: "Information We Collect",
          body: (
            <>
              <p>
                When you interact with our ads, website, or forms, we may collect the
                following types of information:
              </p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Information that can be used to
                  identify you, such as your name, email address, phone number, business
                  name, and any other information you voluntarily provide.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about your interaction with our
                  ads and website, including the time and date of your visit, the pages you
                  viewed, and your IP address.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about the device you use
                  to interact with our ads or website, such as your device type, browser
                  type, and operating system.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use-your-information",
          title: "How We Use Your Information",
          body: (
            <>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>
                  <strong>Ad Performance:</strong> To analyze and improve the effectiveness
                  of our Facebook and other advertising campaigns.
                </li>
                <li>
                  <strong>Personalization:</strong> To provide you with more relevant ads
                  and content.
                </li>
                <li>
                  <strong>Communication:</strong> To respond to your inquiries and provide
                  you with information, quotes, or services you have requested.
                </li>
                <li>
                  <strong>Compliance and Legal Obligations:</strong> To comply with
                  applicable laws, regulations, and legal processes.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "ccpa",
          title: "Sharing Your Information",
          body: (
            <>
              <p>
                We do not sell or rent your personal information to third parties.
                However, we may share your information in the following circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We may share your information with
                  third-party service providers who perform services on our behalf, such as
                  ad platforms, CRM systems, and marketing support.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if
                  required to do so by law or in response to valid requests by public
                  authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of all or a portion of our assets, your information
                  may be transferred to the acquiring entity.
                </li>
              </ul>
              <p>
                The sharing described above does not apply to mobile information. All text
                messaging originator opt-in data and consent will not be shared with any
                third parties.
              </p>
            </>
          ),
        },
        {
          id: "no-sharing-of-mobile-information",
          title: "No Sharing of Mobile Information",
          body: (
            <p>
              No mobile information will be shared with third parties or affiliates for
              marketing or promotional purposes. All text messaging originator opt-in data
              and consent will not be shared with any third parties.
            </p>
          ),
        },
        {
          id: "sms-text-messaging",
          title: "SMS/Text Messaging",
          body: (
            <p>
              If you opt in to receive SMS/MMS messages from Atlantis Utility, Inc., we
              will use your mobile number to send appointment reminders, service updates,
              and customer support messages. Message frequency may vary. Message and data
              rates may apply. You can opt out at any time by replying STOP. For help,
              reply HELP or contact us at <a href="tel:+18056582329">(805) 658-2329</a> or{" "}
              <a href="mailto:ticket@atlantisutility.com">ticket@atlantisutility.com</a>.
            </p>
          ),
        },
        {
          id: "data-security",
          title: "Data Security",
          body: (
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information from unauthorized access, use, or disclosure.
              However, please be aware that no method of transmission over the internet or
              electronic storage is completely secure.
            </p>
          ),
        },
        {
          id: "your-choices",
          title: "Your Choices",
          body: (
            <>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li>
                  <strong>Access:</strong> You can request access to the personal
                  information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> You can request that we correct any
                  inaccurate or incomplete information.
                </li>
                <li>
                  <strong>Deletion:</strong> You can request that we delete your personal
                  information, subject to certain legal restrictions.
                </li>
                <li>
                  <strong>Opt-Out:</strong> You can opt out of receiving targeted ads by
                  adjusting your ad preferences on Facebook or through your device
                  settings. You can opt out of SMS messages at any time by replying STOP.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "childrens-privacy",
          title: "Children’s Privacy",
          body: (
            <p>
              Our ads and services are not directed to individuals under the age of 18. We
              do not knowingly collect personal information from children under 18. If we
              become aware that we have collected personal information from a child under
              18, we will take steps to delete such information.
            </p>
          ),
        },
        {
          id: "changes",
          title: "Changes to This Privacy Policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time. When we make changes, we
              will notify you by updating the “Last Updated” date at the top of this
              Privacy Policy. We encourage you to review this Privacy Policy periodically to
              stay informed about how we are protecting your information.
            </p>
          ),
        },
        {
          id: "contact-us",
          title: "Contact Us",
          body: (
            <>
              <p>
                If you have any questions or concerns about this Privacy Policy or our
                privacy practices, please contact us at:
              </p>
              <address className="mt-4 not-italic">
                Atlantis Utility, Inc.
                <br />
                1445 Donlon St, Suite 14
                <br />
                Ventura, CA 93003
                <br />
                <a href="tel:+18056582329">+1 (805) 658-2329</a>
                <br />
                <a href="mailto:service@atlantisutility.com">service@atlantisutility.com</a>
              </address>
            </>
          ),
        },
      ]}
    />
  );
}
