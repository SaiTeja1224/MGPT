import Avatar from "./Avatar";

function UserMessage() {
  return (<div className="flex justify-end items-center gap-5 mx-3">
    <div className="bg-primary text-white max-w-60% basis-[40%] px-5 py-4 rounded-[20px] text-lg font-bold">
      "Write a Short Note on Historical Models"
    </div>
    <Avatar />
  </div>
  );
}

export default UserMessage;
