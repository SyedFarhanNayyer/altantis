import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

// Text supplied by Atlantis — keep it word for word. Clause labels from the
// source ("PRICE:", "PAYMENT:" …) are the section headings; the numbering
// matches the source document.

const path = "/terms-and-conditions";
const title = "Terms & Conditions | Atlantis Utility";
const description =
  "Services and terms of agreement for Atlantis Utility Inc. telecommunications services, including pricing, payment, termination, E911 and SMS terms.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

// E911 limitations, each led by its label as in the source.
const e911 = [
  [
    "ELECTRICAL POWER.",
    "THE SERVICES WILL NOT FUNCTION IN THE ABSENCE OF ELECTRICAL POWER. IF THERE IS A POWER OUTAGE, CUSTOMER MAY BE REQUIRED TO RESET OR RECONFIGURE THE EQUIPMENT BEFORE BEING ABLE TO USE Atlantis Utility Inc., INC’S SERVICES, INCLUDING FOR E911 PURPOSES.",
  ],
  [
    "INTERNET ACCESS.",
    "THE SERVICES WILL NOT FUNCTION IF THERE IS AN INTERRUPTION OR SIGNIFICANT DEGRADATION OF CUSTOMER’S BROADBAND OR HIGH-SPEED INTERNET ACCESS SERVICE.",
  ],
  [
    "NON-VOICE SYSTEMS.",
    "THE SERVICES ARE NOT SET UP TO FUNCTION WITH TEXT MESSAGES OR OUTDIALING SYSTEMS INCLUDING HOME SECURITY SYSTEMS, MEDICAL MONITORING EQUIPMENT, TTY EQUIPMENT, AND ENTERTAINMENT OR SATELLITE TELEVISION SYSTEMS.",
  ],
  [
    "EQUIPMENT FAILURE.",
    "THE SERVICES WILL NOT FUNCTION IF CUSTOMER’S EQUIPMENT (DTA, PHONE, VIDEOPHONE, ETC.) FAILS OR IS NOT CONFIGURED CORRECTLY.",
  ],
  [
    "SERVICE FAILURE OR SHUT-OFF.",
    "THE SERVICES WILL NOT FUNCTION IF CUSTOMER’S Atlantis Utility Inc., INC SERVICE IS NOT AVAILABLE FOR ANY REASON, INCLUDING, BUT NOT LIMITED TO, SUSPENSION OR CANCELLATION OF SERVICE FOR NON-PAYMENT OR OTHER REASONS.",
  ],
  [
    "INCORRECT LOCATION DATA.",
    "IF CUSTOMER DOES NOT CORRECTLY IDENTIFY THE ACTUAL LOCATION OF THE Atlantis Utility Inc., INC EQUIPMENT AT THE TIME OF ACTIVATION OF THE SERVICE OR WHEN UPDATING THAT INFORMATION WITH Atlantis Utility Inc., INC CUSTOMER SERVICE, E911 COMMUNICATIONS MAY NOT BE DIRECTED TO THE CORRECT LOCAL EMERGENCY OPERATOR.",
  ],
  [
    "LOCATION UPDATING DELAY.",
    "FOLLOWING ANY CHANGE OF AND UPDATE TO CUSTOMER’S PHYSICAL LOCATION IN CUSTOMER’S ACCOUNT REGISTRATION INFORMATION, THERE MAY BE SOME DELAY BEFORE THE AUTOMATIC NUMBER AND LOCATION INFORMATION IS PASSED TO THE LOCAL EMERGENCY SERVICE OPERATOR. THIS INFORMATION IS TYPICALLY POPULATED INTO Atlantis Utility Inc., INC’S NOMADIC E911 DATABASES PRIOR TO SERVICE ACTIVATION, BUT Atlantis Utility Inc., INC CANNOT GUARANTEE THIS TIMING.",
  ],
  [
    "INCOMPATIBILITY WITH SYSTEMS OF OPERATOR.",
    "THE LOCAL EMERGENCY SERVICE OPERATOR RECEIVING Atlantis Utility Inc., INC E911 EMERGENCY SERVICE CALLS MAY NOT HAVE A SYSTEM CONFIGURED FOR E911 SERVICES OR BE ABLE TO CAPTURE AND/OR RETAIN AUTOMATIC NUMBER OR LOCATION INFORMATION. THIS MEANS THAT THE OPERATOR MAY NOT KNOW THE PHONE NUMBER OR PHYSICAL LOCATION OF THE PERSON WHO IS MAKING THE Atlantis Utility Inc., INC E911 CALL. DUE TO TECHNICAL FACTORS IN NETWORK DESIGN, AND IN THE EVENT OF NETWORK CONGESTION ON THE Atlantis Utility Inc., NETWORK, THERE IS A POSSIBILITY THAT AN Atlantis Utility Inc., INC E911 CALL WILL PRODUCE A BUSY SIGNAL OR WILL EXPERIENCE UNEXPECTED ANSWERING WAIT TIMES AND/OR TAKE LONGER TO ANSWER THAN E911 CALLS PLACED VIA TRADITIONAL, LEGACY, CIRCUIT-SWITCHED TELEPHONE NETWORKS.",
  ],
];

