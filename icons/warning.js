import { SVG } from "@kleros/components";

export default function Warning({ size = 16, ...rest }) {
  return (
    <SVG
      width={size}
      height={size}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M17.7974 13.7504C18.3742 14.7502 17.6502 16 16.4981 16H1.5017C0.347415 16 -0.373272 14.7483 0.202415 13.7504L7.70073 0.749531C8.27782 -0.25075 9.72323 -0.248937 10.2993 0.749531L17.7974 13.7504ZM9.00001 11.0625C8.2061 11.0625 7.56251 11.7061 7.56251 12.5C7.56251 13.2939 8.2061 13.9375 9.00001 13.9375C9.79391 13.9375 10.4375 13.2939 10.4375 12.5C10.4375 11.7061 9.79391 11.0625 9.00001 11.0625ZM7.63523 5.89544L7.86704 10.1454C7.87788 10.3443 8.04232 10.5 8.24148 10.5H9.75854C9.9577 10.5 10.1221 10.3443 10.133 10.1454L10.3648 5.89544C10.3765 5.68063 10.2055 5.5 9.99035 5.5H8.00963C7.79451 5.5 7.62351 5.68063 7.63523 5.89544Z"
        fill="#ff9900"
      />
    </SVG>
  );
}