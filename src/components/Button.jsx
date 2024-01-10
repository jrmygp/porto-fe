import React from "react";

function Button({ title }) {
  return (
    <a className="w-fit py-5 px-16 rounded-full text-2xl bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6]">
      {title}
    </a>
  );
}

export default Button;
