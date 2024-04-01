import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
const loans = [
  {
    SectorName: "a",
    InstiutionName: "instit",
    schemeName: "scheme",
    EstimatedLoanAmount: 2323,
    ApplyLink: "kssjlsj",
  },
  {
    SectorName: "b",
    InstiutionName: "instit",
    schemeName: "scheme",
    EstimatedLoanAmount: 2323,
    ApplyLink: "kssjlsj",
  },
  {
    SectorName: "c",
    InstiutionName: "instit",
    schemeName: "scheme",
    EstimatedLoanAmount: 2323,
    ApplyLink: "kssjlsj",
  },
  {
    SectorName: "d",
    InstiutionName: "instit",
    schemeName: "scheme",
    EstimatedLoanAmount: 2323,
    ApplyLink: "kssjlsj",
  },
];

const LoanInfoCard = (loanInfo) => {
  return (
    // <div>

    // <div/>
    <p>Write your code here</p>
  );
};

const Info = () => {
  <>
    <p> This is Info Page</p>
    <Header />
    {loans.map((loanInof) => LoanInfoCard(loanInof))}
    <NavBar />
  </>;
};

export default Info;
