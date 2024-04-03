import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
const loans = [
{
  SectorName: "Private sector",
  InstiutionName: "HDFC Bank",
  schemeName: "Kisan Gold Card Scheme",
  EstimatedLoanAmount: 300000,
  ApplyLink: "https://www.hdfcbank.com/personal/products/loans/agricultural-loans/kisan-gold-card",
},
{
  SectorName: "Private Sector",
  InstiutionName: "ICICI Bank",
  schemeName: "Agri Gold Loan",
  EstimatedLoanAmount: 1000000,
  ApplyLink: "https://www.icicibank.com/agri-gold-loan/index.html",
},
{
  SectorName: "Private Sector",
  InstiutionName: "Axis Bank",
  schemeName: "Krishi Loan",
  EstimatedLoanAmount: 2000000,
  ApplyLink: "https://www.axisbank.com/retail/loans/agriculture-loans",
},
{
  SectorName: "Government",
  InstiutionName: "NABARD",
  schemeName: "Dairy Entrepreneurship Development Scheme (DEDS)",
  EstimatedLoanAmount: "Varies based on project",
  ApplyLink: "https://www.nabard.org/schemes.aspx?cid=545&id=71",
},
{
  SectorName: "Government",
  InstiutionName: "Pradhan Mantri Mudra Yojana",
  schemeName: "Shishu, Kishor, and Tarun Loans",
  EstimatedLoanAmount: "₹50,000 - ₹10,00,000",
  ApplyLink: "https://www.mudra.org.in/",
},
{
  SectorName: "Government",
  InstiutionName: "Kisan Credit Card (KCC)",
  schemeName: "Kisan Credit Card Scheme",
  EstimatedLoanAmount: "Up to ₹3,00,000",
  ApplyLink: "Contact nearest bank branch",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "National Cooperative Development Corporation (NCDC)",
  schemeName: "Agriculture Processing and Marketing Financial Assistance (APMFA)",
  EstimatedLoanAmount: "Varies based on project",
  ApplyLink: "https://www.ncdc.in/",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "State Co-operative Banks",
  schemeName: "Various Loan Schemes",
  EstimatedLoanAmount: "Varies based on scheme",
  ApplyLink: "Contact nearest branch of State Co-operative Bank",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "District Co-operative Banks",
  schemeName: "Crop Loan Scheme",
  EstimatedLoanAmount: "Varies based on requirement",
  ApplyLink: "Contact nearest branch of District Co-operative Bank",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "Kerala State Cooperative Bank",
  schemeName: "Agri Gold Loan Scheme",
  EstimatedLoanAmount: "Up to ₹5,00,000",
  ApplyLink: "https://keralacobank.com/agri-loan.html",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "Karnataka State Co-operative Apex Bank Limited",
  schemeName: "Crop Loan Scheme",
  EstimatedLoanAmount: "Varies based on requirement",
  ApplyLink: "https://www.karnatakaapex.com/loan-schemes",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "Bihar State Co-operative Bank",
  schemeName: "Kisan Credit Card Scheme",
  EstimatedLoanAmount: "Up to ₹3,00,000",
  ApplyLink: "https://biharbank.bih.nic.in/",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "Rajasthan State Cooperative Bank",
  schemeName: "Kisan Credit Card Scheme",
  EstimatedLoanAmount: "Up to ₹3,00,000",
  ApplyLink: "https://www.rscb.org.in/",
},
{
  SectorName: "Government",
  InstiutionName: "Pradhan Mantri Fasal Bima Yojana",
  schemeName: "Crop Insurance Scheme",
  EstimatedLoanAmount: "Coverage varies based on crop and location",
  ApplyLink: "https://pmfby.gov.in/",
},
{
  SectorName: "Government",
  InstiutionName: "Pradhan Mantri Krishi Sinchai Yojana",
  schemeName: "Micro Irrigation Scheme",
  EstimatedLoanAmount: "Subsidy available on installation cost",
  ApplyLink: "http://pmksy.gov.in/micro-irrigation.aspx",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "Andhra Pradesh State Cooperative Bank",
  schemeName: "Seed Capital Assistance Scheme",
  EstimatedLoanAmount: "Up to ₹2,00,000",
  ApplyLink: "https://www.apcob.org/",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "Madhya Pradesh State Cooperative Bank",
  schemeName: "Agriculture Investment Loan Scheme",
  EstimatedLoanAmount: "Up to ₹10,00,000",
  ApplyLink: "https://apexbank.mponline.gov.in/portal/",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "Maharashtra State Cooperative Bank",
  schemeName: "Agri Term Loan Scheme",
  EstimatedLoanAmount: "Varies based on requirement",
  ApplyLink: "https://www.mscbank.com/MSBLnew/productsservices/loans.aspx",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "Odisha State Cooperative Bank",
  schemeName: "Agri Gold Loan Scheme",
  EstimatedLoanAmount: "Up to ₹5,00,000",
  ApplyLink: "https://www.odishascb.com/agri-loan.html",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "Punjab State Cooperative Agricultural Development Bank",
  schemeName: "Agri Term Loan Scheme",
  EstimatedLoanAmount: "Varies based on requirement",
  ApplyLink: "http://www.agribankpunjab.org/PDF/FAQ%20and%20User%20Manual.pdf",
},
{
  SectorName: "Co-operatives",
  InstiutionName: "Telangana State Cooperative Apex Bank Limited",
  schemeName: "Crop Loan Scheme",
  EstimatedLoanAmount: "Varies based on requirement",
  ApplyLink: "https://tscab.org/",
},
];

const LoanInfoCard = (loanInfo) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{loanInfo.InstiutionName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{loanInfo.SectorName}</h6>
        <p className="card-text">Scheme: {loanInfo.schemeName}</p>
        <p className="card-text">Estimated Loan Amount: {loanInfo.EstimatedLoanAmount}</p>
        <a href={loanInfo.ApplyLink} className="card-link">Apply Now</a>
      </div>
    </div>
  );
};

const LoanCardList = ({ loans }) => {
  return (
    <div className="container">
      {loans.map((loan) => (
        <div key={loan.InstiutionName} className="row mt-3">
           
            <LoanInfoCard {...loan} />
           
        </div>
      ))}
    </div>
  );
};

const Info = () => {
  return (
    <>
      <p>This is Info Page</p>
      <Header />
      <LoanCardList loans={loans} />
      <NavBar />
    </>
  );
};

export default Info;
