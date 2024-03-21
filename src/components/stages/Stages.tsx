import Stage1 from "./Stage1";
import AccountStep1 from "./create-account/AccountStep1";

const Stages = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[46px]"></div>
      <div className="pb-5 px-5 flex-1 h-full w-full ">
        <Stage1 />
        {/* <AccountStep1 /> */}
      </div>
    </div>
  );
};

export default Stages;
