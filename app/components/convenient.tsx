import Image from "next/image"





export default function Convenient() {




    const convenientCards = [
        {
            heading: "Earn competitive yield on crypto",
            content: "Put your savings to work by earning passive income through staking and lending, maximizing your returns over time."
        },

        {
            heading: "Secure & Decentralized",
            content: "Your funds remain in non-custodial smart contracts, ensuring full transparency, security, and control over your savings."
        }
        ,

        {
            heading: "Get Rewarded for Saving & Referring Friends",
            content: "Earn bonuses, referral incentives, and unlock higher savings rewards the longer you stay committed."
        }
    ]





    return (


        <section className=" w-full bg-[#1C1A1E] px-5 md:px-10 py-16 flex flex-col items-center justify-center gap-14 md:gap-30 relative overflow-hidden " >
            <div className="max-w-screen-2xl w-full" >


                <h1 className="text-[#FBF8FF] font-medium md:text-[32px] text-center max-w-[550px] text-[25px] z-10 font-display " >One convenient interface tailored
                    For you</h1>




                <div className=" w-full flex flex-col items-start justify-evenly gap-16 z-10     "  >


                    {
                        convenientCards.map((convenientCard, index) => (
                            <div key={index} className={`flex items-center justify-center gap-5  md:gap-[42px] max-w-[825.91px] py-2 px-5   ${index + 1 === 2 ? "ml-auto" : "null"} `}   >

                                <span className=" font-display flex items-center justify-center bg-[#6D72C3] min-w-[70px] min-h-[70px] lg:min-w-[150px] lg:min-h-[150px] rounded-full text-[#F6F7FF] font-medium text-4xl lg:text-[52px] shadow-[inset_17px_17px_25.8px_0px_#33344340,inset_0px_4px_4px_0px_#00000040] " >
                                    {index + 1}
                                </span>

                                <div className=" flex flex-col items-start justify-between gap-6 " >
                                    <h2 className="text-[#FFFFFFCC] font-medium text-xl md:text-2xl font-display "  > {convenientCard.heading} </h2>
                                    <p className=" text-[#FFFFFFB2] font-medium text-lg md:text-2xl max-w-[599px] font-heading "  > {convenientCard.content} </p>
                                </div>
                            </div>
                        ))
                    }

                </div>



                <div className=" w-full max-w-[683.27px] h-full flex items-center justify-center absolute bottom-[-30px] right-0 z-0  " >


                    <Image src={"/abstract-right.svg"} height={100} width={100} alt="abstract" className=" w-full h-full " />

                </div>


                <div className=" w-full max-w-[683.27px] h-full flex items-center justify-center  absolute bottom-[-100px] left-0 z-0  " >


                    <Image src={"/abstract-left.svg"} height={100} width={100} alt="abstract" className=" w-full h-full " />

                </div>

            </div>
        </section>

    )
}
