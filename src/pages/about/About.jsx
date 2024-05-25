import Heading from "../../components/Heading";
import b4 from "../../assets/images/b4.jpg"
import b3 from "../../assets/images/b3.jpg"
import b36 from "../../assets/images/b36.jpg"
import Container from "../../components/Container";

const About = () => {
  return (
    <div>
        <Container>
        <div className=" px-8 pt-10 md:px-10 lg:px-[100px]">
      <div className="text-center mb-5">
        <Heading
          heading="Meet the Birthday Star"
          extraClass={"text-[19px] md:text-[40px] leading-[30px] mb-3"}
        />
        <p className="md:text-xl">
          Explore the heart of our celebration: 'About the Birthday Celebrant'.
          Welcome to the spotlight where we shine a light on the
          remarkable individual we're celebrating today. Dive into the life and passions of Chukwuemeka, discovering what makes
          him extraordinary. Join us in honoring and celebrating the joy and
          inspiration he brings to our lives.
        </p>
      </div>

      <div>
        <div className="md:flex md:gap-10 lg:gap-12">
          <div className="basis-1/2">

            <div className="my-10">
              <h2 className="font-semibold text-xl md:text-2xl tracking-wide my-2">
                Early Beginnings:
              </h2>
              <p className="md:text-xl text-justify leading-6">
                "I learned early on in my younger days the value of
                hard work and determination from being active in my parent’s
                businesses. Childhood was for me a time of endless curiosity and
                desire for excellence. I was captivated by the simple joys of
                solving math problems correctly, performing basic science
                explorations, and engaging in all forms of learning, which
                excited my young mind. As with many young children with dreams
                but limited by background, education became my hope for a
                brighter future, and with dedication, I excelled academically.
                Typical of a young Jos boy, I enjoyed playing street football,
                which fueled my passion for the sport and made me a fan of
                Arsenal Football Club. I have always strived to make a positive
                impact to my society, which to me is wherever I find myself,
                starting with my immediate family. Looking back, I am grateful
                for the experiences that molded my early beginnings and set me
                on the path to becoming the person I am today, and I eagerly
                anticipate the unfolding of even greater adventures in the years
                to come."
              </p>
            </div>
          </div>

          <div className=" md:flex md:justify-center md:items-center md:basis-1/2 ">
            <img src={b4} className="w-[100%] h-[70%] " alt="" />
          </div>
        </div>

        <div className="md:flex md:gap-12">
          <div className="basis-1/2">
            <div className="my-10">
              <h2 className="font-semibold text-xl md:text-2xl tracking-wide my-2">
                Memorable Moments:
              </h2>
              <p className="md:text-xl text-justify leading-6">
               "In retrospect, I’ve had several cherished
                experiences that left fond memories in my heart. One memory that
                holds a special place in my heart is the day I bought my first
                phone at the age of 18. It was for me a significant milestone,
                as I used my own earnings, giving me a sense of independence and
                responsibility. Another treasured moment was the day I received
                an academic award, which covered my undergraduate tuition and
                expenses until graduation. This recognition provided immense
                support and relief throughout my educational journey, which was
                much needed. I remember fondly the final days of my
                undergraduate studies. Writing my final exams and collecting my
                university testimonial, which confirmed my graduation with
                first-class honors, was a moment of immense pride and a sense of
                reward after years of dedication. I remember clenching my fist
                so tightly and throwing a punch in the air with the loudest
                ‘yes’, I have ever shouted! Embarking on my first flight—an
                international flight to the USA for my doctorate studies—was
                also a most memorable time that filled me with anxiety but also
                excitement and anticipation of the promise of new horizons. I
                hold dear memories of friendships forged over these years,
                especially countless shared moments of laughter, support, and
                brotherhood with my guys and my entire squad. Lastly, there are
                a few deeply personal memories that I choose to keep in the
                warmth of my heart, accompanied by a joyful smile, rather than
                putting into words. These milestones and experiences are, for
                me, a reminder that amidst life's chaos, there are also triumphs
                and joys along the way to be embraced."
              </p>
            </div>

          </div>
          <div className=" md:flex md:justify-center md:items-center md:basis-1/2 order-[-1]">
            <img src={b36} className="w-[100%] h-[70%]" alt="" />
          </div>
        </div>

        <div className="md:flex md:gap-10 lg:gap-12">
          <div className="basis-1/2">

          <div className="my-10">
              <h2 className="font-semibold text-xl md:text-2xl tracking-wide my-2">
                Passions and Hobbies:
              </h2>
              <p className="md:text-xl text-justify leading-6">
                "I have a few hobbies and passions that
                provide a sense of purpose and bring me immense fulfillment.
                Being happy and making people happy is not just a hobby for me;
                it is a passion! To bring smiles to faces and spread a sense of
                positivity fills my heart with so much satisfaction. As a sport,
                football holds a special place in my heart. It is for me both a
                passion and a hobby, whether as a fan watching Arsenal play and
                wining games or as a player running the field length chasing the
                round leather, which brings me so much thrill and elation. I
                have a passion for making money and having money. While it may
                be seen as only a means to an end, this end is not attainable
                without the means—money! I love to see movies occasionally and
                play video games. Also, there is nothing like too much sleep.
                Lol, I make sure to have as much of it as I can. They are
                activities that help me relax so I will count them as hobbies.
                These actions and activities have shaped my identity, drive my
                actions, and contribute to my overall happiness."
              </p>
            </div>
          </div>

          <div className=" md:flex md:justify-center md:items-center md:basis-1/2 ">
            <img src={b3} className="w-[100%] h-[70%] " alt="" />
          </div>
        </div>
      </div>

      <p className="md:text-xl text-justify my-10">
        As we celebrate Chukwuemeka's special day, let's reflect on the joy
        and inspiration he brings to our lives. Join us in honoring his
        unique journey and celebrating the wonderful person he is.
      </p>
    </div>
        </Container>
    </div>
  );
};

export default About;
