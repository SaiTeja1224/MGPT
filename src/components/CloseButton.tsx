import Icon from "./Icon";

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <Icon
      src="/close-btn.svg"
      height={14}
      width={14}
      containerClassName="bg-white border border-gray-300"
      alt=""
      onClick={() => onClick()}
    />
  );
}

export default CloseButton;
