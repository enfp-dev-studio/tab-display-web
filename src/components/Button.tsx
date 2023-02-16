import React from "react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = (props: Props) => {
  return (
    <div className="flex space-x-2">
      <button
        // disabled={props.disabled}
        onClick={props.onClick}
        type="button"
        className="auto-center leading-12 text-neutral-80 inline-block rounded bg-primary px-6 py-2.5 text-xl font-medium leading-tight shadow-md transition  duration-150 ease-in-out hover:opacity-90 hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg"
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
