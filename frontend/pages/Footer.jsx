import React from "react";

const Footer = () => {
  return (
    <div className="w-screen border-t-2 border-gray-200 pt-8 bg-gray-100">
      <div className="flex px-54">
        <div className="h-1/4 pr-12">
          <h1 className="text-blue-500 text-2xl font-serif font-bold px-2 mb-2">
            ZENTRA
          </h1>

          <p>© 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>

          
        </div>

        <div className="w-1/4 ">
          <h1 className="font-semibold text-xl mb-2">Account</h1>

          <ul className="text-gray-500 flex flex-col gap-2">
            <li>Open demat account</li>
            <li>Minor demat account</li>
            <li>NRI demat account</li>
            <li>Commodity</li>
            <li>Dematerialisation</li>
            <li>Fund transfer</li>
            <li>MTF</li>
            <li>Referral program</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h1 className="font-semibold text-xl mb-2">Support</h1>

          <ul className="text-gray-500 flex flex-col gap-2">
            <li>Contact us</li>
            <li>Support portal</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
            <li>Bulletin</li>
            <li>Circular</li>
            <li>Z-Connect blog</li>
            <li>Downloads</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h1 className="font-semibold text-xl mb-2">Company</h1>

          <ul className="text-gray-500 flex flex-col gap-2">
            <li>About</li>
            <li>Philosophy</li>
            <li>Press & media</li>
            <li>Careers</li>
            <li>Zerodha Cares CSR</li>
            <li>Zerodha.tech</li>
            <li>Open source</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-500 text-xs flex flex-col gap-4 px-54 mt-12">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
          Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
          560078, Karnataka, India. For any complaints pertaining to securities
          broking please write to complaints@zerodha.com, for DP related to
          dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          India's largest broker based on networth as per NSE. NSE broker
          factsheet
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
        <p>
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>
      </div>
    </div>
  );
};

export default Footer;
