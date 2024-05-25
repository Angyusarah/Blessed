import Wishes1 from "../../assets/wishes1.png";
import Wishes2 from "../../assets/wishes2.png";
import Button from "../../components/Button";
import Thankyou from "../../assets/thankyou.png";
import { FaXmark } from "react-icons/fa6";
import { sendMail } from "../../helper/data";
import { useState } from "react";
const Form = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('')
  const [wish, setWish] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName === "" || wish === "") {
      setError(true);
      return;
    } else {
      setLoading(true);
      setError(false);
      console.log(fullName, wish);
    
      sendMail(fullName, wish)
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            setFullName("");
            setWish("");
            setLoading(false);
            setShowModal(true)
          } else {
            console.log(error);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-10 px-6 py-[80px] lg:justify-center lg:gap-[50px]">
        <img
          src={Wishes1}
          className=" w-[200px] h-[120px] self-end mb-5 lg:h-[200px] lg:w-[300px]"
          alt=""
        />

        <div className=" w-full  rounded-xl flex flex-col gap-4 bg-offwhite">
          <div className="text-center">
            <h1 className=" font-semibold text-2xl">
              Share Your Messages of Love and Joy.
            </h1>
            <p className="text-[17px]">Leave your heartfelt wishes below.</p>
          </div>

          <div className="relative bg-white p-5 rounded-2xl border-[1px] border-buttonblue flex flex-col">
            <form action=""
            className="w-full">
              <div>
                <label htmlFor="name" className=" font-medium">
                  {" "}
                  Name:
                </label>

                <input
                  type="text"
                  name=""
                  id="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Name*"
                  className="focus:border-buttonblue rounded-lg border-[1px] focus:outline-none p-4 md:py-6 h-[2.25rem] lg:h-[3.6rem] w-full  mt-3"
                />
                {error && name.length <= 0 ? (
                  <p className="text-red-500">Name is required</p>
                ) : (
                  ""
                )}
              </div>

              <div className="my-5">
                <label htmlFor="message" className=" font-medium">
                  Wishes:
                </label>
                <textarea
                  type="text"
                  name=""
                  id="message"
                  value={wish}
                  onChange={(e) => setWish(e.target.value)}
                  placeholder="Write your wishes..."
                  className=" w-full p-4 border-[1px] rounded-lg focus:border-buttonblue focus:outline-none focus:ring-0 h-[8rem] lg:h-[10rem] mt-3"
                />
                {error && content.length <= 0 ? (
                  <p className="text-red-500">Content is required</p>
                ) : (
                  ""
                )}
              </div>
            </form>

            {loading ? (
              <p className="text-black md:text-white">Loading...</p>
            ) : (
              ""
            )}

            <div className="w-full flex text-white self-end mt-5">
              <Button
                className={"tracking-wider font-bold lg:mt-10 my-5  py-[5px]"}
                onClick={handleSubmit}>
                Share Your Love
              </Button>
            </div>

            {showModal && <div className="flex justify-center items-center">
        <div className=" absolute top-20 flex flex-col justify-center items-center text-center w-[90%] lg:w-[60%] bg-lightblue rounded-3xl py-5 px-5 md:px-6">
          <button onClick={closeModal} className=" bg-buttonblue absolute top-3 right-3 text-white h-8 md:h-10 w-8 md:w-10 flex justify-center items-center text-2xl rounded-full ">
            <FaXmark />
          </button>
          <img src={Thankyou} alt="" />
          <p className=" text-lg md:text-xl">
            Grateful for your heartfelt wishes! Your kindness has made
            Chukwumeka's birthday memorable. Your presence in his life is
            cherished.
          </p>
        </div>
      </div>}
          </div>
        </div>
        <img
          src={Wishes2}
          className=" w-[200px] h-[150px] self-start mb-5 lg:h-[250px] lg:w-[300px]"
          alt=""
        />
      </div>

    
    </div>
  );
};

export default Form;
