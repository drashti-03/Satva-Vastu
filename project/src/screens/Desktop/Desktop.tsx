import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Data for services section
const services = [
  {
    id: 1,
    title: "OFFICE VASTU",
    description:
      "Your office can easily be transformed into a comfy place for employees to work in!",
    image: "public/rectangle-86.png",
  },
  {
    id: 2,
    title: "RESIDENTIAL VASTU",
    description:
      "Create a warm, welcoming home filled with peace and positivity!",
    image: "public/rectangle-86-2.png",
  },
  {
    id: 3,
    title: "FACTORY VASTU",
    description: "Boost factory energy for growth and success.",
    image: "public/rectangle-86-4.png",
  },
  {
    id: 4,
    title: "HEALTH",
    description: "Reach out for guidance on enhancing health in your space.",
    image: "public/rectangle-86-1.png",
  },
  {
    id: 5,
    title: "WEALTH",
    description: "Attract prosperity and wellness into your living space.",
    image: "public/rectangle-86-3.png",
  },
];

// Data for Vastu Shastra benefits
const vastuBenefits = [
  "Ancient practice of harmonizing living spaces",
  "Balance of five elements: earth, water, fire, air, space",
  "Creating environments for health and prosperity",
];

// Data for Satva gunas information
const satvaInfo = [
  "Three gunas: Tamas, Rajas, and Satva are present in all beings and surroundings",
  "Each guna varies in level, shaping qualities of mind and body",
  "Humans are uniquely capable of consciously adjusting guna levels",
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] overflow-hidden border border-solid border-[#000000] w-[1440px] relative">
        {/* Hero Section */}
        <section className="relative w-full h-[920px]">
          <img
            className="absolute w-full h-[920px] top-0 left-0"
            alt="Background"
            src="public/rectangle-3.svg"
          />

          <div className="absolute w-[960px] top-[313px] left-[672px] [font-family:'Playfair_Display',Helvetica] font-bold text-[#1b1642] text-7xl tracking-[0] leading-[normal]">
            Harmonizing Spaces <br />
            Energizing Lives
          </div>

          <div className="absolute w-[1165px] h-[100px] top-[17px] left-[150px] bg-[#ffffffcc] rounded-[20px]" />

          <div className="absolute w-[562px] h-[85px] top-[17px] left-[574px]">
            <div className="w-[90px] h-[85px] absolute top-0 left-0">
              <div className="relative h-[85px]">
                <img
                  className="absolute w-10 h-[38px] top-0 left-6"
                  alt="Vector"
                  src="public/vector-3-1.svg"
                />
                <img
                  className="absolute w-9 h-[37px] top-[18px] left-0"
                  alt="Vector"
                  src="public/vector-4.svg"
                />
                <img
                  className="absolute w-[41px] h-[34px] top-[50px] left-2"
                  alt="Vector"
                  src="public/vector-5.svg"
                />
                <img
                  className="absolute w-8 h-[34px] top-[51px] left-[43px]"
                  alt="Vector"
                  src="public/vector-6-1.svg"
                />
                <img
                  className="absolute w-10 h-[37px] top-[19px] left-[50px]"
                  alt="Vector"
                  src="public/vector-7-2.svg"
                />
                <div className="absolute w-3.5 h-[13px] top-[38px] left-9 bg-[#fdeb02] rounded-[7.06px/6.7px]" />
              </div>
            </div>

            <div className="absolute w-[470px] top-[61px] left-[90px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#000000] text-lg tracking-[0] leading-[normal]">
              Health |&nbsp;&nbsp;Wealth&nbsp;&nbsp;|&nbsp;&nbsp;Prosperity
            </div>

            <img
              className="absolute w-[222px] h-[3px] top-[53px] left-[90px]"
              alt="Line"
              src="public/line-1.png"
            />

            <img
              className="absolute w-[235px] h-[37px] top-[13px] left-[90px]"
              alt="Logo"
              src="public/group-240.svg"
            />
          </div>

          <img
            className="absolute w-[445px] h-[573px] top-[202px] left-[154px] object-cover"
            alt="Interior design"
            src="public/unsplash-7pcfuybp-p8.svg"
          />

          <div className="absolute flex gap-6 top-[608px] left-[684px]">
            <Button className="h-[59px] w-[217px] bg-[#1b1642] rounded-[3px] border-2 border-solid border-[#263238] shadow-[0px_4px_4px_#00000040] text-[#ffffff] text-[28px] font-medium">
              Contact Now
            </Button>

            <Button
              className="h-[59px] w-[244px] bg-transparent border border-[#1b1642] text-[#1b1642] text-[28px] font-medium"
              variant="outline"
            >
              Our Services
            </Button>
          </div>
        </section>

        {/* What is Vastu Shastra Section */}
        <section className="mt-20 px-[150px]">
          <h2 className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-[#1b1642] text-[64px] tracking-[0] leading-[normal]">
            What is Vastu Shastra?
          </h2>

          <div className="flex mt-8">
            <img
              className="w-[431px] h-[417px] object-cover"
              alt="Vastu diagram"
              src="public/unnamed-2.svg"
            />

            <div className="ml-[137px]">
              <h3 className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-[#1b1642] text-[38px] tracking-[0] leading-[normal]">
                Where Luxury Meets Harmony
              </h3>

              <div className="mt-6">
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#000000] text-[22px] tracking-[0] leading-[35px]">
                  <span className="font-bold">Vastu Shastra</span> aims to
                </div>

                <ul className="mt-4 space-y-4">
                  {vastuBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <img
                        className="w-6 h-6 mt-[9px] mr-2"
                        alt="Arrow"
                        src="public/angle-arrow-right.svg"
                      />
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000] text-[22px] tracking-[0] leading-[35px]">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <div className="w-[361px]">
                  <div className="flex items-center">
                    <img
                      className="w-[19px] h-3.5"
                      alt="Vector"
                      src="public/vector-3.svg"
                    />
                    <span className="ml-3 [font-family:'Inter',Helvetica] font-normal text-[#000000] text-[22px] tracking-[0] leading-[33px]">
                      provide a sense of balance
                    </span>
                  </div>

                  <div className="flex items-center mt-4">
                    <img
                      className="w-[18px] h-3.5"
                      alt="Vector"
                      src="public/vector-3.svg"
                    />
                    <span className="ml-3 [font-family:'Inter',Helvetica] font-normal text-[#000000] text-[22px] tracking-[0] leading-[33px]">
                      enhance positive energy flow
                    </span>
                  </div>

                  <div className="flex items-center mt-4">
                    <img
                      className="w-[18px] h-3.5"
                      alt="Vector"
                      src="public/vector-3.svg"
                    />
                    <span className="ml-3 [font-family:'Inter',Helvetica] font-normal text-[#000000] text-xl tracking-[0] leading-[33px]">
                      peace and abundance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What does Satva mean Section */}
        <section className="mt-20 px-[150px]">
          <h2 className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-[#1b1642] text-[64px] tracking-[0] leading-[normal]">
            What does Satva mean?
          </h2>

          <div className="flex mt-8">
            <div className="w-[543px] [font-family:'Inter',Helvetica] font-normal text-[#000000] text-[22px] text-justify tracking-[0] leading-[35px]">
              Meaning of Satva is the tendency towards selfless service and
              satisfaction with life. Satva looks after growth, love and the
              higher mind. Its direction is upward. It is responsible for
              equilibrium, harmony, peace and knowledge. The Satva guna also
              represents tranquilly, balance and pure intelligence.
              <ul className="mt-8 space-y-4">
                {satvaInfo.map((info, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      className="w-6 h-6 mt-[9px] mr-2"
                      alt="Arrow"
                      src="public/angle-arrow-right.svg"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000] text-[22px] tracking-[0] leading-[35px]">
                      {info}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ml-[97px] w-[575px]">
              <div className="relative w-[569px] h-[389px]">
                <img
                  className="absolute w-[141px] h-[191px] top-0 left-0"
                  alt="Gunas"
                  src="public/gunas-1.png"
                />
                <div className="absolute w-[109px] h-[123px] top-[222px] left-3.5 bg-[#f6d789] rounded-[54.68px/61.72px]" />

                <div className="absolute w-40 h-[197px] top-48 left-[214px]">
                  <div className="relative h-[197px]">
                    <div className="absolute w-[109px] h-[123px] top-[30px] left-[7px] bg-[#ce510e] rounded-[54.68px/61.72px]" />
                    <div className="absolute w-[109px] h-[123px] top-[74px] left-0 rounded-[54.68px/61.72px] border-2 border-solid border-[#e76928] [background:linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%)]" />
                    <div className="absolute w-[127px] h-[136px] top-0 left-[34px] rounded-[63.34px/67.95px] border-2 border-solid border-[#e76928] [background:linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%)]" />
                  </div>
                </div>

                <div className="absolute w-[181px] h-[189px] top-[200px] left-[387px]">
                  <div className="relative h-[189px]">
                    <div className="absolute w-[109px] h-[123px] top-[22px] left-[31px] bg-[#864601] rounded-[54.68px/61.72px]" />
                    <div className="absolute w-[120px] h-[132px] top-[43px] left-[61px] rounded-[60.15px/65.87px] border-2 border-solid border-[#a36529] [background:linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%)]" />
                    <div className="absolute w-[121px] h-[134px] top-10 left-0 rounded-[60.61px/66.91px] border-2 border-solid border-[#a36529] [background:linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%)]" />
                    <div className="absolute w-[109px] h-[123px] top-[65px] left-[38px] rounded-[54.68px/61.72px] border-2 border-solid border-[#a36529] [background:linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%)]" />
                    <div className="absolute w-[124px] h-[145px] top-0 left-[38px] rounded-[61.98px/72.61px] border-2 border-solid border-[#a36529] [background:linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%),linear-gradient(0deg,rgba(217,217,217,0)_0%,rgba(217,217,217,0)_100%)]" />
                  </div>
                </div>

                <img
                  className="absolute w-[141px] h-[190px] top-0.5 left-[198px]"
                  alt="Gunas"
                  src="public/gunas-2.png"
                />

                <img
                  className="absolute w-[142px] h-[191px] top-1.5 left-[399px]"
                  alt="Gunas"
                  src="public/gunas-3.png"
                />
              </div>

              <div className="flex justify-between mt-4">
                <div className="w-[72px] [font-family:'Inter',Helvetica] font-extrabold text-[#000000] text-xl tracking-[0] leading-[33px]">
                  SATVA
                </div>

                <div className="w-[72px] [font-family:'Inter',Helvetica] font-extrabold text-[#000000] text-xl tracking-[0] leading-[33px]">
                  RAJAS
                </div>

                <div className="w-[88px] [font-family:'Inter',Helvetica] font-extrabold text-[#000000] text-xl tracking-[0] leading-[33px]">
                  TAMAS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="mt-20 relative">
          <div className="w-full h-[1706px] relative">
            <img
              className="w-full h-full"
              alt="Background"
              src="public/rectangle-7.png"
            />

            <div className="absolute top-[104px] left-0 w-full flex justify-center">
              <h2 className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-[#1b1642] text-7xl tracking-[0] leading-[normal]">
                About Us
              </h2>
            </div>

            <div className="absolute top-[134px] left-[146px] w-[507px] h-[542px]">
              <div className="relative h-[542px]">
                <div className="absolute w-[457px] h-[459px] top-[83px] left-[9px]">
                  <div className="relative w-[454px] h-[460px] left-0.5">
                    <div className="absolute w-[401px] h-[354px] top-0 left-[27px]">
                      <div className="relative h-[354px]">
                        <div className="absolute w-[94px] h-[93px] top-[262px] left-[252px] rotate-[-0.22deg]">
                          <div className="relative w-[102px] h-[101px] -top-1 -left-1 rounded-[50.95px/50.28px] border-4 border-solid border-[#1d1844]">
                            <img
                              className="absolute w-[59px] h-[78px] top-[7px] left-[17px] rotate-[0.22deg]"
                              alt="Vector"
                              src="public/vector-2.svg"
                            />
                          </div>
                        </div>

                        <div className="absolute w-[94px] h-[93px] top-0 left-[168px]">
                          <div className="relative w-[102px] h-[101px] -top-1 -left-1 rounded-[50.95px/50.28px] border-4 border-solid border-[#202020]">
                            <img
                              className="absolute w-[47px] h-[62px] top-3 left-[22px]"
                              alt="Water drop"
                              src="public/water-drop--streamline-sharp-svg.png"
                            />
                          </div>
                        </div>

                        <div className="absolute w-[94px] h-[93px] top-[262px] left-[65px]">
                          <div className="relative w-[102px] h-[101px] -top-1 -left-1 rounded-[50.95px/50.28px] border-4 border-solid border-[#1b1642]">
                            <img
                              className="absolute w-[76px] h-[75px] top-[9px] left-[9px]"
                              alt="Earth"
                              src="public/earth-1--streamline-plump-svg.png"
                            />
                          </div>
                        </div>

                        <div className="absolute w-[94px] h-[93px] top-[110px] left-[307px]">
                          <div className="relative w-[102px] h-[101px] -top-1 -left-1 rounded-[50.95px/50.28px] border-4 border-solid border-[#1d1844]">
                            <img
                              className="absolute w-[74px] h-[60px] top-2.5 left-2.5"
                              alt="Log"
                              src="public/log--streamline-core-svg.png"
                            />
                          </div>
                        </div>

                        <div className="absolute w-[94px] h-[93px] top-[109px] left-3.5 rotate-[22.02deg]">
                          <div className="relative w-[109px] h-[106px] top-[-9px] left-[-9px]">
                            <div className="absolute w-[102px] h-[101px] top-[5px] left-[5px] rounded-[50.85px/50.38px] border-4 border-solid border-[#1d1844]" />
                            <img
                              className="absolute w-[87px] h-[75px] top-3.5 left-[11px] rotate-[-22.02deg]"
                              alt="Metal"
                              src="public/metal.png"
                            />
                          </div>
                        </div>

                        <div className="absolute w-[243px] h-[249px] top-[61px] left-[99px]">
                          <div className="relative w-[242px] h-[250px] -top-px">
                            <img
                              className="absolute w-[158px] h-[152px] top-[49px] left-0"
                              alt="Group"
                              src="public/group-4.png"
                            />
                            <div className="absolute w-[171px] h-[152px] top-[83px] left-[13px] rotate-[-169.23deg]">
                              <div className="relative w-[194px] h-[166px] -top-0.5 left-[-22px]">
                                <img
                                  className="absolute w-[145px] h-[137px] top-4 left-3 rotate-[169.23deg]"
                                  alt="Vector"
                                  src="public/vector-7.svg"
                                />
                                <img
                                  className="absolute w-[131px] h-[135px] top-[11px] left-[52px] rotate-[169.23deg]"
                                  alt="Group"
                                  src="public/group-5.png"
                                />
                              </div>
                            </div>
                            <div className="absolute w-[174px] h-[147px] top-10 left-[41px] rotate-[43.69deg]">
                              <div className="relative w-[278px] h-60 -top-11 left-[-58px]">
                                <img
                                  className="absolute w-[171px] h-[169px] top-9 left-[35px] rotate-[-43.69deg]"
                                  alt="Vector"
                                  src="public/vector-8.svg"
                                />
                                <img
                                  className="absolute w-[165px] h-[165px] top-[35px] left-[79px] rotate-[-43.69deg]"
                                  alt="Group"
                                  src="public/group-6.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute w-[73px] h-[54px] top-[43px] left-[114px]"
                      alt="Group"
                      src="public/group-2-1.png"
                    />
                    <img
                      className="absolute w-[63px] h-[78px] top-[34px] left-[307px]"
                      alt="Group"
                      src="public/group-3.png"
                    />
                    <div className="absolute w-[363px] h-[274px] top-[109px] left-[45px] rotate-[146.49deg]">
                      <img
                        className="absolute w-[77px] h-[76px] -top-0.5 -left-1 rotate-[-146.49deg]"
                        alt="Vector"
                        src="public/vector-6.svg"
                      />
                      <div className="absolute w-[261px] h-[85px] top-[94px] left-[143px] rotate-[67.48deg]">
                        <img
                          className="absolute w-[78px] h-16 top-[-46px] left-[168px] rotate-[-67.48deg]"
                          alt="Vector"
                          src="public/vector-10.svg"
                        />
                        <img
                          className="absolute w-[72px] h-[84px] top-[54px] left-4 rotate-[-67.48deg]"
                          alt="Group"
                          src="public/group-2-2.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[507px] h-[518px] absolute top-0 left-0">
                  <div className="relative h-[518px]">
                    <img
                      className="absolute w-[232px] h-[233px] top-0 left-[133px]"
                      alt="Vector"
                      src="public/vector-3-3.svg"
                    />
                    <img
                      className="absolute w-[203px] h-[225px] top-28 left-0"
                      alt="Vector"
                      src="public/vector-4-1.svg"
                    />
                    <img
                      className="absolute w-[237px] h-52 top-[306px] left-[41px]"
                      alt="Vector"
                      src="public/vector-5-2.svg"
                    />
                    <img
                      className="absolute w-[179px] h-52 top-[310px] left-[245px]"
                      alt="Vector"
                      src="public/vector-6-2.svg"
                    />
                    <img
                      className="absolute w-56 h-[225px] top-[119px] left-[283px]"
                      alt="Vector"
                      src="public/vector-7-1.svg"
                    />
                    <div className="absolute w-20 h-[81px] top-[231px] left-[204px] bg-[#fdeb022e] rounded-[39.79px/40.4px]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-56 left-[766px] w-[572px]">
              <div className="[font-family:'Inter',Helvetica] font-normal text-[#1b1642] text-[22px] tracking-[0] leading-[22px]">
                <span className="font-semibold leading-[35px]">
                  Mr. Vimal Ashara,{" "}
                </span>
                <span className="leading-[35px]">
                  the founder of Satva Vastu, is a trusted and professionally
                  qualified Vastu consultant based in India. With extensive
                  expertise and skills, he specializes in{" "}
                </span>
                <span className="font-bold leading-[0.1px]">enhancing</span>
                <span className="leading-[35px]">&nbsp;</span>
                <span className="font-bold leading-[0.1px]">
                  Happiness and Prosperity <br />
                  Prosperity <br />
                  <br />
                </span>
                <span className="text-[28px] leading-[0.1px]">
                  <br /> <br />
                </span>
                <span className="leading-[35px]">
                  <br />
                  <br />
                  in your journey of lifespan by combining our ancient Vedic
                  Vastu and Astrology called{" "}
                </span>
                <span className="font-bold leading-[0.1px]">Astro Vastu</span>
                <span className="leading-[35px]">
                  .<br />
                </span>
              </div>

              <div className="mt-8 flex items-center">
                <div className="w-[486px]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <img
                        className="w-[35px] h-[34px]"
                        alt="Health icon"
                        src="public/add-sign-bold.svg"
                      />
                      <span className="ml-3 [font-family:'Inter',Helvetica] font-normal text-[#1b1642] text-2xl tracking-[0] leading-[35px]">
                        Health
                      </span>
                    </div>

                    <div className="flex items-center">
                      <img
                        className="w-[38px] h-[38px]"
                        alt="Wealth icon"
                        src="public/group.png"
                      />
                      <span className="ml-3 [font-family:'Inter',Helvetica] font-normal text-[#1b1642] text-2xl tracking-[0] leading-[35px]">
                        Wealth
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="w-9 h-[35px] bg-[url(public/group-1.png)] bg-[100%_100%]" />
                      <span className="ml-3 [font-family:'Inter',Helvetica] font-normal text-[#1b1642] text-2xl tracking-[0] leading-[35px]">
                        Career
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="w-9 h-[35px]">
                        <img
                          className="w-8 h-[35px] ml-0.5"
                          alt="Relationships icon"
                          src="public/group-2.png"
                        />
                      </div>
                      <span className="ml-3 [font-family:'Inter',Helvetica] font-normal text-[#1b1642] text-2xl tracking-[0] leading-[35px]">
                        Relationships
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-[1162px] top-[669px] left-[158px] [font-family:'Inter',Helvetica] font-normal text-[#1b1642] text-[22px] tracking-[0] leading-[35px]">
              <br />
              <span className="font-extrabold italic text-[#1b1642] text-2xl">
                We at Satva Vastu, prominently believe that every person has
                ability to live healthy and happy life.{" "}
              </span>
              <span>
                But due to some imbalance of Vastu in their home or premises,
                they may encounter some kind of obstacles in areas of health,
                wealth or prosperity in their lives.
              </span>
            </div>

            {/* Our Services Section */}
            <div className="absolute top-[956px] left-0 w-full flex justify-center">
              <h2 className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-[#1b1642] text-7xl tracking-[0] leading-[normal]">
                Our Services
              </h2>
            </div>

            <div className="absolute w-[1430px] h-[392px] top-[1122px] left-[106px] flex gap-5">
              {services.slice(0, 3).map((service, index) => (
                <Card key={index} className="w-[270px] h-[392px] relative">
                  <div className="relative w-[378px] h-[500px] -top-2.5 left-[-54px]">
                    <img
                      className="absolute w-[378px] h-[499px] top-px left-0"
                      alt="Card background"
                      src={`public/rectangle-73-${index === 0 ? "1" : index === 1 ? "2" : ""}.svg`}
                    />
                    <img
                      className="absolute w-[378px] h-[324px] top-0 left-0 object-cover"
                      alt={service.title}
                      src={service.image}
                    />
                    <CardContent className="absolute top-[260px] left-[81px]">
                      <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#000000] text-lg tracking-[0] leading-[28.8px]">
                        {service.title}
                      </h3>
                      <p className="mt-2 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[21.4px] w-[220px]">
                        {service.description}
                      </p>
                    </CardContent>
                    <img
                      className="absolute w-3 h-[11px] top-[266px] left-[281px]"
                      alt="Arrow right"
                      src={`public/arrow-right${index === 0 ? "" : index === 1 ? "-2" : "-3"}.png`}
                    />
                  </div>
                </Card>
              ))}

              {services.slice(3).map((service, index) => (
                <Card key={index + 3} className="w-[270px] h-[392px] relative">
                  <div className="relative w-[378px] h-[500px] -top-2.5 left-[-54px]">
                    <img
                      className="absolute w-[378px] h-[499px] top-px left-0"
                      alt="Card background"
                      src={`public/rectangle-73-${index === 0 ? "3" : "4"}.svg`}
                    />
                    <img
                      className="w-[378px] absolute h-[324px] top-0 left-0"
                      alt={service.title}
                      src={service.image}
                    />
                    <CardContent className="absolute top-[249px] left-[81px]">
                      <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#000000] text-lg tracking-[0] leading-[28.8px]">
                        {service.title}
                      </h3>
                      <p className="mt-2 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[21.4px] w-[220px]">
                        {service.description}
                      </p>
                    </CardContent>
                    {index === 0 && (
                      <img
                        className="absolute w-3 h-[11px] top-[266px] left-[282px]"
                        alt="Arrow right"
                        src="public/arrow-right-1.png"
                      />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="relative mt-20">
          <div className="w-[1450px] h-[941px] relative">
            <img
              className="w-[1450px] h-[665px] top-[23px] left-0 absolute"
              alt="Background"
              src="public/rectangle-8.svg"
            />

            <div className="absolute w-[1440px] h-[262px] top-[679px] left-[3px] bg-[#e8f1ff]" />

            <div className="absolute top-0 left-[180px] [font-family:'Inter',Helvetica] font-semibold text-[#1b1642] text-[32px] tracking-[0] leading-[35px]">
              +91 9426969501
            </div>

            <div className="absolute top-[318px] left-60 text-center">
              <h2 className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-[#1b1642] text-[64px] tracking-[0] leading-[normal]">
                Experience the difference with us!
              </h2>

              <p className="mt-6 w-[726px] mx-auto [font-family:'Inter',Helvetica] font-normal text-[#1b1642] text-[28px] text-center tracking-[0] leading-[35px]">
                Feel the impact of personalized care and see the results you've
                been waiting for.
              </p>
            </div>

            <div className="absolute top-[1685px] left-0 w-full flex justify-center">
              <h2 className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-[#1b1642] text-7xl leading-[normal]">
                Contact Us
              </h2>
            </div>

            <div className="absolute w-[562px] h-[218px] top-[723px] left-[57px]">
              <div className="absolute w-[562px] h-[85px] top-0 left-0">
                <div className="w-[90px] h-[85px] absolute top-0 left-0">
                  <div className="relative h-[85px]">
                    <img
                      className="absolute w-10 h-[38px] top-0 left-6"
                      alt="Vector"
                      src="public/vector-3-1.svg"
                    />
                    <img
                      className="absolute w-9 h-[37px] top-[18px] left-0"
                      alt="Vector"
                      src="public/vector-4.svg"
                    />
                    <img
                      className="absolute w-[41px] h-[34px] top-[50px] left-2"
                      alt="Vector"
                      src="public/vector-5.svg"
                    />
                    <img
                      className="absolute w-8 h-[34px] top-[51px] left-[43px]"
                      alt="Vector"
                      src="public/vector-6-1.svg"
                    />
                    <img
                      className="absolute w-10 h-[37px] top-[19px] left-[50px]"
                      alt="Vector"
                      src="public/vector-7-2.svg"
                    />
                    <div className="absolute w-3.5 h-[13px] top-[38px] left-9 bg-[#fdeb02] rounded-[7.06px/6.7px]" />
                  </div>
                </div>

                <div className="absolute w-[470px] top-[61px] left-[90px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#000000] text-lg tracking-[0] leading-[normal]">
                  Health |&nbsp;&nbsp;Wealth&nbsp;&nbsp;|&nbsp;&nbsp;Prosperity
                </div>

                <img
                  className="absolute w-[222px] h-[3px] top-[53px] left-[90px]"
                  alt="Line"
                  src="public/line-1-1.svg"
                />

                <img
                  className="absolute w-[216px] h-[34px] top-2.5 left-24"
                  alt="Vector"
                  src="public/vector-12.svg"
                />
              </div>

              <div className="absolute w-[312px] top-[97px] left-[18px] [font-family:'Inter',Helvetica] font-normal text-[#1b1642] text-[22px] text-justify tracking-[0] leading-[30px]">
                Satva looks after growth, love and the higher mind.
              </div>
            </div>

            <div className="absolute w-[568px] top-[4219px] left-[182px]">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#000000] text-4xl tracking-[0] leading-[57.6px]">
                ADDRESS
              </h3>

              <div className="mt-4 [font-family:'Inter',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[42.9px]">
                5-6 Panchshil Plaza <br />
                Panchvati Road -Kotechanagar Road, <br />
                Near, Amin Marg, <br />
                Rajkot, Gujarat - 360001
              </div>

              <h3 className="mt-8 [font-family:'Inter',Helvetica] font-bold text-[#000000] text-4xl leading-[57.6px]">
                CONTACT NUMBER
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