export default function TermsPage() {
  return (
    <LegalPage
      path={path}
      title={title}
      description={description}
      numbered
      intro={
        <>
          <h2 className="font-display text-title-lg font-bold">Services &amp; Terms of Agreement</h2>
          <p className="mt-4">
            <strong>SERVICES</strong> The telecommunications services offered by Atlantis
            Utility Inc., under this Agreement are offered pursuant to the Terms of Service
            (TOS) listed on Atlantis Utility Inc., website located at
            www.Atlantisutility.com. The services provided hereunder are offered under, and
            pursuant to, the pricing, terms, conditions and limitations as set forth in such
            tariff. Customer agree to abide by and be bound by the terms and conditions and
            all non-recurring and monthly recurring charges of said tariff and said tariff is
            fully incorporated herein.
          </p>
        </>
      }
      sections={[
        {
          id: "general",
          title: "General",
          body: (
            <ol>
              <li>
                No waiver, alteration or discharge of any of the provisions hereof shall be
                binding unless in writing, and duly signed by the party against whom
                enforcement is sought.
              </li>
              <li>
                Any notice permitted or required, shall be in writing and sent postage paid,
                first class United States mail, to the party for which intended, at the
                address last provided to each party.
              </li>
              <li>
                This is the entire Agreement between the parties and no oral or written
                representation not herein contained shall be binding upon Company unless
                confirmed by a written instrument signed by a duly authorized officer of
                Company.
              </li>
            </ol>
          ),
        },
        {
          id: "disclaimer-of-warranties",
          title: "Disclaimer of Warranties",
          body: (
            <p>
              Except as otherwise stated herein, Company makes no warranty, express or
              implied, with respect to the provision by it of service hereunder, and
              disclaims any express or implied warranty of merchantability or fitness for a
              particular purpose with respect to such services. Further, in no event shall
              Company be liable, and company expressly disclaims any liability for, actual,
              special, incidental, punitive or consequential damages or losses, foreseeable
              or unforeseeable, including, without limitation, lost sales or lost profits,
              which customer (or any of customer’s customers) may suffer as a result of
              Company provision of or failure to provide services, or the use or non-use of
              such services by the customer. Company expressly disclaims any representation
              or warranty regarding any percentage of savings regarding the use of any
              services provided by Company.
            </p>
          ),
        },
        {
          id: "price",
          title: "Price",
          body: (
            <p>
              In addition to monthly fixed charges, Customer will be charged for each call
              made at a price based on call duration and applicable mileage. Rates may be
              changed at any time, through the tariff process, subject to such notice as may
              be required by law. All appropriate sales, excise and other taxes and
              surcharges required by law, state and federal regulation will also apply.
            </p>
          ),
        },
        {
          id: "payment",
          title: "Payment",
          body: (
            <p>
              Payment is due upon receipt of your invoice. Your account is delinquent 20
              days after the date of your invoice. There is no finance charge for services
              performed during a billing period if the balance is paid within 20 days of the
              date shown on the bill for that period. If not paid within the 20-day period, a
              finance charge equal to the current legal rate of interest will be applied to
              all delinquent balances owed to the Company. The amount of the “FINANCE CHARGE”
              for each statement period is computed by applying the “Periodic Rate: to the
              Previous Balance”. The “Periodic Rate” is 1.5% per month, unless otherwise
              indicated by applicable law. The “ANNUAL PERCENTAGE RATE” is 18 percent with a
              minimum $20.00 late fee. Atlantis Utility Inc., INC may change these terms, but
              only by mailing or delivering written notice of such change to you as required
              by applicable law. Continuation thereafter of service by Company shall be
              subject to the approval of Atlantis Utility Inc., INC credit department and may
              require payments in advance, deposits or other guarantees to satisfy Company
              that invoices will be paid when due. Either party to this Agreement may cancel
              upon written notice to the other party except that the Company may suspend
              service to the customer at any time for non-payment. Company will charge a
              $20.00 fee for any returned check. Customer is liable for all fixed charges (if
              any) that continue to bill regardless of actual long distance usage amount,
              until Customer specifically notifies Company of service cancellation. In the
              event service is suspended or disconnected, a reconnection fee for the
              continuation of service equal to the original connection fee (or $50.00,
              whichever is greater) may be charged.
            </p>
          ),
        },
        {
          id: "termination-charges",
          title: "Termination Charges",
          body: (
            <>
              <p>
                (a) In the case of a term commitment, if Service is terminated prior to the
                end of the term of this Agreement, the termination charge shall be equal to
                the average monthly billing for service (or the committed usage, whichever is
                greater) times the number of months remaining in the term of the Agreement.
              </p>
              <p>
                (b) If Customer or Atlantis Utility Inc. terminates this Agreement and a
                termination charge is due pursuant to the Agreement, Atlantis Utility Inc.,
                INC shall compute the termination charges, as set forth above, and render a
                bill to Customer.
              </p>
            </>
          ),
        },
        {
          id: "modification",
          title: "Modification",
          body: (
            <p>
              This Agreement may be modified, amended or changed by the Company as provided
              herein and by Customer only upon written notification to the Company and
              Company’s written agreement bound by any such proposed modification, amendment
              or change.
            </p>
          ),
        },
        {
          id: "customer-id-numbers",
          title: "Customer I.D. Numbers",
          body: (
            <p>
              All calls billed to Customer’s I.D. Number become the sole responsibility of
              Customer. Use of Authorization Code constitutes acceptance of terms and
              conditions.
            </p>
          ),
        },
        {
          id: "interpretation",
          title: "Interpretation",
          body: (
            <p>
              It is expressly understood that this Agreement contains all terms, covenants,
              conditions and agreements between the parties hereto relating to the subject
              matter of the Agreement and that no prior agreements, understanding or
              representations, either oral or written pertaining to the same shall be valid
              or of any force or effect. The Language in all parts of this Agreement shall be
              in all cases construed according to its fair meaning and not strictly for or
              against any of the parties hereto.
            </p>
          ),
        },
        {
          id: "attorneys-fee",
          title: "Attorney’s Fee",
          body: (
            <p>
              Should any party or parties hereto institute any action or proceeding to
              enforce or interpret any term or provision hereof, or for damages by reason of
              any default hereunder or for any other judicial remedies, the prevailing party
              or parties shall be entitled to reimbursement from the non prevailing party or
              parties of the prevailing party’s or parties’ reasonable attorney’s fees and
              cost, including on any appeal, as determined by a court of competent
              jurisdiction.
            </p>
          ),
        },
        {
          id: "assignment",
          title: "Assignment",
          body: (
            <p>
              This Agreement shall be binding upon and inure to the benefit of the personal
              and legal representatives, successors, and assigns of the parties and also upon
              the heirs, executors and administrators of any individuals executing this
              Agreement. This Agreement may not be assigned by the Customer without the prior
              consent of the Company, which will not be unreasonably withheld.
            </p>
          ),
        },
        {
          id: "credits",
          title: "Credits",
          body: (
            <p>
              Upon Customer request, a credit equivalent to the actual charge for the call up
              to 1 minute in length will be applied for a wrong number, except for customers
              with 800 service (see “800 Service Disclaimer”), or for a call associated with
              a Company network problem. However, the calling party must request the credit
              immediately be calling your Customer Service Representative.
            </p>
          ),
        },
        {
          id: "800-service-disclaimers",
          title: "800 Service Disclaimers",
          body: (
            <p>
              Because an 800 number is generally available to the public, Company is not
              responsible for misdialed numbers or incorrect advertising of our customer’s
              800 number by other person’s or companies, and credit will not be given for
              these reasons. Pay phone surcharges apply.
            </p>
          ),
        },
        {
          id: "collect-calls",
          title: "Collect Calls",
          body: (
            <p>
              Customer will be responsible for any charges related to receiving or accepting
              collect calls.
            </p>
          ),
        },
        {
          id: "international-or-caribbean-calls",
          title: "International or Caribbean Calls",
          body: (
            <p>
              Customer will be responsible for any international or Caribbean calls made at a
              reasonable rate to be determined by Atlantis Utility Inc..
            </p>
          ),
        },
        {
          id: "term",
          title: "Term",
          body: (
            <p>
              The Term of this agreement shall begin on the date the service is installed.
              Following the expiration of the initial term, the Agreement shall become A
              MONTH TO MONTH term. Month to Month terms are subject to rate increases. To
              avoid rate increase, please contact your sales representative. Customer must
              provide fourty five (45) days prior written notice of intent not continue
              services. By signing this form, you agree to pay all charges incurred on my
              Atlantis Utility Inc., INC account, including any applicable Federal, State or
              Local use, excise tax, sales tax and privilege taxes, duties, equipment costs or
              similar liabilities by the stated due date and to adhere to all of the terms
              and conditions set forth in this agreement and all applicable tariff(s).
            </p>
          ),
        },
        {
          id: "applicable-law",
          title: "Applicable Law",
          body: (
            <p>
              This Agreement shall be governed under the laws of the state of California;
              Customer agrees to judicial venue in Ventura County. This agreement and all
              rates, services and products provided hereunder is made subject to all present
              and future valid orders and regulations of and tariffs filed with any regulatory
              body having jurisdiction over the subject matter hereof, and to the laws of the
              United States, and of its states, or any foreign governmental agency having
              jurisdiction. In the event this Agreement, or any of its provisions, shall be
              contrary to or in this Agreement shall be deemed modified to the extent
              necessary to comply with any such order, rule, regulation or law materially
              affects the rights of either party hereunder, then this Agreement may be
              terminated upon written notice by one party to the other party.
            </p>
          ),
        },
        {
          id: "unlimited-features",
          title: "Unlimited Features for Hosted Services",
          body: (
            <p>
              Services that offer Unlimited Features are for reasonable business use, and any
              use in excess of two times (2x) the average monthly usage of all Atlantis
              Utility Inc., INC customers using the same hosted services shall be presumed to
              be unreasonable. In the event of Customer’s unreasonable business use of such
              Unlimited Features, Atlantis Utility Inc., INC may in its sole discretion (a)
              place reasonable limitations or restrictions on Customer’s use of such Unlimited
              Features; and/or (b) suspend or terminate the Services provided to Customer.
              “Unlimited Features” means unlimited plans, features or functionality,
              including without limitation unlimited minutes, calling destinations, text
              messages, call queues and data storage, included in an applicable service.
            </p>
          ),
        },
        {
          id: "letter-of-agency",
          title: "Letter of Agency",
          body: (
            <p>
              My signature on this document authorizes Atlantis Utility Inc. to act as my
              service provider for the purpose of ordering, changing, and/or maintaining
              communication services listed on the Quote form, including but not limited to
              local exchange, interstate, intraLATA and/or interLATA telephone services.
              Atlantis Utility Inc., INC is also authorized to obtain billing information,
              customer service records and other network information required to provide my
              telecommunications services. I authorize Atlantis Utility Inc., INC, to unblock
              my carrier choice service protection to make the change to Atlantis Utility
              Inc., possible. I understand that I may designate only one primary
              interexchange carrier for any one telephone number for intraLATA and interLATA
              usage. I further understand that a charge may apply for moving onto or off of
              my current provider. I am at least 18 years of age and am authorized to change
              service providers. I understand that the services provided to me are subject to
              credit approval.
            </p>
          ),
        },
        {
          id: "e911",
          title: "E911 Characteristics and Limitations",
          body: (
            <>
              <p>
                CUSTOMER ACKNOWLEDGES THAT Atlantis Utility Inc., E911 SERVICE HAS CERTAIN
                CHARACTERISTICS THAT DISTINGUISH IT FROM TRADITIONAL, LEGACY, CIRCUIT-SWITCHED
                911 SERVICE. THESE CHARACTERISTICS MAY MAKE Atlantis Utility Inc., INC E911
                SERVICES UNSUITABLE FOR SOME CUSTOMERS. CUSTOMER ACKNOWLEDGES THAT IT IS
                CUSTOMER’S RESPONSIBILITY TO DETERMINE THE TECHNOLOGY OR COMBINATION OF
                TECHNOLOGIES BEST SUITED TO MEET CUSTOMER’S EMERGENCY CALLING NEEDS, AND TO
                MAKE THE NECESSARY PROVISIONS FOR ACCESS TO EMERGENCY CALLING SERVICES (SUCH
                AS MAINTAINING A CONVENTIONAL LANDLINE PHONE OR WIRELESS PHONE AS A BACKUP
                MEANS OF COMPLETING EMERGENCY CALLS).
              </p>
              <p>
                IN ADDITION TO THE LIMITATIONS SET FORTH ABOVE, THE FOLLOWING ARE SOME OF THE
                KEY CHARACTERISTICS THAT DISTINGUISH Atlantis Utility Inc., INC’S E911 SERVICE
                FROM TRADITIONAL, LEGACY, CIRCUIT-SWITCHED 911 SERVICE:
              </p>
              <ul>
                {e911.map(([label, text]) => (
                  <li key={label}>
                    <strong>{label}</strong> {text}
                  </li>
                ))}
              </ul>
            </>
          ),
        },
        {
          id: "sms-mms-messaging",
          title: "SMS/MMS Messaging Terms",
          body: (
            <p>
              When you opt-in to receive SMS/MMS from Atlantis Utility, you agree to receive
              account notifications, service reminders, and customer support messages.
              Frequency may vary. Msg &amp; Data Rates may apply. Text STOP to opt-out. Text
              HELP for help or reach us at <a href="tel:+18056582329">(805) 658-2329</a> or{" "}
              <a href="mailto:ticket@atlantisutility.com">ticket@atlantisutility.com</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
