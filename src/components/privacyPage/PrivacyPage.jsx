import Footer from "../footer/Footer";
import Header from "../header/Header";

const PrivacyPage = () => {
  return (
    <>
      <div>
        <Header />
        <div className="py-3">
            <center><h1 className="text-4xl py-5 font-bold tracking-wider text-gray-500 w-fit rounded-lg shadow-lg shadow-violet-400">Privacy Policy</h1></center>
            <div className="lg:px-[100px] md:px-[50px] sm:px-[25px] px-[20px] py-10 ">

                <h6 className="text-xl">Effective Date: May 21, 2024</h6> <br />
                
                <p className="leading-10 tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni esse libero eos eius molestiae used for common access to many of our Services. Personal information collected on the Sites includes community forum content, profiles, photographs, names, unique identifiers (e.g., social media handles or usernames), contact and billing information (e.g., email address, postal address, telephone, fax), and transaction information. In order to access certain personalized services on the Sites, you may be asked to also create and store a username and password for an account from The Linux Foundation.  Also, in order to tailor subsequent communications to users and continuously improve the Sites’ operations and services, OpenJS Foundationmay also ask users to provide additional optional information regarding their interests, demographics, experience and detailed contact preferences.</p> <br />
                
                <ul className="leading-10 tracking-wide text-xl space-y-6">
                    <li> <span className="text-2xl font-bold text-[#BFC9CA]"> Introduction: </span> A brief overview of the purpose of the privacy policy and its importance in relation to your website or service.</li>
                    <li> <span className="text-2xl font-bold text-[#BFC9CA]">Information Collection: </span> Explain what types of information you collect from visitors or users, such as personal information (names, email addresses, etc.), usage data (cookies, IP addresses, etc.), or any other relevant data.</li>
                    <li> <span className="text-2xl font-bold text-[#BFC9CA]">Use of Information: </span> Describe how you use the collected information. For example, to provide services, improve user experience, personalize content, or for marketing purposes.</li>
                    <li> <span className="text-2xl font-bold text-[#BFC9CA]"> Data Security: </span> Assure users about the security measures you take to protect their information from unauthorized access, misuse, or alteration.</li>
                    <li> <span className="text-2xl font-bold text-[#BFC9CA]">Third-party Disclosure:</span> Mention if and how you share users' information with third parties, such as service providers, advertisers, or business partners.</li>
                    <li> <span className="text-2xl font-bold text-[#BFC9CA]">User Rights:</span> Inform users about their rights regarding their personal data, such as the right to access, correct, or delete their information.</li>
                    <li> <span className="text-2xl font-bold text-[#BFC9CA]">Policy Updates:</span> State that the privacy policy may be updated from time to time, and how users will be notified of any changes. </li>
                    <li><span className="text-2xl font-bold text-[#BFC9CA]">Contact Information:</span> Provide contact details for users to reach out to you with questions or concerns about their privacy or the policy itself.</li><br />
                    <li className="leading-10 tracking-widest">Remember, while these are basic elements, it's important to tailor your privacy policy to accurately reflect your specific data practices and legal requirements. It's always a good idea to seek legal counsel to ensure compliance with relevant laws and regulations.</li>
                    <li className="text-green-400">Demo Text</li>
                </ul>
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;
