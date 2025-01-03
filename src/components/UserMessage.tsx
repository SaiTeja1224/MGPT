import Avatar from "./Avatar";

function UserMessage() {
  return (<div className="flex justify-end items-center gap-5 mx-3">
    <Avatar />
    <div className="border-l-2 border-gray-300 self-stretch my-4">
    </div>
    <p className="text-gray-500">
    2:40pm
    </p>
    <div className="bg-primary text-white flex-grow max-w-fit px-5 py-4 rounded-[20px] text-lg font-bold">
      Write a Short Note on Historical Models
    </div>
  </div>
  );
}

export default UserMessage;
